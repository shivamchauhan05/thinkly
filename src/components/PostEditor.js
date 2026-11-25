"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  Plus,
  Save,
  Trash2,
} from "lucide-react";
import { CATEGORIES } from "@/lib/blog-data";
import { adminRequest, clearToken, isAuthError, uploadImage } from "@/lib/blog-api";
import {
  pageStyle,
  panelStyle,
  inputStyle,
  textareaStyle,
  labelStyle,
  primaryButton,
  ghostButton,
  dangerButton,
  slugify,
  today,
} from "@/lib/admin-styles";

const emptyBlock = () => ({ type: "paragraph", text: "", items: [] });

const emptyPost = {
  title: "",
  slug: "",
  excerpt: "",
  image: "/build.jpg",
  category: "Website",
  date: today(),
  readTime: "5 min read",
  featured: false,
  published: true,
  author: "Thinklyedu",
  service: { label: "", href: "" },
  content: [emptyBlock()],
};

const blockTypes = [
  ["paragraph", "Paragraph"],
  ["heading", "Heading"],
  ["quote", "Quote"],
  ["list", "Bullet list"],
  ["image", "Image"],
];

export default function PostEditor({ postId }) {
  const router = useRouter();
  const [form, setForm] = useState(emptyPost);
  const [slugTouched, setSlugTouched] = useState(false);
  const [loading, setLoading] = useState(Boolean(postId));
  const [saving, setSaving] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingBlock, setUploadingBlock] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!postId) return;
    adminRequest(`/api/posts/admin/${postId}`)
      .then((data) => {
        setForm({
          ...emptyPost,
          ...data,
          service: data.service || { label: "", href: "" },
          content:
            Array.isArray(data.content) && data.content.length
              ? data.content
              : [emptyBlock()],
        });
        setSlugTouched(true);
      })
      .catch((err) => {
        if (isAuthError(err)) {
          clearToken();
          router.replace("/admin/login");
          return;
        }
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [postId, router]);

  function setField(key, value) {
    setForm((current) => {
      const next = { ...current, [key]: value };
      if (key === "title" && !slugTouched) next.slug = slugify(value);
      return next;
    });
  }

  function setBlock(index, patch) {
    setForm((current) => ({
      ...current,
      content: current.content.map((block, i) =>
        i === index ? { ...block, ...patch } : block,
      ),
    }));
  }

  function addBlock(type = "paragraph") {
    setForm((current) => ({
      ...current,
      content: [...current.content, { ...emptyBlock(), type }],
    }));
  }

  function removeBlock(index) {
    setForm((current) => ({
      ...current,
      content: current.content.filter((_, i) => i !== index),
    }));
  }

  function moveBlock(index, direction) {
    setForm((current) => {
      const content = [...current.content];
      const target = index + direction;
      if (target < 0 || target >= content.length) return current;
      [content[index], content[target]] = [content[target], content[index]];
      return { ...current, content };
    });
  }

  async function handleImageUpload(file, onSuccess, setBusy) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Please choose an image file.");
      return;
    }

    setBusy(true);
    setError("");
    try {
      const data = await uploadImage(file);
      onSuccess(data);
    } catch (err) {
      if (isAuthError(err)) {
        clearToken();
        router.replace("/admin/login");
        return;
      }
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  function handleCoverUpload(file) {
    return handleImageUpload(
      file,
      (data) => setField("image", data.secureUrl),
      setUploadingCover,
    );
  }

  function handleBlockUpload(index, file) {
    return handleImageUpload(
      file,
      (data) => setBlock(index, { url: data.secureUrl, publicId: data.publicId }),
      (busy) => setUploadingBlock(busy ? index : null),
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    setError("");
    try {
      const payload = {
        ...form,
        slug: form.slug || slugify(form.title),
        content: form.content.map((block) => {
          if (block.type === "list") {
            return { type: "list", items: block.items || [] };
          }
          if (block.type === "image") {
            return {
              type: "image",
              url: block.url || "",
              text: block.text || "",
              publicId: block.publicId || "",
            };
          }
          return { type: block.type, text: block.text || "" };
        }),
      };
      if (postId) {
        await adminRequest(`/api/posts/${postId}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
      } else {
        await adminRequest("/api/posts", {
          method: "POST",
          body: JSON.stringify(payload),
        });
      }
      router.push("/admin");
      router.refresh();
    } catch (err) {
      if (isAuthError(err)) {
        clearToken();
        router.replace("/admin/login");
        return;
      }
      setError(err.message);
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!window.confirm("Are you sure you want to delete this article?")) return;
    try {
      await adminRequest(`/api/posts/${postId}`, { method: "DELETE" });
      router.push("/admin");
      router.refresh();
    } catch (err) {
      if (isAuthError(err)) {
        clearToken();
        router.replace("/admin/login");
        return;
      }
      setError(err.message);
    }
  }

  if (loading) {
    return (
      <main style={{ ...pageStyle, display: "grid", placeItems: "center" }}>
        <p style={{ color: "#94A3B8", fontFamily: "monospace" }}>
          {"// Loading article..."}
        </p>
      </main>
    );
  }

  return (
    <main style={pageStyle}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');`}</style>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Link
          href="/admin"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "#94A3B8",
            fontSize: 13,
            textDecoration: "none",
            marginBottom: 24,
          }}
        >
          <ArrowLeft size={15} /> Back to dashboard
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div>
            <h1 style={{ fontSize: 30, fontWeight: 900, margin: "0 0 8px" }}>
              {postId ? "Edit article" : "New article"}
            </h1>
            <p style={{ color: "#94A3B8", fontSize: 14, margin: 0 }}>
              Fill in all the details for this blog post.
            </p>
          </div>
          {postId && (
            <button onClick={handleDelete} style={dangerButton}>
              <Trash2 size={15} /> Delete
            </button>
          )}
        </div>

        {error && (
          <p
            style={{
              color: "#FCA5A5",
              background: "rgba(248,113,113,0.08)",
              border: "1px solid rgba(248,113,113,0.25)",
              borderRadius: 10,
              padding: "10px 14px",
              fontSize: 13,
              marginBottom: 18,
            }}
          >
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ ...panelStyle, marginBottom: 20 }}>
            <h2 style={{ fontSize: 16, fontWeight: 800, margin: "0 0 22px", color: "#F8FAFC" }}>
              Basic details
            </h2>
            <div
              className="rx-stack"
              style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 18 }}
            >
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={labelStyle} htmlFor="post-title">Title *</label>
                <input
                  id="post-title"
                  required
                  value={form.title}
                  onChange={(e) => setField("title", e.target.value)}
                  style={inputStyle}
                  placeholder="Article title"
                />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={labelStyle} htmlFor="post-slug">URL slug</label>
                <input
                  id="post-slug"
                  value={form.slug}
                  onChange={(e) => {
                    setSlugTouched(true);
                    setField("slug", slugify(e.target.value));
                  }}
                  style={{ ...inputStyle, fontFamily: "monospace" }}
                  placeholder="article-url-slug"
                />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={labelStyle} htmlFor="post-excerpt">Excerpt</label>
                <textarea
                  id="post-excerpt"
                  value={form.excerpt}
                  onChange={(e) => setField("excerpt", e.target.value)}
                  style={{ ...textareaStyle, minHeight: 80 }}
                  placeholder="Short summary shown on the blog card"
                />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={labelStyle} htmlFor="post-image">Cover image</label>
                <input
                  id="post-image"
                  value={form.image}
                  onChange={(e) => setField("image", e.target.value)}
                  style={inputStyle}
                  placeholder="Cloudinary URL or /build.jpg"
                />
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginTop: 10 }}>
                  <label style={{ ...ghostButton, padding: "8px 12px", fontSize: 12, cursor: "pointer" }}>
                    <Plus size={13} /> {uploadingCover ? "Uploading..." : "Upload image"}
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={(e) => {
                        handleCoverUpload(e.target.files?.[0]);
                        e.target.value = "";
                      }}
                    />
                  </label>
                  <span style={{ color: "#64748B", fontSize: 12 }}>
                    Uploads to Cloudinary — JPG, PNG or WebP up to 10MB
                  </span>
                </div>
                {form.image && (
                  <Image
                    src={form.image}
                    alt="Cover preview"
                    width={900}
                    height={400}
                    unoptimized
                    style={{
                      marginTop: 12,
                      width: "100%",
                      maxHeight: 180,
                      objectFit: "cover",
                      borderRadius: 12,
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  />
                )}
              </div>
              <div>
                <label style={labelStyle} htmlFor="post-category">Category</label>
                <input
                  id="post-category"
                  list="blog-categories"
                  value={form.category}
                  onChange={(e) => setField("category", e.target.value)}
                  style={inputStyle}
                  placeholder="Website"
                />
                <datalist id="blog-categories">
                  {CATEGORIES.filter((item) => item !== "All").map((item) => (
                    <option key={item} value={item} />
                  ))}
                </datalist>
              </div>
              <div>
                <label style={labelStyle} htmlFor="post-date">Display date</label>
                <input
                  id="post-date"
                  value={form.date}
                  onChange={(e) => setField("date", e.target.value)}
                  style={inputStyle}
                  placeholder="Nov 24"
                />
              </div>
              <div>
                <label style={labelStyle} htmlFor="post-readtime">Read time</label>
                <input
                  id="post-readtime"
                  value={form.readTime}
                  onChange={(e) => setField("readTime", e.target.value)}
                  style={inputStyle}
                  placeholder="5 min read"
                />
              </div>
              <div>
                <label style={labelStyle} htmlFor="post-author">Author</label>
                <input
                  id="post-author"
                  value={form.author}
                  onChange={(e) => setField("author", e.target.value)}
                  style={inputStyle}
                  placeholder="Thinklyedu"
                />
              </div>
              <div>
                <label style={labelStyle} htmlFor="service-label">Related service label</label>
                <input
                  id="service-label"
                  value={form.service?.label || ""}
                  onChange={(e) =>
                    setField("service", { ...form.service, label: e.target.value })
                  }
                  style={inputStyle}
                  placeholder="Website Development"
                />
              </div>
              <div>
                <label style={labelStyle} htmlFor="service-href">Related service link</label>
                <input
                  id="service-href"
                  value={form.service?.href || ""}
                  onChange={(e) =>
                    setField("service", { ...form.service, href: e.target.value })
                  }
                  style={inputStyle}
                  placeholder="/services/website"
                />
              </div>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap", gridColumn: "1 / -1" }}>
                <label style={{ display: "flex", alignItems: "center", gap: 10, color: "#CBD5E1", fontSize: 14 }}>
                  <input
                    type="checkbox"
                    checked={Boolean(form.published)}
                    onChange={(e) => setField("published", e.target.checked)}
                    style={{ width: 16, height: 16, accentColor: "#22C55E" }}
                  />
                  Published
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: 10, color: "#CBD5E1", fontSize: 14 }}>
                  <input
                    type="checkbox"
                    checked={Boolean(form.featured)}
                    onChange={(e) => setField("featured", e.target.checked)}
                    style={{ width: 16, height: 16, accentColor: "#22C55E" }}
                  />
                  Featured article
                </label>
              </div>
            </div>
          </div>

          <div style={{ ...panelStyle, marginBottom: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 12,
                marginBottom: 22,
              }}
            >
              <h2 style={{ fontSize: 16, fontWeight: 800, margin: 0, color: "#F8FAFC" }}>
                Article content
              </h2>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {blockTypes.map(([type, name]) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => addBlock(type)}
                    style={{ ...ghostButton, padding: "8px 12px", fontSize: 12 }}
                  >
                    <Plus size={13} /> {name}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gap: 16 }}>
              {form.content.map((block, index) => (
                <div
                  key={index}
                  style={{
                    padding: 18,
                    borderRadius: 12,
                    background: "rgba(5,11,22,0.6)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                      flexWrap: "wrap",
                      marginBottom: 14,
                    }}
                  >
                    <span
                      style={{
                        color: "#4ADE80",
                        fontSize: 11,
                        fontWeight: 700,
                        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                      }}
                    >
                      BLOCK {index + 1}
                    </span>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button
                        type="button"
                        onClick={() => moveBlock(index, -1)}
                        disabled={index === 0}
                        style={{ ...ghostButton, padding: "6px 9px", opacity: index === 0 ? 0.4 : 1 }}
                        aria-label="Move up"
                      >
                        <ArrowUp size={13} />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveBlock(index, 1)}
                        disabled={index === form.content.length - 1}
                        style={{
                          ...ghostButton,
                          padding: "6px 9px",
                          opacity: index === form.content.length - 1 ? 0.4 : 1,
                        }}
                        aria-label="Move down"
                      >
                        <ArrowDown size={13} />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeBlock(index)}
                        style={{ ...dangerButton, padding: "6px 9px" }}
                        aria-label="Remove block"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>

                  <label style={labelStyle} htmlFor={`block-type-${index}`}>Block type</label>
                  <select
                    id={`block-type-${index}`}
                    value={block.type}
                    onChange={(e) => setBlock(index, { type: e.target.value })}
                    style={{ ...inputStyle, marginBottom: 14 }}
                  >
                    {blockTypes.map(([value, name]) => (
                      <option key={value} value={value}>
                        {name}
                      </option>
                    ))}
                  </select>

                  {block.type === "list" ? (
                    <>
                      <label style={labelStyle} htmlFor={`block-items-${index}`}>
                        List items (one per line)
                      </label>
                      <textarea
                        id={`block-items-${index}`}
                        value={(block.items || []).join("\n")}
                        onChange={(e) => setBlock(index, { items: e.target.value.split("\n") })}
                        style={{ ...textareaStyle, minHeight: 130 }}
                        placeholder={"First point\nSecond point"}
                      />
                    </>
                  ) : block.type === "image" ? (
                    <>
                      <label style={labelStyle} htmlFor={`block-url-${index}`}>Image URL</label>
                      <input
                        id={`block-url-${index}`}
                        value={block.url || ""}
                        onChange={(e) => setBlock(index, { url: e.target.value })}
                        style={inputStyle}
                        placeholder="Cloudinary URL"
                      />
                      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginTop: 10 }}>
                        <label style={{ ...ghostButton, padding: "8px 12px", fontSize: 12, cursor: "pointer" }}>
                          <Plus size={13} /> {uploadingBlock === index ? "Uploading..." : "Upload image"}
                          <input
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={(e) => {
                              handleBlockUpload(index, e.target.files?.[0]);
                              e.target.value = "";
                            }}
                          />
                        </label>
                        <span style={{ color: "#64748B", fontSize: 12 }}>Max 10MB</span>
                      </div>
                      <label style={{ ...labelStyle, marginTop: 14 }} htmlFor={`block-caption-${index}`}>
                        Caption (optional)
                      </label>
                      <input
                        id={`block-caption-${index}`}
                        value={block.text || ""}
                        onChange={(e) => setBlock(index, { text: e.target.value })}
                        style={inputStyle}
                        placeholder="Image caption"
                      />
                      {block.url && (
                        <Image
                          src={block.url}
                          alt={block.text || `Article image ${index + 1}`}
                          width={900}
                          height={500}
                          unoptimized
                          style={{
                            marginTop: 12,
                            width: "100%",
                            maxHeight: 220,
                            objectFit: "cover",
                            borderRadius: 12,
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        />
                      )}
                    </>
                  ) : (
                    <>
                      <label style={labelStyle} htmlFor={`block-text-${index}`}>Text</label>
                      <textarea
                        id={`block-text-${index}`}
                        value={block.text || ""}
                        onChange={(e) => setBlock(index, { text: e.target.value })}
                        style={{ ...textareaStyle, minHeight: block.type === "paragraph" ? 140 : 80 }}
                        placeholder="Write your content here..."
                      />
                    </>
                  )}
                </div>
              ))}

              {form.content.length === 0 && (
                <p style={{ color: "#64748B", fontSize: 14, textAlign: "center", padding: 20 }}>
                  No blocks yet. Add one using the buttons above.
                </p>
              )}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button type="submit" disabled={saving} style={primaryButton}>
              <Save size={16} /> {saving ? "Saving..." : postId ? "Save changes" : "Publish article"}
            </button>
            <Link href="/admin" style={{ ...ghostButton, textDecoration: "none" }}>
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
