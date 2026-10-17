import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import TechBackground from "@/components/TechBackground";
import { POSTS } from "@/lib/blog-data";
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Tag } from "lucide-react";

const SITE_URL = "https://thinklyedu.com";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Article not found | Thinklyedu" };
  }
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} | Thinklyedu Blog`,
    description: post.excerpt,
    keywords: [post.category, "Thinklyedu", "digital services", "blog"],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function ContentBlock({ block }) {
  if (block.type === "heading") {
    return (
      <h2
        style={{
          fontSize: "clamp(22px,3vw,30px)",
          fontWeight: 800,
          color: "#F8FAFC",
          letterSpacing: "-0.02em",
          margin: "40px 0 16px",
          lineHeight: 1.25,
        }}
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "list") {
    return (
      <ul style={{ margin: "0 0 24px", padding: 0, listStyle: "none" }}>
        {block.items.map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              color: "#CBD5E1",
              fontSize: 17,
              lineHeight: 1.8,
              marginBottom: 12,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22C55E",
                flexShrink: 0,
                marginTop: 12,
              }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote
        style={{
          margin: "24px 0",
          padding: "20px 24px",
          borderLeft: "3px solid #22C55E",
          background: "rgba(34,197,94,0.05)",
          borderRadius: "0 12px 12px 0",
          color: "#E2E8F0",
          fontSize: 18,
          fontStyle: "italic",
          lineHeight: 1.8,
        }}
      >
        {block.text}
      </blockquote>
    );
  }

  return (
    <p
      style={{
        color: "#CBD5E1",
        fontSize: 17,
        lineHeight: 1.9,
        margin: "0 0 22px",
      }}
    >
      {block.text}
    </p>
  );
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  ).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image}`,
    articleSection: post.category,
    publisher: {
      "@type": "Organization",
      name: "Thinklyedu",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <main
      style={{
        fontFamily: "'Inter', -apple-system, sans-serif",
        position: "relative",
        background: "#0a1628",
        color: "#F1F5F9",
        minHeight: "100vh",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TechBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Hero */}
        <section style={{ padding: "120px 24px 0" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#4ADE80",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                marginBottom: 28,
              }}
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 16,
                marginBottom: 18,
                fontSize: 13,
                color: "#94A3B8",
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#08150C",
                  background: "#4ADE80",
                  borderRadius: 999,
                  padding: "5px 14px",
                  fontWeight: 700,
                }}
              >
                <Tag size={12} /> {post.category}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <Calendar size={13} /> {post.date}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <BookOpen size={13} /> {post.readTime}
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(32px,5vw,50px)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#F8FAFC",
                margin: "0 0 20px",
              }}
            >
              {post.title}
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "#94A3B8",
                lineHeight: 1.8,
                margin: "0 0 36px",
              }}
            >
              {post.excerpt}
            </p>
          </div>

          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div
              style={{
                position: "relative",
                aspectRatio: "16/9",
                borderRadius: 24,
                overflow: "hidden",
                border: "1.5px solid rgba(255,255,255,0.08)",
              }}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, 900px"
                priority
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: "48px 24px 64px" }}>
          <article style={{ maxWidth: 800, margin: "0 auto" }}>
            {post.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}

            {/* Inline CTA */}
            {post.service && (
              <div
                style={{
                  marginTop: 48,
                  padding: "32px",
                  borderRadius: 20,
                  background: "rgba(34,197,94,0.05)",
                  border: "1.5px solid rgba(34,197,94,0.22)",
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#4ADE80",
                    margin: "0 0 8px",
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  }}
                >
                  Related service
                </p>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#F8FAFC",
                    margin: "0 0 10px",
                  }}
                >
                  Need help with {post.service.label.toLowerCase()}?
                </h3>
                <p
                  style={{
                    color: "#94A3B8",
                    fontSize: 15,
                    lineHeight: 1.7,
                    margin: "0 0 20px",
                  }}
                >
                  Our team can help you plan, build and launch. Get a free,
                  no-obligation quote.
                </p>
                <Link
                  href={post.service.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#22C55E",
                    color: "#08150C",
                    fontWeight: 700,
                    fontSize: 15,
                    padding: "13px 28px",
                    borderRadius: 999,
                    textDecoration: "none",
                  }}
                >
                  Explore {post.service.label} <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </article>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section style={{ padding: "16px 24px 96px" }}>
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>
              <h2
                style={{
                  fontSize: "clamp(22px,3vw,30px)",
                  fontWeight: 800,
                  color: "#F8FAFC",
                  margin: "0 0 24px",
                  letterSpacing: "-0.02em",
                }}
              >
                More in {post.category}
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: 20,
                }}
              >
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      padding: 24,
                      borderRadius: 18,
                      background: "rgba(255,255,255,0.03)",
                      border: "1.5px solid rgba(255,255,255,0.08)",
                      textDecoration: "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#4ADE80",
                        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                      }}
                    >
                      {r.category}
                    </span>
                    <h3
                      style={{
                        fontSize: 17,
                        fontWeight: 700,
                        color: "#F1F5F9",
                        margin: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      {r.title}
                    </h3>
                    <span
                      style={{
                        marginTop: "auto",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        color: "#22C55E",
                        fontSize: 13.5,
                        fontWeight: 700,
                      }}
                    >
                      Read article <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
