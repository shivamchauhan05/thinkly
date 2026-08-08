"use client";
import { useEffect, useRef, useState } from "react";
import Footer from '@/components/Footer'

// ── Scroll reveal ─────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.12 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({ target, suffix = "", duration = 1600 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(ease * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Skills learned ────────────────────────────────────────────────────────────
const SKILLS = [
  { icon: "📣", title: "Social Media Marketing", desc: "Master Instagram, LinkedIn, and YouTube strategy to grow brand audiences from scratch." },
  { icon: "🔍", title: "SEO & Content Strategy", desc: "Learn keyword research, on-page optimization, and building content that ranks on Google." },
  { icon: "✉️", title: "Email Marketing", desc: "Design campaigns, write copy, and analyze open/click-through rates using real tools like Mailchimp." },
  { icon: "📊", title: "Analytics & Reporting", desc: "Track KPIs using Google Analytics, Meta Ads Manager, and build weekly performance dashboards." },
  { icon: "🎯", title: "Paid Advertising (Meta/Google)", desc: "Set up, run, and optimize real ad campaigns with live budgets under mentor guidance." },
  { icon: "🖼️", title: "Creative Briefing", desc: "Write briefs for designers, coordinate content calendars, and manage brand voice guidelines." },
];

// ── Week-by-week plan ────────────────────────────────────────────────────────
const WEEKS = [
  { week: "Month 1", title: "Onboarding & Brand Audit", desc: "Understand the company, audit existing social channels, identify content gaps, and set goals for the first month.", color: "#22C55E" },
  { week: "Month 2", title: "Content Creation", desc: "Create campaign ideas, write copy, and build a content plan focused on real brand growth.", color: "#3B82F6" },
  { week: "Month 3", title: "Campaign Execution", desc: "Launch active campaigns, test paid and organic channels, and measure live results.", color: "#F59E0B" },
  { week: "Month 4", title: "Optimization", desc: "Refine messaging, improve targeting, and increase conversion efficiency across platforms.", color: "#EF4444" },
  { week: "Month 5", title: "Reporting", desc: "Build performance reports, analyze KPIs, and prepare a compelling case study for your portfolio.", color: "#8B5CF6" },
  { week: "Month 6", title: "Growth Strategy", desc: "Develop a longer-term growth plan and hand off your work with professional documentation.", color: "#0D1F3C" },
];

// ── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { name: "Priya Sharma", college: "DU, Delhi", avatar: "PS", color: "#22C55E", quote: "I ran a real Instagram campaign for a D2C brand — 40% engagement increase in 3 weeks. The mentor taught me things no YouTube tutorial ever did." },
  { name: "Rahul Mehta", college: "BITS Pilani", avatar: "RM", color: "#3B82F6", quote: "Got hands-on with Google Ads — ₹15K budget, real results. My portfolio now has a case study that actually got me hired." },
  { name: "Sneha Kapoor", college: "Symbiosis, Pune", avatar: "SK", color: "#F59E0B", quote: "The regular mentor check-ins were gold. By the third month I was independently running email sequences and shaping real campaigns.", color: "#F59E0B" },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  { q: "Do I need prior marketing experience?", a: "No. We take students who are curious and willing to learn. Your mentor will guide you from day one." },
  { q: "Is this internship paid?", a: "This is an unpaid internship. However, you gain a verified certificate, a real portfolio, and a LinkedIn recommendation." },
  { q: "Can I do this remotely?", a: "Yes. Most marketing internships at Thinklyedu are remote-friendly. A few partner companies also offer hybrid/on-site options." },
  { q: "How long does the internship last?", a: "Choose a flexible 1–6 month track based on your goals. Most students complete an internship-ready portfolio in 4–6 months." },
  { q: "Will I get a certificate?", a: "Yes — a skill-linked verified certificate that you can share on LinkedIn and add to your resume." },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #E2E8F0" }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "none", border: "none", cursor: "pointer", padding: "18px 0",
        fontFamily: "inherit", textAlign: "left",
      }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "#0D1F3C", paddingRight: 20 }}>{q}</span>
        <svg style={{ width: 18, height: 18, color: "#22C55E", flexShrink: 0, transition: "transform 0.2s", transform: open ? "rotate(45deg)" : "none" }} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.75, paddingBottom: 18, margin: 0, paddingRight: 32 }}>{a}</p>
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function MarketingInternshipPage() {
  const lineRef = useRef(null);
  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    el.style.width = "0%";
    el.style.transition = "width 1.1s cubic-bezier(0.4,0,0.2,1) 0.5s";
    setTimeout(() => { el.style.width = "100%"; }, 50);
  }, []);

  return (
    <main style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: "#0D1F3C", paddingTop: 68, background: "white" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-8px); } }
        @keyframes marquee { 0% { transform:translateX(0); } 100% { transform:translateX(-50%); } }
        * { box-sizing: border-box; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "80px 24px 0", overflow: "hidden", position: "relative" }}>
        {/* bg glow */}
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(34,197,94,0.08)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: "30%", width: 300, height: 300, borderRadius: "50%", background: "rgba(34,197,94,0.04)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ opacity: 0, animation: "fadeUp 0.6s ease 0.1s forwards", marginBottom: 24 }}>
            <span style={{ fontSize: 13, color: "rgba(13,31,60,0.55)" }}>
              <a href="/" style={{ color: "rgba(13,31,60,0.55)", textDecoration: "none" }}>Home</a>
              {" / "}
              <a href="/internship" style={{ color: "rgba(13,31,60,0.55)", textDecoration: "none" }}>Internship</a>
              {" / "}
              <span style={{ color: "#22C55E" }}>Marketing</span>
            </span>
          </div>

          <div className="rx-stack" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "flex-end" }}>
            <div>
              {/* Badge */}
              <div style={{ opacity: 0, animation: "fadeUp 0.6s ease 0.2s forwards", marginBottom: 20 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 999, padding: "6px 16px", fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", display: "inline-block", animation: "float 2s ease-in-out infinite" }} />
                  Open for Applications
                </span>
              </div>

              <h1 style={{ fontSize: "clamp(38px,5vw,64px)", fontWeight: 900, color: "#0D1F3C", lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 8px", opacity: 0, animation: "fadeUp 0.6s ease 0.3s forwards" }}>
                Marketing
                <span style={{ display: "block", color: "#22C55E", position: "relative" }}>
                  Internship
                  <span ref={lineRef} style={{ display: "block", height: 3, background: "rgba(34,197,94,0.3)", borderRadius: 4, marginTop: 6, width: "0%" }} />
                </span>
              </h1>

              <p style={{ fontSize: 17, color: "#64748B", lineHeight: 1.75, maxWidth: 520, margin: "20px 0 32px", opacity: 0, animation: "fadeUp 0.6s ease 0.45s forwards" }}>
                Work on real campaigns for real brands. Master SEO, social media, paid ads, and analytics — with a dedicated mentor guiding you every step.
              </p>

              {/* Quick facts */}
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 36, opacity: 0, animation: "fadeUp 0.6s ease 0.55s forwards" }}>
                {[
                  { icon: "🕐", label: "Duration", val: "1–6 Months" },
                  { icon: "💻", label: "Mode", val: "Remote / Hybrid" },
                  { icon: "💰", label: "Stipend", val: "Unpaid" },
                  { icon: "📜", label: "Certificate", val: "Verified" },
                ].map((f) => (
                  <div key={f.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 18 }}>{f.icon}</span>
                    <div>
                      <div style={{ fontSize: 11, color: "rgba(13,31,60,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{f.label}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#0D1F3C" }}>{f.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", opacity: 0, animation: "fadeUp 0.6s ease 0.65s forwards" }}>
                <a href="#"
                  style={{ background: "#22C55E", color: "white", fontWeight: 800, fontSize: 15, padding: "14px 36px", borderRadius: 999, textDecoration: "none", boxShadow: "0 8px 28px rgba(34,197,94,0.25)", transition: "all 0.2s" }}
                  onClick={(e) => { e.preventDefault(); openApplyModal() }}
                  onMouseOver={e => { e.currentTarget.style.background = "#16a34a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseOut={e => { e.currentTarget.style.background = "#22C55E"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  Apply Now — It's Free →
                </a>
                <a href="#curriculum"
                  style={{ border: "1.5px solid rgba(13,31,60,0.15)", color: "#0D1F3C", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 999, textDecoration: "none", transition: "all 0.2s" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "#0D1F3C"; e.currentTarget.style.color = "#0D1F3C"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(13,31,60,0.15)"; e.currentTarget.style.color = "#0D1F3C"; }}>
                  See Curriculum
                </a>
              </div>
            </div>

            {/* Hero visual card */}
            <div className="rx-visual" style={{ opacity: 0, animation: "fadeUp 0.6s ease 0.5s forwards", flexShrink: 0 }}>
              <div style={{ width: 280, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 24, padding: 28, backdropFilter: "blur(12px)" }}>
                <div style={{ fontSize: 48, marginBottom: 12, textAlign: "center" }}>📣</div>
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                  <div style={{ fontSize: 13, color: "#64748B", marginBottom: 4 }}>Students placed in</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#0D1F3C" }}>Marketing Roles</div>
                </div>
                {[
                  { label: "Social Media", pct: 92 },
                  { label: "SEO & Content", pct: 78 },
                  { label: "Paid Ads", pct: 65 },
                  { label: "Email Marketing", pct: 71 },
                ].map((item) => (
                  <div key={item.label} style={{ marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{item.label}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E" }}>{item.pct}%</span>
                    </div>
                    <div style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 4, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${item.pct}%`, background: "linear-gradient(90deg,#22C55E,#16a34a)", borderRadius: 4, transition: "width 1s ease" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scrolling tool bar */}
          <div style={{ marginTop: 56, overflow: "hidden", maskImage: "linear-gradient(90deg,transparent,black 10%,black 90%,transparent)" }}>
            <div style={{ display: "flex", gap: 16, animation: "marquee 18s linear infinite", width: "max-content" }}>
              {[...Array(2)].map((_, ri) =>
                ["Google Analytics", "Meta Ads Manager", "Mailchimp", "Canva Pro", "SEMrush", "Hootsuite", "HubSpot", "Notion", "Google Ads", "Buffer"].map((tool) => (
                  <span key={`${ri}-${tool}`} style={{ display: "inline-block", background: "rgba(13,31,60,0.05)", border: "1px solid rgba(13,31,60,0.1)", borderRadius: 999, padding: "8px 18px", fontSize: 13, color: "rgba(13,31,60,0.75)", fontWeight: 500, whiteSpace: "nowrap" }}>
                    {tool}
                  </span>
                ))
              )}
            </div>
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginTop: 40 }} />
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section style={{ background: "white", padding: "56px 24px", borderBottom: "1px solid #F1F5F9" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32, textAlign: "center" }} className="rx-2">
          {[
            { val: 200, suffix: "+", label: "Marketing Interns Placed" },
            { val: 40, suffix: "+", label: "Partner Brands" },
            { val: 6, suffix: " mo", label: "Flexible Track" },
            { val: 94, suffix: "%", label: "Placement Rate" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 40, fontWeight: 900, color: "#22C55E", letterSpacing: "-0.02em" }}>
                <Counter target={s.val} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: 13, color: "#94A3B8", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT YOU'LL LEARN ─────────────────────────────────────────────── */}
      <section style={{ padding: "88px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Skills You'll Build</span>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#0D1F3C", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                Real Skills. <span style={{ color: "#22C55E" }}>Real Tools.</span>
              </h2>
              <p style={{ color: "#64748B", fontSize: 16, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
                Every skill you learn here is something employers actually look for — not a classroom theory.
              </p>
            </div>
          </Reveal>

          <div className="rx-stack" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {SKILLS.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 18, padding: 26, transition: "all 0.25s", cursor: "default" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.4)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.07)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <div style={{ fontSize: 30, marginBottom: 14 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0D1F3C", marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 13.5, color: "#64748B", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 1–6 MONTH CURRICULUM ─────────────────────────────────────────────── */}
      <section id="curriculum" style={{ padding: "88px 24px", background: "white" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Curriculum</span>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#0D1F3C", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                Your <span style={{ color: "#22C55E" }}>1–6 Month</span> Journey
              </h2>
              <p style={{ color: "#64748B", fontSize: 16, lineHeight: 1.7 }}>
                Each month has a clear goal and deliverable — no busywork.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {WEEKS.map((w, i) => (
              <Reveal key={w.week} delay={i * 80}>
                <div style={{ display: "flex", gap: 0, alignItems: "stretch" }}>
                  {/* Line + dot */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 48, flexShrink: 0 }}>
                    <div style={{ width: 14, height: 14, borderRadius: "50%", background: w.color, flexShrink: 0, marginTop: 28, boxShadow: `0 0 0 4px ${w.color}22` }} />
                    {i < WEEKS.length - 1 && <div style={{ flex: 1, width: 2, background: "#F1F5F9", marginTop: 6 }} />}
                  </div>
                  {/* Card */}
                  <div style={{ flex: 1, background: "#FAFBFC", border: "1.5px solid #E2E8F0", borderRadius: 16, padding: "24px 28px", marginLeft: 16, marginBottom: i < WEEKS.length - 1 ? 16 : 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: w.color, border: `1px solid ${w.color}44`, borderRadius: 999, padding: "3px 12px" }}>{w.week}</span>
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0D1F3C", marginBottom: 8 }}>{w.title}</h3>
                    <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.7, margin: 0 }}>{w.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section style={{ padding: "88px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Alumni Stories</span>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#0D1F3C", margin: "12px 0", letterSpacing: "-0.02em" }}>
                Interns Who <span style={{ color: "#22C55E" }}>Made It Real</span>
              </h2>
            </div>
          </Reveal>

          <div className="rx-stack" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: 28, transition: "all 0.25s" }}
                  onMouseOver={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "rgba(34,197,94,0.3)"; }}
                  onMouseOut={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#E2E8F0"; }}>
                  <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                    {[...Array(5)].map((_, j) => <span key={j} style={{ color: "#F59E0B", fontSize: 14 }}>★</span>)}
                  </div>
                  <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.75, fontStyle: "italic", margin: "0 0 24px" }}>"{t.quote}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ color: "white", fontWeight: 800, fontSize: 13 }}>{t.avatar}</span>
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#0D1F3C" }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: "#94A3B8" }}>{t.college}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: "88px 24px", background: "white" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>FAQ</span>
              <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, color: "#0D1F3C", margin: "12px 0", letterSpacing: "-0.02em" }}>
                Frequently Asked <span style={{ color: "#22C55E" }}>Questions</span>
              </h2>
            </div>
          </Reveal>
          <div style={{ border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "0 28px" }}>
            {FAQS.map((faq) => <FAQ key={faq.q} {...faq} />)}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <section style={{ background: "#0D1F3C", padding: "88px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(34,197,94,0.07)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Reveal>
            <div style={{ fontSize: 52, marginBottom: 16 }}>📣</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, color: "white", lineHeight: 1.1, marginBottom: 16, letterSpacing: "-0.02em" }}>
              Ready to become a
              <span style={{ color: "#22C55E", display: "block" }}>Marketing Intern?</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, lineHeight: 1.7, marginBottom: 36 }}>
              Apply today. Free. Fast. Real. Get matched within 72 hours.
            </p>
            <a href="mailto:supportthinkly.co@gmail.com"
              style={{ display: "inline-block", background: "#22C55E", color: "white", fontWeight: 800, fontSize: 16, padding: "16px 44px", borderRadius: 999, textDecoration: "none", boxShadow: "0 12px 40px rgba(34,197,94,0.25)", transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.background = "#16a34a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.currentTarget.style.background = "#22C55E"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Apply for Marketing Internship →
            </a>
            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 13, marginTop: 20 }}>
              supportthinkly.co@gmail.com &nbsp;·&nbsp; +91 98185 09083
            </p>
          </Reveal>
        </div>
      </section>
       <Footer/>
    </main>
  );
}