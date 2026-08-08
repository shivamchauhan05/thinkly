"use client";
import { useEffect, useRef, useState } from "react";
import { useApplyModal } from './ApplyModal'

const INTERNSHIP_DOMAINS = [
  { emoji: "📣", label: "Marketing", sub: "Social media, SEO, campaigns" },
  { emoji: "🎨", label: "Design", sub: "UI/UX, graphics, branding" },
  { emoji: "💻", label: "Technology", sub: "Web dev, apps, coding" },
  // { emoji: "📊", label: "Finance", sub: "Accounting, analysis, fintech" },
  { emoji: "✍️", label: "Content Writing", sub: "Blogs, copywriting, scripts" },
  // { emoji: "👥", label: "Human Resources", sub: "Recruitment, L&D, operations" },
  { emoji: "📸", label: "Photography & Video", sub: "Reels, editing, shoots" },
  // { emoji: "📦", label: "Operations", sub: "Logistics, supply chain, admin" },
  // { emoji: "🤝", label: "Sales & BD", sub: "Lead gen, partnerships, outreach" },
  { emoji: "📱", label: "Social Media", sub: "Instagram, YouTube, LinkedIn" },
  // { emoji: "🔬", label: "Research & Data", sub: "Market research, analytics" },
  // { emoji: "🎓", label: "Education & Training", sub: "Tutoring, curriculum, edtech" },
];

