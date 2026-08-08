"use client";
import { useApplyModal } from './ApplyModal'

const LINKS = {
  Platform: [
    { label: "Home", href: "/" },
    { label: "Internship", href: "/internship" },
    { label: "Certificate", href: "/certificate" },
    { label: "Project", href: "/project" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  Domains: [
    { label: "Marketing", href: "/internship/marketing" },
    { label: "Design", href: "/internship/design" },
    { label: "Technology", href: "/internship/technology" },
    { label: "Finance", href: "/internship/finance" },
    { label: "Content Writing", href: "/internship/content-writing" },
    { label: "View All →", href: "/internship" },
  ],
};

export default function Footer() {
  const { open: openApplyModal } = useApplyModal()

  return (
    <footer style={{
      background: "#0a1628",
      fontFamily: "'Inter', -apple-system, sans-serif",
      color: "white",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        .thinkly-footer-link {
          color: rgba(255,255,255,0.35);
          font-size: 13.5px;
          text-decoration: none;
          display: block;
          padding: 5px 0;
          transition: color 0.18s;
        }
        .thinkly-footer-link:hover { color: #22C55E; }
        .thinkly-social-btn {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          transition: all 0.2s;
          font-size: 15px;
          background: rgba(255,255,255,0.04);
        }
        .thinkly-social-btn:hover {
          border-color: rgba(34,197,94,0.4);
          background: rgba(34,197,94,0.1);
          transform: translateY(-2px);
        }
      `}</style>

      {/* Top band */}
      <div style={{ background: "#0D1F3C", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
          <div>
            <h3 style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 800, margin: "0 0 6px", letterSpacing: "-0.02em" }}>
              Ready to launch your career?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, margin: 0 }}>
              Join 500+ students — no fees, no experience required.
            </p>
          </div>
          <a href="#"
            style={{ background: "#22C55E", color: "white", fontWeight: 700, fontSize: 15, padding: "13px 32px", borderRadius: 999, textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 8px 24px rgba(34,197,94,0.2)", transition: "all 0.2s", fontFamily: "inherit" }}
            onClick={(e) => { e.preventDefault(); openApplyModal() }}
            onMouseOver={e => { e.currentTarget.style.background = "#16a34a"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseOut={e => { e.currentTarget.style.background = "#22C55E"; e.currentTarget.style.transform = "translateY(0)"; }}>
            Apply for Internship →
          </a>
        </div>
      </div>

      {/* Main footer body */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px 40px" }}>
        <div className="rx-foot" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>

          {/* Brand column */}
          <div className="rx-foot-span">
            <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 16 }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", background: "#1a2f50", border: "1px solid rgba(34,197,94,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#22C55E", fontWeight: 900, fontSize: 17 }}>T</span>
              </div>
              <span style={{ color: "white", fontWeight: 800, fontSize: 18 }}>
                Thinkly<span style={{ color: "#22C55E" }}>edu</span>
              </span>
            </a>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13.5, lineHeight: 1.75, margin: "0 0 24px", maxWidth: 260 }}>
              Connecting students across India with real internship opportunities — completely free, always.
            </p>

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
              {[
                { icon: "📧", text: "supportthinkly.co@gmail.com", href: "mailto:supportthinkly.co@gmail.com" },
                { icon: "📞", text: "+91 98185 09083", href: "tel:+919818509083" },
              ].map((c) => (
                <a key={c.text} href={c.href}
                  style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.35)", fontSize: 13, textDecoration: "none", transition: "color 0.18s" }}
                  onMouseOver={e => e.currentTarget.style.color = "#22C55E"}
                  onMouseOut={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}>
                  <span style={{ fontSize: 14 }}>{c.icon}</span>
                  {c.text}
                </a>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { emoji: "in", href: "https://linkedin.com", label: "LinkedIn" },
                { emoji: "ig", href: "https://instagram.com", label: "Instagram" },
                { emoji: "tw", href: "https://twitter.com", label: "Twitter" },
                { emoji: "yt", href: "https://youtube.com", label: "YouTube" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="thinkly-social-btn" aria-label={s.label}
                  style={{ color: "rgba(255,255,255,0.4)", fontWeight: 700, fontSize: 11, fontFamily: "inherit" }}>
                  {s.emoji}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>
                {section}
              </div>
              {links.map((link) => (
                <a key={link.label} href={link.href} className="thinkly-footer-link"
                  style={{ color: link.label === "View All →" ? "#22C55E" : "rgba(255,255,255,0.35)", fontWeight: link.label === "View All →" ? 600 : 400 }}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>
            © 2026 Thinklyedu. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((t) => (
              <a key={t} href="#" style={{ color: "rgba(255,255,255,0.2)", fontSize: 12.5, textDecoration: "none", transition: "color 0.18s" }}
                onMouseOver={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
                onMouseOut={e => e.currentTarget.style.color = "rgba(255,255,255,0.2)"}>
                {t}
              </a>
            ))}
          </div>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>
            Made with 💚 for students
          </span>
        </div>
      </div>
    </footer>
  );
}