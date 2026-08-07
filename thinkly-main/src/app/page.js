"use client";
import { useEffect, useRef, useState } from "react";
import Footer from '@/components/Footer'
import { useApplyModal } from '@/components/ApplyModal'

// ── Animated counter ───────────────────────────────────────────────────────────
function Counter({ target, suffix = "", duration = 1800 }) {
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

// ── Scroll reveal hook ─────────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); observer.disconnect(); }
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

// ── Nav ────────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  
}

// ── Hero ───────────────────────────────────────────────────────────────────────
function Hero() {
  const { open: openApplyModal } = useApplyModal()
  const lineRef = useRef(null);
  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    el.style.width = "0%";
    el.style.transition = "width 1.1s cubic-bezier(0.4,0,0.2,1) 0.6s";
    setTimeout(() => { el.style.width = "100%"; }, 100);
  }, []);

  return (
    <section style={{ minHeight: "100vh", background: "linear-gradient(160deg, #ffffff 0%, #f0f9f4 50%, #ffffff 100%)", display: "flex", alignItems: "center", paddingTop: 100, paddingBottom: 60 }}>
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

          {/* Left */}
          <div>
            <div style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.2s forwards" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#22C55E", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 999, padding: "6px 16px", background: "rgba(34,197,94,0.06)", marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", display: "inline-block", animation: "pulse 2s infinite" }} />
                Now accepting applications
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(40px,5vw,60px)", fontWeight: 900, lineHeight: 1.06, letterSpacing: "-0.03em", color: "#0D1F3C", marginBottom: 8, opacity: 0, animation: "fadeUp 0.7s ease 0.35s forwards" }}>
              Launch Your Career
              <span style={{ display: "block", color: "#22C55E", position: "relative" }}>
                With Real Work.
                <span ref={lineRef} style={{ display: "block", height: 3, background: "rgba(34,197,94,0.25)", borderRadius: 4, marginTop: 4, width: "0%" }} />
              </span>
            </h1>

            <p style={{ fontSize: 17, color: "#64748B", lineHeight: 1.75, maxWidth: 480, margin: "24px 0 36px", opacity: 0, animation: "fadeUp 0.7s ease 0.5s forwards" }}>
              Thinklyedu connects students with internship opportunities across 15+ domains — for free. No experience needed. Just ambition.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", opacity: 0, animation: "fadeUp 0.7s ease 0.65s forwards" }}>
              <a href="#" style={{ background: "#0D1F3C", color: "white", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 999, textDecoration: "none", boxShadow: "0 8px 24px rgba(13,31,60,0.18)", transition: "transform 0.2s, box-shadow 0.2s" }}
                onClick={(e) => { e.preventDefault(); openApplyModal() }}
                onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(13,31,60,0.25)"; }}
                onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(13,31,60,0.18)"; }}>
                Start Your Internship
              </a>
              <a href="#how" style={{ border: "1.5px solid rgba(13,31,60,0.18)", color: "#0D1F3C", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 999, textDecoration: "none", transition: "all 0.2s" }}
                onMouseOver={e => { e.currentTarget.style.borderColor = "#22C55E"; e.currentTarget.style.color = "#22C55E"; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(13,31,60,0.18)"; e.currentTarget.style.color = "#0D1F3C"; }}>
                See How It Works
              </a>
            </div>

            {/* Trust bar */}
            <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 48, opacity: 0, animation: "fadeUp 0.7s ease 0.8s forwards" }}>
              <div style={{ display: "flex" }}>
                {["#22C55E","#0D1F3C","#3B82F6","#F59E0B","#EF4444"].map((c, i) => (
                  <div key={i} style={{ width: 32, height: 32, borderRadius: "50%", background: c, border: "2px solid white", marginLeft: i === 0 ? 0 : -10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "white", fontSize: 11, fontWeight: 700 }}>{String.fromCharCode(65 + i)}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: "#64748B", margin: 0 }}>
                <strong style={{ color: "#0D1F3C" }}>500+ students</strong> already placed this year
              </p>
            </div>
          </div>

          {/* Right — floating cards visual */}
          <div style={{ position: "relative", height: 480, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Center circle */}
            <div style={{ width: 160, height: 160, borderRadius: "50%", background: "#0D1F3C", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 16px rgba(34,197,94,0.08), 0 0 0 32px rgba(34,197,94,0.04)", zIndex: 2 }}>
              <span style={{ color: "#22C55E", fontWeight: 900, fontSize: 56 }}>T</span>
            </div>

            {/* Floating domain cards */}
            {[
              { label: "Marketing", emoji: "📣", top: "5%", left: "5%", delay: "0s" },
              { label: "Design", emoji: "🎨", top: "5%", right: "5%", delay: "0.3s" },
              { label: "Finance", emoji: "📊", bottom: "20%", left: "0%", delay: "0.6s" },
              { label: "Tech", emoji: "💻", bottom: "20%", right: "0%", delay: "0.9s" },
              { label: "HR", emoji: "👥", top: "45%", left: "-5%", delay: "1.2s" },
              { label: "Content", emoji: "✍️", top: "45%", right: "-5%", delay: "1.5s" },
            ].map((card) => (
              <div key={card.label} style={{
                position: "absolute",
                top: card.top, left: card.left, right: card.right, bottom: card.bottom,
                background: "white", borderRadius: 16, padding: "12px 18px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                display: "flex", alignItems: "center", gap: 10,
                fontSize: 13, fontWeight: 700, color: "#0D1F3C",
                animation: `float 4s ease-in-out ${card.delay} infinite`,
                border: "1px solid rgba(34,197,94,0.15)",
              }}>
                <span style={{ fontSize: 20 }}>{card.emoji}</span>
                {card.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes float { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-10px); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
      `}</style>
    </section>
  );
}

// ── Stats bar ──────────────────────────────────────────────────────────────────
function Stats() {
  return (
    <section style={{ background: "#0D1F3C", padding: "52px 24px" }}>
      <div className="max-w-6xl mx-auto" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32, textAlign: "center" }}>
        {[
          { value: 500, suffix: "+", label: "Students Placed" },
          { value: 120, suffix: "+", label: "Partner Companies" },
          { value: 15, suffix: "+", label: "Internship Domains" },
          { value: 100, suffix: "%", label: "Free for Students" },
        ].map((s) => (
          <div key={s.label}>
            <div style={{ fontSize: 40, fontWeight: 900, color: "#22C55E", marginBottom: 4 }}>
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Features ───────────────────────────────────────────────────────────────────
function Features() {
  const features = [
    { emoji: "🎯", title: "Real Projects Only", desc: "No coffee runs. Every Thinklyedu intern works on live, meaningful projects with real deliverables and measurable impact." },
    { emoji: "🧑‍🏫", title: "Dedicated Mentorship", desc: "Each intern gets a 1-on-1 mentor from the host company — weekly check-ins, feedback, and a professional recommendation letter." },
    { emoji: "📜", title: "Verified Certificates", desc: "Skill-linked certificates recognized by recruiters. They show what you can actually do, not just where you were." },
    { emoji: "🌍", title: "Remote & On-site", desc: "Work from anywhere or experience an office — we have both options across 30+ cities in India." },
    { emoji: "⚡", title: "Fast-track Matching", desc: "Our smart matching takes your skills and preferences and finds the right fit within 72 hours of applying." },
    { emoji: "🔒", title: "Always Free", desc: "Zero fees. Zero hidden charges. Students will never pay a rupee — now or ever. Our partners fund everything." },
  ];

  return (
    <section id="features" style={{ padding: "96px 24px", background: "white" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Features</span>
            <h2 style={{ fontSize: "clamp(30px,4vw,42px)", fontWeight: 900, letterSpacing: "-0.02em", color: "#0D1F3C", margin: "12px 0 16px", lineHeight: 1.1 }}>
              Everything You Need to <span style={{ color: "#22C55E" }}>Grow</span>
            </h2>
            <p style={{ color: "#64748B", fontSize: 16, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              We've thought of everything so you can focus on what matters — building skills and launching your career.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div style={{ background: "#FAFBFC", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: 28, transition: "all 0.3s", cursor: "default" }}
                onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.4)"; e.currentTarget.style.background = "white"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.background = "#FAFBFC"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{f.emoji}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0D1F3C", marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontSize: 13.5, color: "#64748B", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── How It Works ───────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { num: "01", title: "Apply Online", desc: "Fill out a simple form — tell us your interests, skills, and availability. Takes less than 5 minutes.", emoji: "📝" },
    { num: "02", title: "Get Matched", desc: "Our team reviews your profile and matches you with the best-fit company within 72 hours.", emoji: "🔍" },
    { num: "03", title: "Meet Your Mentor", desc: "Connect with your assigned company mentor. Align on goals, schedule, and your first project.", emoji: "🤝" },
    { num: "04", title: "Do Real Work", desc: "Work on live projects, get feedback every week, and build a portfolio that gets you hired.", emoji: "💼" },
    { num: "05", title: "Get Certified", desc: "Complete your internship and receive a verified certificate you can share on LinkedIn and your resume.", emoji: "🏆" },
  ];

  return (
    <section id="how" style={{ padding: "96px 24px", background: "#F0F4F8" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>The Process</span>
            <h2 style={{ fontSize: "clamp(30px,4vw,42px)", fontWeight: 900, letterSpacing: "-0.02em", color: "#0D1F3C", margin: "12px 0 16px", lineHeight: 1.1 }}>
              From Apply to <span style={{ color: "#22C55E" }}>Certified</span>
            </h2>
            <p style={{ color: "#64748B", fontSize: 16, maxWidth: 460, margin: "0 auto", lineHeight: 1.7 }}>
              Five simple steps stand between you and a career-defining internship experience.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Connecting line */}
          <div style={{ position: "absolute", top: 40, left: "calc(10% + 20px)", right: "calc(10% + 20px)", height: 2, background: "linear-gradient(90deg,#22C55E,rgba(34,197,94,0.2))", zIndex: 0 }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 24, position: "relative", zIndex: 1 }}>
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  {/* Circle */}
                  <div style={{ width: 80, height: 80, borderRadius: "50%", background: i === 0 ? "#22C55E" : "white", border: `2px solid ${i === 0 ? "#22C55E" : "#E2E8F0"}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: 20, boxShadow: i === 0 ? "0 8px 24px rgba(34,197,94,0.3)" : "0 4px 16px rgba(0,0,0,0.06)", transition: "all 0.3s" }}
                    onMouseOver={e => { const el = e.currentTarget; el.style.background = "#22C55E"; el.style.borderColor = "#22C55E"; el.style.boxShadow = "0 8px 24px rgba(34,197,94,0.3)"; el.style.transform = "translateY(-4px)"; }}
                    onMouseOut={e => { const el = e.currentTarget; el.style.background = i === 0 ? "#22C55E" : "white"; el.style.borderColor = i === 0 ? "#22C55E" : "#E2E8F0"; el.style.boxShadow = i === 0 ? "0 8px 24px rgba(34,197,94,0.3)" : "0 4px 16px rgba(0,0,0,0.06)"; el.style.transform = "translateY(0)"; }}>
                    <span style={{ fontSize: 24 }}>{step.emoji}</span>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#22C55E", letterSpacing: "0.1em", marginBottom: 6 }}>{step.num}</span>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0D1F3C", marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 12.5, color: "#64748B", lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ───────────────────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    { name: "Priya Sharma", role: "Marketing Intern → Full-time at StartupX", avatar: "PS", color: "#22C55E", quote: "Thinklyedu gave me my first real project at age 20. Within 3 months I had a portfolio, a mentor, and a job offer. I cannot recommend this enough." },
    { name: "Arjun Mehta", role: "UI Design Intern → Freelancer", avatar: "AM", color: "#3B82F6", quote: "I had zero experience. Thinklyedu matched me with a design agency in 48 hours. The mentor I got was genuinely invested in my growth — changed my life." },
    { name: "Sneha Patel", role: "Finance Intern → MBA Graduate", avatar: "SP", color: "#F59E0B", quote: "The certificate from Thinklyedu got me shortlisted for my MBA program. Admissions teams notice it because it's skill-linked, not just a participation trophy." },
    { name: "Rahul Verma", role: "Content Intern → Content Manager", avatar: "RV", color: "#EF4444", quote: "I applied on a Monday and was talking to my mentor by Wednesday. The process is incredibly smooth and the team actually cares about your progress." },
    { name: "Ananya Roy", role: "HR Intern → Recruitment Lead", avatar: "AR", color: "#8B5CF6", quote: "What I loved most was how real the work felt. My project actually shipped. Seeing something I built go live during my internship was unforgettable." },
    { name: "Kartik Singh", role: "Tech Intern → Software Engineer", avatar: "KS", color: "#0D1F3C", quote: "Thinklyedu is the real deal. Free, fast, and focused on actual learning. Every student deserves this kind of opportunity at the start of their career." },
  ];

  return (
    <section id="testimonials" style={{ padding: "96px 24px", background: "white", overflow: "hidden" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Student Stories</span>
            <h2 style={{ fontSize: "clamp(30px,4vw,42px)", fontWeight: 900, letterSpacing: "-0.02em", color: "#0D1F3C", margin: "12px 0 16px", lineHeight: 1.1 }}>
              Real Students. <span style={{ color: "#22C55E" }}>Real Results.</span>
            </h2>
            <p style={{ color: "#64748B", fontSize: 16, maxWidth: 460, margin: "0 auto", lineHeight: 1.7 }}>
              Don't take our word for it. Here's what students say after their Thinklyedu internship.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 70}>
              <div style={{ background: "#FAFBFC", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: 28, height: "100%", boxSizing: "border-box", transition: "all 0.3s" }}
                onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.3)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                {/* Stars */}
                <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                  {[...Array(5)].map((_, j) => <span key={j} style={{ color: "#F59E0B", fontSize: 14 }}>★</span>)}
                </div>
                <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.75, margin: "0 0 24px", fontStyle: "italic" }}>"{t.quote}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "white", fontWeight: 800, fontSize: 13 }}>{t.avatar}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#0D1F3C" }}>{t.name}</div>
                    <div style={{ fontSize: 11.5, color: "#22C55E", fontWeight: 600 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA ────────────────────────────────────────────────────────────────────────
function CTA() {
  const { open: openApplyModal } = useApplyModal()

  return (
    <section id="cta" style={{ padding: "100px 24px", background: "#0D1F3C", position: "relative", overflow: "hidden" }}>
      {/* bg decoration */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: "rgba(34,197,94,0.06)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(34,197,94,0.04)", pointerEvents: "none" }} />

      <div className="max-w-3xl mx-auto" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <Reveal>
          <span style={{ display: "inline-block", color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 999, padding: "6px 16px", background: "rgba(34,197,94,0.1)", marginBottom: 24 }}>
            Start Today — It's Free
          </span>
          <h2 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 900, color: "white", lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: 20 }}>
            Your next opportunity
            <span style={{ display: "block", color: "#22C55E" }}>is one click away.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, lineHeight: 1.7, marginBottom: 40, maxWidth: 520, margin: "0 auto 40px" }}>
            Join 500+ students who launched their careers through Thinklyedu. Apply today — free, fast, and real.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#"
              style={{ background: "#22C55E", color: "white", fontWeight: 800, fontSize: 16, padding: "16px 40px", borderRadius: 999, textDecoration: "none", boxShadow: "0 12px 40px rgba(34,197,94,0.25)", transition: "all 0.2s" }}
              onClick={(e) => { e.preventDefault(); openApplyModal() }}
              onMouseOver={e => { e.currentTarget.style.background = "#16a34a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.currentTarget.style.background = "#22C55E"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Apply for Internship →
            </a>
            <a href="/about"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)", color: "white", fontWeight: 600, fontSize: 16, padding: "16px 40px", borderRadius: 999, textDecoration: "none", transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "#22C55E"; e.currentTarget.style.color = "#22C55E"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "white"; }}>
              Learn About Us
            </a>
          </div>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 13, marginTop: 28 }}>
            supportthinkly.co@gmail.com &nbsp;·&nbsp; +91 98185 09083
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────────
// function Footer() {
//   return (
//     <footer style={{ background: "#0a1628", padding: "40px 24px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
//       <div className="max-w-6xl mx-auto" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
//         <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
//           {/* Brand */}
//           <div style={{ maxWidth: 280 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
//               <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#0D1F3C", border: "1px solid rgba(34,197,94,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <span style={{ color: "#22C55E", fontWeight: 900, fontSize: 14 }}>T</span>
//               </div>
//               <span style={{ color: "white", fontWeight: 800, fontSize: 17 }}>Thinklyedu</span>
//             </div>
//             <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
//               Connecting students with real internship opportunities — for free, always.
//             </p>
//           </div>

//           {/* Links */}
//           <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
//             <div>
//               <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>Platform</div>
//               {["Features", "How It Works", "Domains", "Apply"].map(l => (
//                 <div key={l} style={{ marginBottom: 10 }}>
//                   <a href="#" style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
//                     onMouseOver={e => e.target.style.color = "#22C55E"}
//                     onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.3)"}>{l}</a>
//                 </div>
//               ))}
//             </div>
//             <div>
//               <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>Company</div>
//               {["About", "Blog", "Contact", "Privacy"].map(l => (
//                 <div key={l} style={{ marginBottom: 10 }}>
//                   <a href="#" style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
//                     onMouseOver={e => e.target.style.color = "#22C55E"}
//                     onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.3)"}>{l}</a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
//           <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 13 }}>© 2026 Thinklyedu. All rights reserved.</span>
//           <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 13 }}>Made with 💚 for students</span>
//         </div>
//       </div>
//     </footer>
//   );
// }

// ── Page export ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: "#0D1F3C" }}>
      <Nav />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}