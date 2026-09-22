"use client";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import TechBackground from "@/components/TechBackground";
import { useApplyModal } from "@/components/ApplyModal";
import Image from "next/image";
import {
  Target,
  Users,
  Award,
  Globe,
  Zap,
  Lock,
  FileText,
  Search,
  Handshake,
  Briefcase,
  Trophy,
  Terminal,
  Megaphone,
  Palette,
  Code2,
  PenTool,
  Camera,
  Smartphone,
  ChevronDown,
  BookOpen,
  ArrowRight,
  Star,
} from "lucide-react";

// ── Animated counter ───────────────────────────────────────────────────────────
function Counter({ target, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ── Scroll reveal hook ─────────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
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

// ── Section label (monospace "// tag" style) ───────────────────────────────────
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

// ── Nav (scroll listener only; global Navbar renders the visible header) ──────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
}

// ── Hero ───────────────────────────────────────────────────────────────────────
function Hero() {
  const { open: openApplyModal } = useApplyModal();
  const lineRef = useRef(null);
  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    el.style.width = "0%";
    el.style.transition = "width 1.1s cubic-bezier(0.4,0,0.2,1) 0.6s";
    setTimeout(() => {
      el.style.width = "100%";
    }, 100);
  }, []);

  return (
    <section
      className="section-py-lg home-hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 100,
        paddingBottom: 60,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div
          className="rx-stack hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div>
            <div
              style={{
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.2s forwards",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#4ADE80",
                  fontSize: 12,
                  fontWeight: 600,
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  letterSpacing: "0.02em",
                  border: "1px solid rgba(34,197,94,0.3)",
                  borderRadius: 8,
                  padding: "7px 16px",
                  background: "rgba(34,197,94,0.08)",
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#22C55E",
                    display: "inline-block",
                    animation: "pulse 2s infinite",
                  }}
                />
                {"> status: accepting_applications"}
                <span style={{ animation: "blink 1s step-end infinite" }}>
                  _
                </span>
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(40px,5vw,60px)",
                fontWeight: 900,
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                color: "#F8FAFC",
                marginBottom: 8,
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.35s forwards",
              }}
            >
              Launch Your Career
              <span
                style={{
                  display: "block",
                  color: "#22C55E",
                  position: "relative",
                }}
              >
                {"<With Real Work />"}
                <span
                  ref={lineRef}
                  style={{
                    display: "block",
                    height: 3,
                    background: "rgba(34,197,94,0.35)",
                    borderRadius: 4,
                    marginTop: 4,
                    width: "0%",
                  }}
                />
              </span>
            </h1>

            <p
              style={{
                fontSize: 17,
                color: "#94A3B8",
                lineHeight: 1.75,
                maxWidth: 480,
                margin: "24px 0 36px",
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.5s forwards",
              }}
            >
              Thinklyedu connects students with internship opportunities across
              15+ domains — for free. No experience needed. Just ambition.
            </p>

            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.65s forwards",
              }}
            >
              <a
                href="#"
                style={{
                  background: "#22C55E",
                  color: "#08150C",
                  fontWeight: 700,
                  fontSize: 15,
                  padding: "14px 32px",
                  borderRadius: 10,
                  textDecoration: "none",
                  boxShadow: "0 8px 28px rgba(34,197,94,0.28)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  openApplyModal();
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 36px rgba(34,197,94,0.38)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 28px rgba(34,197,94,0.28)";
                }}
              >
                Start Your Internship
              </a>
              <a
                href="#how"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.16)",
                  color: "#E2E8F0",
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "14px 32px",
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "#22C55E";
                  e.currentTarget.style.color = "#4ADE80";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
                  e.currentTarget.style.color = "#E2E8F0";
                }}
              >
                See How It Works
              </a>
            </div>

            {/* Trust bar */}
            <div
              className="rx-nowrap"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                marginTop: 48,
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.8s forwards",
              }}
            >
              <div style={{ display: "flex" }}>
                {["#22C55E", "#0D1F3C", "#3B82F6", "#F59E0B", "#EF4444"].map(
                  (c, i) => (
                    <div
                      key={i}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: c,
                        border: "2px solid #0a1628",
                        marginLeft: i === 0 ? 0 : -10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          fontSize: 11,
                          fontWeight: 700,
                        }}
                      >
                        {String.fromCharCode(65 + i)}
                      </span>
                    </div>
                  ),
                )}
              </div>
              <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>
                <strong style={{ color: "#F1F5F9" }}>500+ students</strong>{" "}
                already placed this year
              </p>
            </div>
          </div>

          {/* Right — floating cards visual */}
          <div
            className="hero-visual"
            style={{
              position: "relative",
              height: 480,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Main Circle */}
            <div className="relative w-full max-w-[430px] aspect-square mx-auto">
              {/* Background Glow */}
              <div className="absolute inset-0 z-0 bg-green-400/15 blur-3xl scale-110 rounded-full" />

              {/* Scan ring */}
              <div
                style={{
                  position: "absolute",
                  inset: -14,
                  borderRadius: "50%",
                  border: "1px dashed rgba(34,197,94,0.35)",
                  animation: "spin 30s linear infinite",
                  zIndex: 5,
                }}
              />

              <div
                className="relative z-10 w-full h-full overflow-hidden rounded-full shadow-2xl"
                style={{
                  border: "2px solid rgba(34,197,94,0.4)",
                  background:
                    "linear-gradient(160deg, #0d1b30 0%, #0a1628 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 44px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    fontSize: 13,
                    lineHeight: 1.95,
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  <div style={{ color: "#64748B" }}>// thinklyedu.js</div>
                  <div style={{ color: "#E2E8F0" }}>
                    <span style={{ color: "#818CF8" }}>const</span> student = {"{"}
                  </div>
                  <div style={{ paddingLeft: 16, color: "#E2E8F0" }}>
                    skills: [<span style={{ color: "#FBBF24" }}>&quot;ambition&quot;</span>],
                  </div>
                  <div style={{ paddingLeft: 16, color: "#E2E8F0" }}>
                    mentor: <span style={{ color: "#FBBF24" }}>true</span>,
                  </div>
                  <div style={{ paddingLeft: 16, color: "#E2E8F0" }}>
                    fee: <span style={{ color: "#FBBF24" }}>0</span>,
                  </div>
                  <div style={{ color: "#E2E8F0" }}>{"};"}</div>
                  <div style={{ marginTop: 12, color: "#E2E8F0" }}>
                    <span style={{ color: "#818CF8" }}>function</span>{" "}
                    <span style={{ color: "#22C55E" }}>launchCareer</span>
                    (student) {"{"}
                  </div>
                  <div style={{ paddingLeft: 16, color: "#E2E8F0" }}>
                    <span style={{ color: "#818CF8" }}>return</span>{" "}
                    <span style={{ color: "#FBBF24" }}>&quot;hired&quot;</span>;
                  </div>
                  <div style={{ color: "#E2E8F0" }}>
                    {"}"}
                    <span style={{ animation: "blink 1s step-end infinite" }}>
                      _
                    </span>
                  </div>
                </div>
              </div>

              {/* Corner brackets — tech scan frame */}
              {[
                { top: -10, left: -10, borderWidth: "3px 0 0 3px" },
                { top: -10, right: -10, borderWidth: "3px 3px 0 0" },
                { bottom: -10, left: -10, borderWidth: "0 0 3px 3px" },
                { bottom: -10, right: -10, borderWidth: "0 3px 3px 0" },
              ].map((pos, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    width: 28,
                    height: 28,
                    borderStyle: "solid",
                    borderColor: "#22C55E",
                    zIndex: 20,
                    ...pos,
                  }}
                />
              ))}

            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes float { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-10px); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
        @keyframes spin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
      `}</style>
    </section>
  );
}

// ── Stats bar ──────────────────────────────────────────────────────────────────
function Stats() {
  return (
    <section
      style={{
        padding: "52px 24px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <div
        className="max-w-6xl mx-auto rx-2"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 32,
          textAlign: "center",
        }}
      >
        {[
          { value: 500, suffix: "+", label: "Students Placed" },
          { value: 120, suffix: "+", label: "Partner Companies" },
          { value: 15, suffix: "+", label: "Internship Domains" },
          { value: 100, suffix: "%", label: "Free for Students" },
        ].map((s) => (
          <div key={s.label}>
            <div
              style={{
                fontSize: 40,
                fontWeight: 900,
                color: "#22C55E",
                marginBottom: 4,
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              }}
            >
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div
              style={{
                fontSize: 13,
                color: "rgba(226,232,240,0.55)",
                fontWeight: 500,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Domains ────────────────────────────────────────────────────────────────────
function Domains() {
  const domains = [
    {
      icon: Megaphone,
      name: "Marketing",
      slug: "marketing",
      desc: "Social media, SEO, campaigns",
    },
    {
      icon: Palette,
      name: "Design",
      slug: "design",
      desc: "UI/UX, graphics, branding",
    },
    {
      icon: Code2,
      name: "Technology",
      slug: "technology",
      desc: "Web dev, apps, coding",
    },
    {
      icon: PenTool,
      name: "Content Writing",
      slug: "content-writing",
      desc: "Blogs, copywriting, scripts",
    },
    {
      icon: Camera,
      name: "Photography & Video",
      slug: "photography-video",
      desc: "Reels, editing, shoots",
    },
    {
      icon: Smartphone,
      name: "Social Media",
      slug: "social-media",
      desc: "Instagram, YouTube, LinkedIn",
    },
  ];

  return (
    <section id="domains" className="section-py" style={{ padding: "96px 24px" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div
            className="section-head-mb"
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <SectionTag>domains</SectionTag>
            <h2
              style={{
                fontSize: "clamp(30px,4vw,42px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "#F8FAFC",
                margin: "12px 0 16px",
                lineHeight: 1.1,
              }}
            >
              Pick Your <span style={{ color: "#22C55E" }}>Domain</span>
            </h2>
            <p
              style={{
                color: "#94A3B8",
                fontSize: 16,
                maxWidth: 500,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              6+ industry-relevant tracks, each with real projects and a
              dedicated mentor — free, remote or on-site.
            </p>
          </div>
        </Reveal>

        <div
          className="rx-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
          }}
        >
          {domains.map((d, i) => (
            <Reveal key={d.slug} delay={i * 70}>
              <a
                href={`/internship/${d.slug}`}
                style={{
                  display: "block",
                  background: "rgba(255,255,255,0.03)",
                  border: "1.5px solid rgba(255,255,255,0.08)",
                  borderRadius: 20,
                  padding: 26,
                  textDecoration: "none",
                  transition: "all 0.3s",
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(34,197,94,0.1)",
                      border: "1px solid rgba(34,197,94,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <d.icon size={22} color="#4ADE80" strokeWidth={1.8} />
                  </div>
                  <ArrowRight size={16} color="#4ADE80" />
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#F1F5F9",
                    marginBottom: 6,
                  }}
                >
                  {d.name}
                </h3>
                <p style={{ fontSize: 13.5, color: "#94A3B8", margin: 0 }}>
                  {d.desc}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Tech stack / skills strip ────────────────────────────────────────────────
function TechStack() {
  const skills = [
    "React", "Node.js", "Python", "Figma", "SQL", "Git & GitHub",
    "REST APIs", "Canva", "SEO Tools", "Next.js", "Tailwind CSS",
    "Meta Ads Manager", "Notion", "VS Code",
  ];

  return (
    <section
      style={{
        padding: "72px 24px",
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto" style={{ textAlign: "center" }}>
        <Reveal>
          <SectionTag>skills_you_will_build</SectionTag>
          <h2
            style={{
              fontSize: "clamp(24px,3vw,32px)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#F8FAFC",
              margin: "12px 0 32px",
            }}
          >
            Real Tools. Real <span style={{ color: "#22C55E" }}>Skills.</span>
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
            }}
          >
            {skills.map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: 13,
                  color: "#4ADE80",
                  border: "1px solid rgba(34,197,94,0.3)",
                  background: "rgba(34,197,94,0.06)",
                  borderRadius: 999,
                  padding: "8px 18px",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Features ───────────────────────────────────────────────────────────────────
function Features() {
  const features = [
    {
      icon: Target,
      title: "Real Projects Only",
      desc: "No coffee runs. Every Thinklyedu intern works on live, meaningful projects with real deliverables and measurable impact.",
    },
    {
      icon: Users,
      title: "Dedicated Mentorship",
      desc: "Each intern gets a 1-on-1 mentor from the host company — weekly check-ins, feedback, and a professional recommendation letter.",
    },
    {
      icon: Award,
      title: "Verified Certificates",
      desc: "Skill-linked certificates recognized by recruiters. They show what you can actually do, not just where you were.",
    },
    {
      icon: Globe,
      title: "Remote & On-site",
      desc: "Work from anywhere or experience an office — we have both options across 30+ cities in India.",
    },
    {
      icon: Zap,
      title: "Fast-track Matching",
      desc: "Our smart matching takes your skills and preferences and finds the right fit within 72 hours of applying.",
    },
    {
      icon: Lock,
      title: "Always Free",
      desc: "Zero fees. Zero hidden charges. Students will never pay a rupee — now or ever. Our partners fund everything.",
    },
  ];

  return (
    <section id="features" className="section-py" style={{ padding: "96px 24px" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div
            className="section-head-mb"
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <SectionTag>features</SectionTag>
            <h2
              style={{
                fontSize: "clamp(30px,4vw,42px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "#F8FAFC",
                margin: "12px 0 16px",
                lineHeight: 1.1,
              }}
            >
              Everything You Need to{" "}
              <span style={{ color: "#22C55E" }}>Grow</span>
            </h2>
            <p
              style={{
                color: "#94A3B8",
                fontSize: 16,
                maxWidth: 500,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              We've thought of everything so you can focus on what matters —
              building skills and launching your career.
            </p>
          </div>
        </Reveal>

        <div
          className="rx-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 24,
          }}
        >
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1.5px solid rgba(255,255,255,0.08)",
                  borderRadius: 20,
                  padding: 28,
                  transition: "all 0.3s",
                  cursor: "default",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "rgba(34,197,94,0.5)";
                  e.currentTarget.style.background = "rgba(34,197,94,0.05)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(34,197,94,0.12)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <f.icon size={22} color="#4ADE80" strokeWidth={1.8} />
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#F1F5F9",
                    marginBottom: 10,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "#94A3B8",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {f.desc}
                </p>
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
    {
      num: "01",
      title: "Apply Online",
      desc: "Fill out a simple form — tell us your interests, skills, and availability. Takes less than 5 minutes.",
      icon: FileText,
    },
    {
      num: "02",
      title: "Get Matched",
      desc: "Our team reviews your profile and matches you with the best-fit company within 72 hours.",
      icon: Search,
    },
    {
      num: "03",
      title: "Meet Your Mentor",
      desc: "Connect with your assigned company mentor. Align on goals, schedule, and your first project.",
      icon: Handshake,
    },
    {
      num: "04",
      title: "Do Real Work",
      desc: "Work on live projects, get feedback every week, and build a portfolio that gets you hired.",
      icon: Briefcase,
    },
    {
      num: "05",
      title: "Get Certified",
      desc: "Complete your internship and receive a verified certificate you can share on LinkedIn and your resume.",
      icon: Trophy,
    },
  ];

  return (
    <section
      id="how"
      className="section-py"
      style={{
        padding: "96px 24px",
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div
            className="section-head-mb"
            style={{ textAlign: "center", marginBottom: 72 }}
          >
            <SectionTag>the_process</SectionTag>
            <h2
              style={{
                fontSize: "clamp(30px,4vw,42px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "#F8FAFC",
                margin: "12px 0 16px",
                lineHeight: 1.1,
              }}
            >
              From Apply to <span style={{ color: "#22C55E" }}>Certified</span>
            </h2>
            <p
              style={{
                color: "#94A3B8",
                fontSize: 16,
                maxWidth: 460,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Five simple steps stand between you and a career-defining
              internship experience.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Connecting circuit line */}
          <div
            className="rx-hide"
            style={{
              position: "absolute",
              top: 40,
              left: "calc(10% + 20px)",
              right: "calc(10% + 20px)",
              height: 2,
              background:
                "linear-gradient(90deg,#22C55E,rgba(34,197,94,0.15))",
              zIndex: 0,
            }}
          />

          <div
            className="rx-stack"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5,1fr)",
              gap: 24,
              position: "relative",
              zIndex: 1,
            }}
          >
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {/* Circle */}
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: i === 0 ? "#22C55E" : "rgba(255,255,255,0.04)",
                      border: `2px solid ${i === 0 ? "#22C55E" : "rgba(255,255,255,0.12)"}`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                      boxShadow:
                        i === 0
                          ? "0 8px 24px rgba(34,197,94,0.35)"
                          : "0 4px 16px rgba(0,0,0,0.25)",
                      transition: "all 0.3s",
                    }}
                    onMouseOver={(e) => {
                      const el = e.currentTarget;
                      el.style.background = "#22C55E";
                      el.style.borderColor = "#22C55E";
                      el.style.boxShadow = "0 8px 24px rgba(34,197,94,0.35)";
                      el.style.transform = "translateY(-4px)";
                      const icon = el.querySelector("svg");
                      if (icon) icon.style.color = "#08150C";
                    }}
                    onMouseOut={(e) => {
                      const el = e.currentTarget;
                      el.style.background =
                        i === 0 ? "#22C55E" : "rgba(255,255,255,0.04)";
                      el.style.borderColor =
                        i === 0 ? "#22C55E" : "rgba(255,255,255,0.12)";
                      el.style.boxShadow =
                        i === 0
                          ? "0 8px 24px rgba(34,197,94,0.35)"
                          : "0 4px 16px rgba(0,0,0,0.25)";
                      el.style.transform = "translateY(0)";
                      const icon = el.querySelector("svg");
                      if (icon) icon.style.color = i === 0 ? "#08150C" : "#4ADE80";
                    }}
                  >
                    <step.icon
                      size={26}
                      strokeWidth={1.8}
                      color={i === 0 ? "#08150C" : "#4ADE80"}
                      style={{ transition: "color 0.3s" }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#22C55E",
                      letterSpacing: "0.1em",
                      marginBottom: 6,
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    }}
                  >
                    {step.num}
                  </span>
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#F1F5F9",
                      marginBottom: 8,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 12.5,
                      color: "#94A3B8",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
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
    {
      name: "Priya Sharma",
      role: "Marketing Intern → Full-time at StartupX",
      avatar: "PS",
      color: "#22C55E",
      quote:
        "Thinklyedu gave me my first real project at age 20. Within 3 months I had a portfolio, a mentor, and a job offer. I cannot recommend this enough.",
    },
    {
      name: "Arjun Mehta",
      role: "UI Design Intern → Freelancer",
      avatar: "AM",
      color: "#3B82F6",
      quote:
        "I had zero experience. Thinklyedu matched me with a design agency in 48 hours. The mentor I got was genuinely invested in my growth — changed my life.",
    },
    {
      name: "Sneha Patel",
      role: "Finance Intern → MBA Graduate",
      avatar: "SP",
      color: "#F59E0B",
      quote:
        "The certificate from Thinklyedu got me shortlisted for my MBA program. Admissions teams notice it because it's skill-linked, not just a participation trophy.",
    },
    {
      name: "Rahul Verma",
      role: "Content Intern → Content Manager",
      avatar: "RV",
      color: "#EF4444",
      quote:
        "I applied on a Monday and was talking to my mentor by Wednesday. The process is incredibly smooth and the team actually cares about your progress.",
    },
    {
      name: "Ananya Roy",
      role: "HR Intern → Recruitment Lead",
      avatar: "AR",
      color: "#8B5CF6",
      quote:
        "What I loved most was how real the work felt. My project actually shipped. Seeing something I built go live during my internship was unforgettable.",
    },
    {
      name: "Kartik Singh",
      role: "Tech Intern → Software Engineer",
      avatar: "KS",
      color: "#22C55E",
      quote:
        "Thinklyedu is the real deal. Free, fast, and focused on actual learning. Every student deserves this kind of opportunity at the start of their career.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="section-py"
      style={{ padding: "96px 24px", overflow: "hidden" }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div
            className="section-head-mb"
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <SectionTag>student_stories</SectionTag>
            <h2
              style={{
                fontSize: "clamp(30px,4vw,42px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "#F8FAFC",
                margin: "12px 0 16px",
                lineHeight: 1.1,
              }}
            >
              Real Students.{" "}
              <span style={{ color: "#22C55E" }}>Real Results.</span>
            </h2>
            <p
              style={{
                color: "#94A3B8",
                fontSize: 16,
                maxWidth: 460,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Don't take our word for it. Here's what students say after their
              Thinklyedu internship.
            </p>
          </div>
        </Reveal>

        <div
          className="rx-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
          }}
        >
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 70}>
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1.5px solid rgba(255,255,255,0.08)",
                  borderRadius: 20,
                  padding: 28,
                  height: "100%",
                  boxSizing: "border-box",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "rgba(34,197,94,0.4)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(34,197,94,0.1)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} color="#F59E0B" fill="#F59E0B" />
                  ))}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: "#CBD5E1",
                    lineHeight: 1.75,
                    margin: "0 0 24px",
                    fontStyle: "italic",
                  }}
                >
                  "{t.quote}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: t.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{ color: "white", fontWeight: 800, fontSize: 13 }}
                    >
                      {t.avatar}
                    </span>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#F1F5F9",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontSize: 11.5,
                        color: "#4ADE80",
                        fontWeight: 600,
                      }}
                    >
                      {t.role}
                    </div>
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

// ── FAQ ────────────────────────────────────────────────────────────────────────
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      q: "Is the internship free?",
      a: "Yes, all our internships are completely free. We believe in providing equal opportunities for everyone to learn and grow.",
    },
    {
      q: "Is the internship remote?",
      a: "Most tracks are 100% remote, and select domains also offer on-site options across 30+ cities in India — you choose what fits you.",
    },
    {
      q: "How do I get a certificate?",
      a: "You'll receive a verified, skill-linked certificate upon successful completion of all internship tasks and projects, with a unique verification ID.",
    },
    {
      q: "How long is the internship?",
      a: "Typically 4-6 weeks depending on the domain. You can work at your own pace within the timeline alongside your mentor.",
    },
    {
      q: "What are the eligibility criteria?",
      a: "Anyone with a passion to learn and basic knowledge of their chosen domain can apply. Students and fresh graduates are encouraged to apply.",
    },
  ];

  return (
    <section id="faq" className="section-py" style={{ padding: "96px 24px" }}>
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div
            className="section-head-mb"
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <SectionTag>faq</SectionTag>
            <h2
              style={{
                fontSize: "clamp(28px,4vw,38px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "#F8FAFC",
                margin: "12px 0 16px",
                lineHeight: 1.1,
              }}
            >
              Frequently Asked{" "}
              <span style={{ color: "#22C55E" }}>Questions</span>
            </h2>
            <p style={{ color: "#94A3B8", fontSize: 16, margin: 0 }}>
              Got questions? We've got answers.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={faq.q} delay={i * 50}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1.5px solid ${open ? "rgba(34,197,94,0.4)" : "rgba(255,255,255,0.08)"}`,
                    borderRadius: 14,
                    overflow: "hidden",
                    transition: "border-color 0.25s",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      padding: "18px 22px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: "inherit",
                    }}
                  >
                    <span
                      style={{ fontSize: 15, fontWeight: 700, color: "#F1F5F9" }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      color="#4ADE80"
                      style={{
                        flexShrink: 0,
                        transition: "transform 0.25s",
                        transform: open ? "rotate(180deg)" : "none",
                      }}
                    />
                  </button>
                  <div
                    style={{
                      maxHeight: open ? 200 : 0,
                      transition: "max-height 0.3s ease",
                      overflow: "hidden",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        padding: "0 22px 20px",
                        fontSize: 13.5,
                        color: "#94A3B8",
                        lineHeight: 1.7,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Blog preview ──────────────────────────────────────────────────────────────
function BlogPreview() {
  const posts = [
    {
      title: "How to Build a High-Impact Tech Portfolio",
      excerpt:
        "Learn what recruiters actually look for in modern frontend & full-stack roles.",
      category: "Technology",
      readTime: "6 min read",
      image: "/blog/WhatsApp Image 2026-09-03 at 10.37.41 AM (1).jpeg",
    },
    {
      title: "Figma to Code: A Designer's Bridge",
      excerpt:
        "Master the workflow to turn UI mockups into clean, production-ready interfaces.",
      category: "Design",
      readTime: "5 min read",
      image: "/blog/WhatsApp Image 2026-09-03 at 10.37.41 AM.jpeg",
    },
    {
      title: "Scale Meta Ads Without Burning Budget",
      excerpt:
        "A practical playbook for scaling paid social campaigns with measurable ROAS.",
      category: "Marketing",
      readTime: "7 min read",
      image: "/blog/WhatsApp Image 2026-09-03 at 10.37.41 AM.jpeg",
    },
  ];

  return (
    <section
      className="section-py"
      style={{
        padding: "96px 24px",
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 48,
            }}
          >
            <div>
              <SectionTag>from_the_blog</SectionTag>
              <h2
                style={{
                  fontSize: "clamp(28px,4vw,38px)",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  color: "#F8FAFC",
                  margin: "12px 0 0",
                  lineHeight: 1.1,
                }}
              >
                Learn Before You{" "}
                <span style={{ color: "#22C55E" }}>Apply</span>
              </h2>
            </div>
            <a
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "#4ADE80",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              View all articles <ArrowRight size={15} />
            </a>
          </div>
        </Reveal>

        <div
          className="rx-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 24,
          }}
        >
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <a
                href="/blog"
                style={{
                  display: "block",
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.03)",
                  border: "1.5px solid rgba(255,255,255,0.08)",
                  borderRadius: 20,
                  overflow: "hidden",
                  transition: "all 0.3s",
                  height: "100%",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "rgba(34,197,94,0.4)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: 160,
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, transparent 40%, rgba(6,11,22,0.85) 100%)",
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
                    {p.category}
                  </span>
                </div>
                <div style={{ padding: 22 }}>
                  <h3
                    style={{
                      fontSize: 15.5,
                      fontWeight: 700,
                      color: "#F1F5F9",
                      marginBottom: 8,
                      lineHeight: 1.4,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#94A3B8",
                      lineHeight: 1.6,
                      margin: "0 0 14px",
                    }}
                  >
                    {p.excerpt}
                  </p>
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
                    <BookOpen size={13} /> {p.readTime}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA ────────────────────────────────────────────────────────────────────────
function CTA() {
  const { open: openApplyModal } = useApplyModal();

  return (
    <section
      id="cta"
      className="section-py-lg"
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* bg decoration */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(34,197,94,0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -60,
          left: -60,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "rgba(34,197,94,0.05)",
          pointerEvents: "none",
        }}
      />

      <div
        className="max-w-3xl mx-auto"
        style={{ textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <Reveal>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#4ADE80",
              fontSize: 11,
              fontWeight: 700,
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              letterSpacing: "0.05em",
              border: "1px solid rgba(34,197,94,0.3)",
              borderRadius: 999,
              padding: "6px 16px",
              background: "rgba(34,197,94,0.1)",
              marginBottom: 24,
            }}
          >
            <Terminal size={13} /> Start Today — It's Free
          </span>
          <h2
            style={{
              fontSize: "clamp(32px,5vw,52px)",
              fontWeight: 900,
              color: "#F8FAFC",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              marginBottom: 20,
            }}
          >
            Your next opportunity
            <span style={{ display: "block", color: "#22C55E" }}>
              is one click away.
            </span>
          </h2>
          <p
            style={{
              color: "rgba(226,232,240,0.6)",
              fontSize: 17,
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 520,
              margin: "0 auto 40px",
            }}
          >
            Join 500+ students who launched their careers through Thinklyedu.
            Apply today — free, fast, and real.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#"
              style={{
                background: "#22C55E",
                color: "#08150C",
                fontWeight: 800,
                fontSize: 16,
                padding: "16px 40px",
                borderRadius: 999,
                textDecoration: "none",
                boxShadow: "0 12px 40px rgba(34,197,94,0.3)",
                transition: "all 0.2s",
              }}
              onClick={(e) => {
                e.preventDefault();
                openApplyModal();
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
              Apply for Internship →
            </a>
            <a
              href="/about"
              style={{
                border: "1.5px solid rgba(255,255,255,0.2)",
                color: "#F1F5F9",
                fontWeight: 600,
                fontSize: 16,
                padding: "16px 40px",
                borderRadius: 999,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#22C55E";
                e.currentTarget.style.color = "#4ADE80";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.color = "#F1F5F9";
              }}
            >
              Learn About Us
            </a>
          </div>
          <p
            style={{
              color: "rgba(226,232,240,0.3)",
              fontSize: 13,
              marginTop: 28,
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            }}
          >
            supportthinkly.co@gmail.com &nbsp;·&nbsp; +91 98185 09083
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ── Page export ────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main
      style={{
        fontFamily: "'Inter', -apple-system, sans-serif",
        color: "#F1F5F9",
        position: "relative",
        background: "#0a1628",
      }}
    >
      <TechBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Nav />
        <Hero />
        <Stats />
        <Domains />
        <Features />
        <TechStack />
        <HowItWorks />
        <Testimonials />
        <BlogPreview />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
