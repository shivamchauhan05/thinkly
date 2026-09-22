"use client";
import { useEffect, useRef, useState } from "react";
import Footer from '@/components/Footer'
import TechBackground from '@/components/TechBackground'
import { CATEGORIES, POSTS } from '@/lib/blog-data'
import { Terminal, Search, Mail, BookOpen } from "lucide-react";

// ── Section label (monospace "// tag" style, matches homepage/about) ──────────
function SectionTag({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        color: "#22C55E",
        fontSize: 12,
        fontWeight: 700,
        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
        letterSpacing: "0.05em",
      }}
    >
      <span style={{ opacity: 0.6 }}>//</span> {children}
    </span>
  );
}

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");

  const filtered = POSTS.filter((post) => {
    const matchCat = active === "All" || post.category === active;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <main
      className="font-sans antialiased"
      style={{
        fontFamily: "'Inter', -apple-system, sans-serif",
        position: "relative",
        background: "#0a1628",
        color: "#F1F5F9",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
      `}</style>

      <TechBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ── HERO ── */}
        <section
          style={{
            padding: "120px 24px 64px",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#4ADE80",
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                letterSpacing: "0.05em",
                border: "1px solid rgba(34,197,94,0.3)",
                borderRadius: 999,
                padding: "7px 16px",
                background: "rgba(34,197,94,0.08)",
                marginBottom: 24,
              }}
            >
              <Terminal size={13} /> blog_thinklyedu
            </span>

            <h1
              style={{
                fontSize: "clamp(34px,5vw,58px)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#F8FAFC",
                margin: "0 0 18px",
              }}
            >
              Learn, Build & <span style={{ color: "#22C55E" }}>Grow Your Career.</span>
            </h1>

            <p style={{ fontSize: 17, color: "#94A3B8", lineHeight: 1.75, maxWidth: 560, margin: "0 auto 36px" }}>
              Practical guides, career tips and tech playbooks — written for students who want real experience.
            </p>

            {/* Search */}
            <div style={{ maxWidth: 560, margin: "0 auto" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "rgba(255,255,255,0.03)",
                  border: "1.5px solid rgba(255,255,255,0.08)",
                  borderRadius: 999,
                  padding: "6px 8px 6px 20px",
                }}
              >
                <Search size={18} color="#94A3B8" style={{ flexShrink: 0 }} />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search articles, skills, tools..."
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    fontSize: 15,
                    color: "#F1F5F9",
                    fontFamily: "inherit",
                    padding: "10px 0",
                  }}
                />
                <button
                  style={{
                    background: "#22C55E",
                    color: "#08150C",
                    fontWeight: 700,
                    fontSize: 14,
                    padding: "10px 24px",
                    borderRadius: 999,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    flexShrink: 0,
                    transition: "background 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = "#16a34a")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "#22C55E")}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CATEGORIES ── */}
        <section style={{ padding: "48px 24px 8px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {CATEGORIES.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: "inherit",
                    cursor: "pointer",
                    padding: "10px 22px",
                    borderRadius: 999,
                    border: isActive ? "1.5px solid #22C55E" : "1.5px solid rgba(255,255,255,0.1)",
                    background: isActive ? "#22C55E" : "rgba(255,255,255,0.05)",
                    color: isActive ? "#08150C" : "#94A3B8",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "#22C55E";
                      e.currentTarget.style.color = "#4ADE80";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.color = "#94A3B8";
                    }
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* ── POSTS ── */}
        <section style={{ padding: "48px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {featured && (
              <Reveal>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    background: "rgba(255,255,255,0.03)",
                    border: "1.5px solid rgba(255,255,255,0.08)",
                    borderRadius: 24,
                    overflow: "hidden",
                    marginBottom: 48,
                  }}
                >
                  <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                    <img
                      src={featured.image}
                      alt={featured.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, transparent 45%, rgba(6,11,22,0.9) 100%)",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#08150C",
                        background: "#4ADE80",
                        borderRadius: 999,
                        padding: "6px 14px",
                      }}
                    >
                      Featured
                    </span>
                  </div>
                  <div style={{ padding: 32 }}>
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#94A3B8",
                        margin: "0 0 12px",
                        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                      }}
                    >
                      {featured.category} • {featured.date} • {featured.readTime}
                    </p>
                    <h2 style={{ fontSize: "clamp(24px,3vw,34px)", fontWeight: 800, color: "#F8FAFC", margin: "0 0 14px", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                      {featured.title}
                    </h2>
                    <p style={{ fontSize: 16, color: "#94A3B8", lineHeight: 1.8, margin: "0 0 24px" }}>
                      {featured.excerpt}
                    </p>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background: "#22C55E",
                        color: "#08150C",
                        fontWeight: 700,
                        fontSize: 15,
                        padding: "13px 30px",
                        borderRadius: 999,
                        cursor: "default",
                      }}
                    >
                      Read Full Article →
                    </span>
                  </div>
                </div>
              </Reveal>
            )}

            {rest.length === 0 && !featured && (
              <div style={{ textAlign: "center", padding: "60px 0", color: "#94A3B8" }}>
                No articles found. Try a different search.
              </div>
            )}

            {rest.length > 0 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 24,
                }}
              >
                {rest.map((post, index) => (
                  <Reveal key={post.title} delay={index * 70}>
                    <div
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1.5px solid rgba(255,255,255,0.08)",
                        borderRadius: 20,
                        overflow: "hidden",
                        transition: "all 0.3s",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.borderColor = "rgba(34,197,94,0.5)";
                        e.currentTarget.style.background = "rgba(34,197,94,0.05)";
                        e.currentTarget.style.transform = "translateY(-4px)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                        <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(180deg, transparent 40%, rgba(6,11,22,0.85) 100%)",
                          }}
                        />
                        <span
                          style={{
                            position: "absolute",
                            top: 12,
                            left: 12,
                            fontSize: 11,
                            fontWeight: 700,
                            color: "#08150C",
                            background: "#4ADE80",
                            borderRadius: 999,
                            padding: "4px 12px",
                          }}
                        >
                          {post.category}
                        </span>
                      </div>
                      <div style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1 }}>
                        <h3 style={{ fontSize: 18, fontWeight: 800, color: "#F1F5F9", margin: "0 0 10px", lineHeight: 1.3 }}>
                          {post.title}
                        </h3>
                        <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.7, margin: "0 0 18px", flex: 1 }}>
                          {post.excerpt}
                        </p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16 }}>
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 6,
                              fontSize: 12,
                              color: "#4ADE80",
                              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                            }}
                          >
                            <BookOpen size={13} /> {post.readTime}
                          </span>
                          <span style={{ fontSize: 13, fontWeight: 700, color: "#22C55E", cursor: "default" }}>
                            Read More →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── NEWSLETTER CTA ── */}
        <section style={{ padding: "64px 24px 96px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div
              style={{
                background: "linear-gradient(160deg, #0d1b30 0%, #0a1628 100%)",
                border: "1.5px solid rgba(34,197,94,0.25)",
                borderRadius: 28,
                padding: "56px 32px",
                textAlign: "center",
                color: "#F1F5F9",
              }}
            >
              <Reveal>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <Mail size={28} color="#4ADE80" strokeWidth={1.8} />
                </div>
                <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 14px", letterSpacing: "-0.02em", color: "#F8FAFC" }}>
                  Get career tips in your inbox.
                  <span style={{ color: "#22C55E", display: "block" }}>Once a week. No spam.</span>
                </h2>
                <p style={{ color: "#94A3B8", fontSize: 16, lineHeight: 1.8, maxWidth: 480, margin: "0 auto 28px" }}>
                  Join readers getting practical advice on building skills, internships and their first job.
                </p>
                <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                  <input
                    placeholder="Your email address"
                    style={{
                      flex: 1,
                      minWidth: 240,
                      maxWidth: 320,
                      border: "1.5px solid rgba(255,255,255,0.16)",
                      background: "rgba(255,255,255,0.04)",
                      color: "#F1F5F9",
                      borderRadius: 999,
                      padding: "14px 22px",
                      outline: "none",
                      fontSize: 15,
                      fontFamily: "inherit",
                    }}
                  />
                  <button
                    style={{
                      background: "#22C55E",
                      color: "#08150C",
                      fontWeight: 700,
                      fontSize: 15,
                      padding: "14px 32px",
                      borderRadius: 999,
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      boxShadow: "0 8px 28px rgba(34,197,94,0.28)",
                      transition: "background 0.2s, transform 0.2s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "#16a34a";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "#22C55E";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Subscribe
                  </button>
                </div>
                <p style={{ fontSize: 12, color: "rgba(226,232,240,0.4)", marginTop: 18 }}>
                  Free forever. Unsubscribe anytime.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
