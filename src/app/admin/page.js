"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, BookOpen, Edit3, LogOut, Plus, Trash2 } from "lucide-react";
import { adminRequest, clearToken, isAuthError } from "@/lib/blog-api";
import {
  pageStyle,
  panelStyle,
  primaryButton,
  ghostButton,
  dangerButton,
  tagStyle,
} from "@/lib/admin-styles";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    adminRequest("/api/posts/admin")
      .then(setPosts)
      .catch((err) => {
        if (isAuthError(err)) {
          clearToken();
          router.replace("/admin/login");
          return;
        }
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [router]);

  async function handleDelete(post) {
    if (!window.confirm(`Are you sure you want to delete "${post.title}"?`)) return;
    try {
      await adminRequest(`/api/posts/${post._id}`, { method: "DELETE" });
      setPosts((current) => current.filter((item) => item._id !== post._id));
    } catch (err) {
      setError(err.message);
    }
  }

  function handleLogout() {
    clearToken();
    router.replace("/admin/login");
  }

  const published = posts.filter((post) => post.published !== false).length;

  return (
    <main style={pageStyle}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');`}</style>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 36,
          }}
        >
          <div>
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#4ADE80",
                fontSize: 12,
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                textDecoration: "none",
                marginBottom: 14,
              }}
            >
              <ArrowLeft size={14} /> /blog
            </Link>
            <h1 style={{ fontSize: "clamp(28px,4vw,38px)", fontWeight: 900, margin: "0 0 8px" }}>
             Blog Manager
            </h1>
            <p style={{ color: "#94A3B8", fontSize: 14, margin: 0 }}>
              Create, edit, and publish articles.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button onClick={handleLogout} style={ghostButton}>
              <LogOut size={15} /> Logout
            </button>
            <Link href="/admin/posts/new" style={{ ...primaryButton, textDecoration: "none" }}>
              <Plus size={16} /> New article
            </Link>
          </div>
        </div>

        <div
          className="rx-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 16,
            marginBottom: 28,
          }}
        >
          {[
            ["Total articles", posts.length, "#4ADE80"],
            ["Published", published, "#22C55E"],
            ["Drafts", posts.length - published, "#94A3B8"],
          ].map(([label, value, color]) => (
            <div key={label} style={panelStyle}>
              <p style={{ color: "#94A3B8", fontSize: 12, margin: "0 0 8px" }}>{label}</p>
              <p style={{ color, fontSize: 30, fontWeight: 900, margin: 0 }}>{value}</p>
            </div>
          ))}
        </div>

        {error && <p style={{ color: "#FCA5A5", fontSize: 13, marginBottom: 16 }}>{error}</p>}

        <div style={panelStyle}>
          {loading ? (
            <p style={{ color: "#94A3B8", fontSize: 14 }}>Loading articles...</p>
          ) : posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <BookOpen size={32} color="#4ADE80" />
              <p style={{ color: "#94A3B8", fontSize: 14, marginTop: 16 }}>
                No articles yet. Create your first article.
              </p>
            </div>
          ) : (
            <div style={{ display: "grid", gap: 12 }}>
              {posts.map((post) => (
                <div
                  key={post._id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    flexWrap: "wrap",
                    padding: "16px 18px",
                    borderRadius: 12,
                    background: "rgba(5,11,22,0.6)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                      <span
                        style={{
                          color: "#F8FAFC",
                          fontSize: 15,
                          fontWeight: 700,
                        }}
                      >
                        {post.title}
                      </span>
                      <span
                        style={{
                          ...tagStyle,
                          background: post.published !== false ? "rgba(34,197,94,0.12)" : "rgba(148,163,184,0.12)",
                          color: post.published !== false ? "#4ADE80" : "#94A3B8",
                        }}
                      >
                        {post.published !== false ? "LIVE" : "DRAFT"}
                      </span>
                    </div>
                    <p style={{ color: "#64748B", fontSize: 12, margin: "6px 0 0" }}>
                      {post.category} · {post.date} · /blog/{post.slug}
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      style={{ ...ghostButton, padding: "9px 12px", textDecoration: "none", fontSize: 12 }}
                    >
                      View
                    </Link>
                    <Link
                      href={`/admin/posts/${post._id}`}
                      style={{ ...ghostButton, padding: "9px 12px", textDecoration: "none", fontSize: 12 }}
                    >
                      <Edit3 size={14} /> Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(post)}
                      style={{ ...dangerButton, padding: "9px 12px", fontSize: 12 }}
                    >
                      <Trash2 size={14} /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