export default function Header() {
  const { open: openApplyModal } = useApplyModal()
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDomainOpen, setMobileDomainOpen] = useState(false);
  const dropdownRef = useRef(null);
  const internshipRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .thinkly-nav-link {
          color: #64748B;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          padding: 6px 4px;
          position: relative;
          transition: color 0.2s;
        }
        .thinkly-nav-link::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 2px;
          background: #22C55E;
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.22s cubic-bezier(0.4,0,0.2,1);
          transform-origin: left;
        }
        .thinkly-nav-link:hover { color: #0D1F3C; }
        .thinkly-nav-link:hover::after { transform: scaleX(1); }
        .thinkly-nav-link.active { color: #0D1F3C; font-weight: 600; }
        .thinkly-nav-link.active::after { transform: scaleX(1); }

        .thinkly-internship-btn {
          display: flex; align-items: center; gap: 5px;
          color: #64748B; font-size: 14px; font-weight: 500;
          background: none; border: none; cursor: pointer;
          padding: 6px 4px; font-family: inherit;
          position: relative; transition: color 0.2s;
        }
        .thinkly-internship-btn::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 2px; background: #22C55E; border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.22s cubic-bezier(0.4,0,0.2,1);
          transform-origin: left;
        }
        .thinkly-internship-btn:hover { color: #0D1F3C; }
        .thinkly-internship-btn:hover::after,
        .thinkly-internship-btn.open::after { transform: scaleX(1); }
        .thinkly-internship-btn.open { color: #0D1F3C; }

        .thinkly-chevron {
          width: 14px; height: 14px;
          transition: transform 0.25s ease;
          color: #94A3B8;
        }
        .thinkly-chevron.open { transform: rotate(180deg); color: #22C55E; }

        .thinkly-dropdown {
          position: absolute;
          top: calc(100% + 16px);
          left: 50%; transform: translateX(-50%);
          width: 680px;
          background: white;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.06);
          padding: 24px;
          z-index: 999;
          opacity: 0; pointer-events: none;
          transform: translateX(-50%) translateY(-8px);
          transition: opacity 0.22s ease, transform 0.22s ease;
        }
        .thinkly-dropdown.open {
          opacity: 1; pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        .thinkly-domain-card {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 12px 14px; border-radius: 12px;
          text-decoration: none; transition: all 0.18s;
          border: 1.5px solid transparent;
        }
        .thinkly-domain-card:hover {
          background: #F0FDF4;
          border-color: rgba(34,197,94,0.25);
          transform: translateY(-1px);
        }

        .thinkly-apply-btn {
          background: #22C55E;
          color: white;
          font-weight: 700;
          font-size: 14px;
          padding: 10px 24px;
          border-radius: 999px;
          text-decoration: none;
          border: none; cursor: pointer;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(34,197,94,0.25);
          font-family: inherit;
          white-space: nowrap;
        }
        .thinkly-apply-btn:hover {
          background: #16a34a;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(34,197,94,0.3);
        }

        .thinkly-mobile-menu {
          display: none;
          position: fixed;
          top: 68px; left: 0; right: 0;
          background: white;
          border-bottom: 1px solid #F1F5F9;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          z-index: 998;
          padding: 16px 24px 24px;
          flex-direction: column; gap: 4px;
        }
        .thinkly-mobile-menu.open { display: flex; }
        .thinkly-mobile-nav-link {
          color: #475569; font-size: 15px; font-weight: 500;
          text-decoration: none; padding: 12px 0;
          border-bottom: 1px solid #F1F5F9;
          display: block; transition: color 0.2s;
        }
        .thinkly-mobile-nav-link:hover { color: #22C55E; }

        @media (max-width: 768px) {
          .thinkly-desktop-nav { display: none !important; }
          .thinkly-hamburger { display: flex !important; }
          .thinkly-nav-apply { display: none !important; }
        }
        @media (min-width: 769px) {
          .thinkly-hamburger { display: none !important; }
        }
      `}</style>

      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        height: 68,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid #F1F5F9" : "1px solid rgba(241,245,249,0.5)",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.07)" : "none",
        transition: "all 0.3s ease",
        fontFamily: "'Inter', -apple-system, sans-serif",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <div style={{
              width: 38, height: 38, borderRadius: "50%",
              background: "#0D1F3C",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 0 3px rgba(34,197,94,0.2)",
            }}>
              <span style={{ color: "#22C55E", fontWeight: 900, fontSize: 17, lineHeight: 1 }}>T</span>
            </div>
            <span style={{ fontWeight: 800, color: "#0D1F3C", fontSize: 19, letterSpacing: "-0.02em" }}>
              Thinkly<span style={{ color: "#22C55E" }}>edu</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="thinkly-desktop-nav" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <a href="/" className="thinkly-nav-link">Home</a>
            <a href="/about" className="thinkly-nav-link">About</a>

            {/* Internship with dropdown */}
            <div ref={dropdownRef} style={{ position: "relative" }}>
              <button
                ref={internshipRef}
                className={`thinkly-internship-btn ${dropdownOpen ? "open" : ""}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Internship
                <svg className={`thinkly-chevron ${dropdownOpen ? "open" : ""}`} viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Dropdown */}
              <div className={`thinkly-dropdown ${dropdownOpen ? "open" : ""}`}>
                {/* Header */}
                <div style={{ marginBottom: 16, paddingBottom: 14, borderBottom: "1px solid #F1F5F9" }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 2px" }}>
                    Internship Domains
                  </p>
                  <p style={{ fontSize: 13, color: "#64748B", margin: 0 }}>
                    Choose from 15+ domains — 100% free for students
                  </p>
                </div>

                {/* Domain grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }}>
                  {INTERNSHIP_DOMAINS.map((domain) => (
                    <a key={domain.label} href={`/internship/${domain.label.toLowerCase().replace(/\s+&?\s*/g, "-")}`}
                      className="thinkly-domain-card"
                      onClick={() => setDropdownOpen(false)}>
                      <span style={{ fontSize: 22, lineHeight: 1, flexShrink: 0, marginTop: 1 }}>{domain.emoji}</span>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#0D1F3C", marginBottom: 2 }}>{domain.label}</div>
                        <div style={{ fontSize: 11.5, color: "#94A3B8", lineHeight: 1.4 }}>{domain.sub}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Footer */}
                <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid #F1F5F9", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 12.5, color: "#94A3B8" }}>Can't find your domain? We'll find one for you.</span>
                  <a href="/internship" style={{ fontSize: 12.5, fontWeight: 700, color: "#22C55E", textDecoration: "none" }}
                    onClick={() => setDropdownOpen(false)}>
                    View all →
                  </a>
                </div>
              </div>
            </div>

            <a href="/certificate" className="thinkly-nav-link">Certificate</a>
            <a href="/project" className="thinkly-nav-link">Project</a>
          </nav>

          {/* Apply CTA + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="#" className="thinkly-apply-btn thinkly-nav-apply" style={{ fontFamily: "'Inter', sans-serif" }} onClick={(e) => { e.preventDefault(); openApplyModal(); setDropdownOpen(false); setMobileMenuOpen(false); }}>
              Apply Now →
            </a>

            {/* Hamburger */}
            <button
              className="thinkly-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none", flexDirection: "column", gap: 5 }}
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map((i) => (
                <span key={i} style={{
                  display: "block", width: 22, height: 2, background: "#0D1F3C", borderRadius: 2,
                  transition: "all 0.2s",
                  transform: mobileMenuOpen
                    ? i === 0 ? "rotate(45deg) translateY(7px)"
                    : i === 1 ? "scaleX(0)"
                    : "rotate(-45deg) translateY(-7px)"
                    : "none",
                  opacity: mobileMenuOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU ─────────────────────────────────────────────────── */}
      <div className={`thinkly-mobile-menu ${mobileMenuOpen ? "open" : ""}`} style={{ fontFamily: "'Inter', sans-serif" }}>
        <a href="/" className="thinkly-mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="/about" className="thinkly-mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>

        {/* Mobile internship accordion */}
        <div>
          <button
            onClick={() => setMobileDomainOpen(!mobileDomainOpen)}
            style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: "none", cursor: "pointer", padding: "12px 0", borderBottom: "1px solid #F1F5F9", fontFamily: "inherit" }}>
            <span style={{ color: "#475569", fontSize: 15, fontWeight: 500 }}>Internship</span>
            <svg style={{ width: 16, height: 16, color: "#94A3B8", transition: "transform 0.2s", transform: mobileDomainOpen ? "rotate(180deg)" : "none" }} viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {mobileDomainOpen && (
            <div style={{ paddingLeft: 8, paddingBottom: 8 }}>
              {INTERNSHIP_DOMAINS.map((d) => (
                <a key={d.label} href={`/internship/${d.label.toLowerCase().replace(/\s+&?\s*/g, "-")}`}
                  style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 8px", textDecoration: "none", borderRadius: 8 }}
                  onClick={() => setMobileMenuOpen(false)}>
                  <span style={{ fontSize: 18 }}>{d.emoji}</span>
                  <span style={{ fontSize: 14, color: "#0D1F3C", fontWeight: 500 }}>{d.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        <a href="/certificate" className="thinkly-mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Certificate</a>
        <a href="/project" className="thinkly-mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Project</a>

        <a href="#"
          style={{ display: "block", background: "#22C55E", color: "white", fontWeight: 700, fontSize: 15, padding: "14px", borderRadius: 12, textAlign: "center", textDecoration: "none", marginTop: 12 }}
          onClick={(e) => { e.preventDefault(); openApplyModal(); setMobileMenuOpen(false); }}>
          Apply Now →
        </a>
      </div>
    </>
  );
}