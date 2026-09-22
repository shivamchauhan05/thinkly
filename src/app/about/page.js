"use client";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import TechBackground from "@/components/TechBackground";
import { useApplyModal } from "@/components/ApplyModal";
import {
  Rocket,
  Users,
  Star,
  Briefcase,
  CheckCircle2,
  Terminal,
  Zap,
  Target,
} from "lucide-react";

// ── Mission network nodes ───────────────────────────────────────────────────
// x/y are pre-rounded (2dp) so server- and client-rendered markup match
// exactly — raw Math.cos/Math.sin can differ in the last decimal between
// Node's and the browser's floating-point implementation, which trips a
// hydration mismatch.
function pillarPos(deg) {
  const rad = (deg * Math.PI) / 180;
  return {
    x: Math.round((96 + 80 * Math.cos(rad)) * 100) / 100,
    y: Math.round((96 + 80 * Math.sin(rad)) * 100) / 100,
  };
}

const MISSION_PILLARS = [
  { deg: 0, label: "Real Projects", icon: Rocket },
  { deg: 60, label: "Mentorship", icon: Users },
  { deg: 120, label: "Certified", icon: CheckCircle2 },
  { deg: 180, label: "Zero Cost", icon: Star },
  { deg: 240, label: "Fast Match", icon: Zap },
  { deg: 300, label: "Community", icon: Briefcase },
].map((p) => ({ ...p, ...pillarPos(p.deg) }));

// ── Section label (monospace "// tag" style, matches homepage) ────────────────
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

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const { open: openApplyModal } = useApplyModal();
  const lineRef = useRef(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    el.style.width = "0%";
    el.style.transition = "width 1s cubic-bezier(0.4,0,0.2,1) 0.4s";
    setTimeout(() => {
      el.style.width = "100%";
    }, 100);
  }, []);

  return (
    <main
      className="font-sans antialiased"
      style={{ position: "relative", color: "#F1F5F9", background: "#0a1628" }}
    >
      <TechBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ── HERO ── */}
        <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-6 rounded-lg px-4 py-2"
              style={{
                color: "#4ADE80",
                border: "1px solid rgba(34,197,94,0.3)",
                background: "rgba(34,197,94,0.08)",
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              }}
            >
              <Terminal size={13} /> about_thinklyedu
            </span>
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4"
              style={{ color: "#F8FAFC" }}
            >
              Where Students Get
              <span className="block relative" style={{ color: "#22C55E" }}>
                Real Experience.
                <span
                  ref={lineRef}
                  className="absolute bottom-1 left-0 h-[3px] rounded-full"
                  style={{ width: "0%", background: "rgba(34,197,94,0.35)" }}
                />
              </span>
            </h1>
            <p
              className="text-lg leading-relaxed max-w-xl mt-6 mb-10"
              style={{ color: "#94A3B8" }}
            >
              Thinklyedu bridges the gap between classroom learning and career
              readiness — connecting ambitious students with internship
              opportunities that actually matter.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="font-bold px-8 py-3.5 rounded-full transition-colors"
                style={{
                  background: "#22C55E",
                  color: "#08150C",
                  boxShadow: "0 8px 28px rgba(34,197,94,0.28)",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  openApplyModal();
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "#16a34a")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#22C55E")}
              >
                Start Your Journey →
              </a>
              <a
                href="#mission"
                className="font-semibold px-8 py-3.5 rounded-full transition-colors"
                style={{ border: "1.5px solid rgba(255,255,255,0.16)", color: "#E2E8F0" }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "#22C55E";
                  e.currentTarget.style.color = "#4ADE80";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
                  e.currentTarget.style.color = "#E2E8F0";
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section
          className="py-14 px-6"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 500, suffix: "+", label: "Students Placed" },
              { value: 120, suffix: "+", label: "Partner Companies" },
              { value: 95, suffix: "%", label: "Satisfaction Rate" },
              { value: 30, suffix: "+", label: "Cities Covered" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-4xl font-black mb-1"
                  style={{ color: "#22C55E", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
                >
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm font-medium" style={{ color: "rgba(226,232,240,0.55)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── MISSION ── */}
        <section id="mission" className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="relative">
              <div
                className="w-full aspect-square max-w-md mx-auto rounded-3xl flex flex-col items-center justify-center overflow-hidden py-8"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1.5px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="relative flex items-center justify-center w-48 h-48">
                  {/* Connecting lines */}
                  <svg
                    viewBox="0 0 192 192"
                    className="absolute inset-0 w-full h-full"
                    style={{ overflow: "visible" }}
                  >
                    {MISSION_PILLARS.map((p, i) => (
                      <line
                        key={p.label}
                        x1={96}
                        y1={96}
                        x2={p.x}
                        y2={p.y}
                        stroke="#22C55E"
                        strokeWidth="1.2"
                        opacity="0.22"
                        className="mission-line"
                        style={{ animationDelay: `${i * 0.25}s` }}
                      />
                    ))}
                  </svg>

                  {/* Icon nodes */}
                  {MISSION_PILLARS.map((p, i) => {
                    return (
                      <div
                        key={p.label}
                        className="absolute flex items-center justify-center rounded-full mission-node"
                        title={p.label}
                        style={{
                          width: 30,
                          height: 30,
                          left: p.x - 15,
                          top: p.y - 15,
                          background: "#0d1b30",
                          border: "1.5px solid rgba(34,197,94,0.45)",
                          animationDelay: `${i * 0.3}s`,
                        }}
                      >
                        <p.icon size={14} color="#4ADE80" strokeWidth={2} />
                      </div>
                    );
                  })}

                  <div
                    className="relative w-24 h-24 rounded-full flex items-center justify-center"
                    style={{
                      background: "#0d1b30",
                      border: "1px solid rgba(34,197,94,0.3)",
                      zIndex: 2,
                    }}
                  >
                    <Target size={38} color="#22C55E" strokeWidth={1.6} />
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-2 px-6">
                  {MISSION_PILLARS.map((p) => (
                    <span
                      key={p.label}
                      className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1.5"
                      style={{
                        color: "#CBD5E1",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <p.icon size={12} color="#4ADE80" />
                      {p.label}
                    </span>
                  ))}
                </div>

                <style jsx>{`
                  .mission-line {
                    stroke-dasharray: 100;
                    stroke-dashoffset: 100;
                    animation: missionDraw 1.2s ease forwards;
                  }
                  @keyframes missionDraw {
                    to {
                      stroke-dashoffset: 0;
                    }
                  }
                  .mission-node {
                    opacity: 0;
                    animation: missionPop 0.5s ease forwards, missionPulse 3s ease-in-out infinite 1.5s;
                  }
                  @keyframes missionPop {
                    from { opacity: 0; transform: scale(0.4); }
                    to { opacity: 1; transform: scale(1); }
                  }
                  @keyframes missionPulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.25); }
                    50% { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
                  }
                `}</style>
              </div>
              <div
                className="absolute -bottom-4 -right-4 inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-2xl"
                style={{
                  background: "#22C55E",
                  color: "#08150C",
                  boxShadow: "0 8px 24px rgba(34,197,94,0.3)",
                }}
              >
                <Target size={13} strokeWidth={2.2} /> Internships that count
              </div>
            </div>

            {/* Text */}
            <div>
              <SectionTag>our_mission</SectionTag>
              <h2 className="text-4xl font-extrabold mt-3 mb-6 leading-tight" style={{ color: "#F8FAFC" }}>
                Empowering Students
                <span style={{ color: "#22C55E" }}> Through Action</span>
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "#94A3B8" }}>
                We believe every student deserves a fair shot at real-world
                experience. Thinklyedu was built to eliminate the catch-22 of
                needing experience to get experience — by creating structured,
                mentored internship pathways with companies that are committed
                to student growth.
              </p>
              <ul className="space-y-3">
                {[
                  "Structured learning programs with measurable outcomes",
                  "Mentorship from industry professionals",
                  "Certificate of completion for every intern",
                  "Zero cost for students — always",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium" style={{ color: "#CBD5E1" }}>
                    <CheckCircle2 size={19} color="#22C55E" style={{ flexShrink: 0, marginTop: 1 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── VISION ── */}
        <section
          id="vision"
          className="py-24 px-6"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <SectionTag>our_vision</SectionTag>
              <h2 className="text-4xl font-extrabold mt-3 mb-6 leading-tight" style={{ color: "#F8FAFC" }}>
                India&apos;s Most Trusted
                <span style={{ color: "#22C55E" }}> Internship Platform</span>
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "#94A3B8" }}>
                We envision a future where no talented student is left behind
                due to lack of opportunity. By 2027, we aim to place 10,000+
                students in meaningful internships across every major industry
                in India — building a generation of career-ready graduates.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Rocket, label: "Career Launch" },
                  { icon: Users, label: "Community" },
                  { icon: Briefcase, label: "Industry Connect" },
                  { icon: Star, label: "Excellence" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl px-4 py-3"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <item.icon size={20} color="#4ADE80" strokeWidth={1.8} />
                    <span className="text-sm font-semibold" style={{ color: "#E2E8F0" }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div
                className="w-full aspect-square max-w-md mx-auto rounded-3xl p-8 flex flex-col justify-between"
                style={{
                  background: "linear-gradient(160deg, #0d1b30 0%, #0a1628 100%)",
                  border: "1.5px solid rgba(34,197,94,0.25)",
                }}
              >
                <div
                  className="font-black text-5xl"
                  style={{ color: "#22C55E", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
                >
                  2027
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(226,232,240,0.4)" }}>
                    Goal
                  </div>
                  <div className="font-bold text-2xl leading-snug" style={{ color: "#F1F5F9" }}>
                    10,000+ Students Placed Across India
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[70, 85, 60, 90, 75, 95].map((h, i) => (
                    <div
                      key={i}
                      className="rounded-lg overflow-hidden h-12 flex items-end"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <div
                        className="w-full rounded-lg transition-all"
                        style={{ height: `${h}%`, background: "#22C55E" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section id="why" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SectionTag>why_thinklyedu</SectionTag>
              <h2 className="text-4xl font-extrabold mt-3 leading-tight" style={{ color: "#F8FAFC" }}>
                Built Different. <span style={{ color: "#22C55E" }}>For Students.</span>
              </h2>
              <p className="mt-4 max-w-xl mx-auto" style={{ color: "#94A3B8" }}>
                We&apos;re not just another job board. Here&apos;s what makes
                Thinklyedu the right choice for your career journey.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Rocket,
                  title: "Real Projects, Real Impact",
                  desc: "Forget coffee-fetching internships. Our partners assign students to live projects with measurable deliverables and genuine ownership.",
                  highlight: "Live projects",
                },
                {
                  icon: Users,
                  title: "Mentor-Driven Learning",
                  desc: "Every intern is assigned a dedicated mentor from the host company who guides weekly, reviews work, and writes a professional recommendation.",
                  highlight: "1-on-1 mentorship",
                },
                {
                  icon: Star,
                  title: "Verified Certifications",
                  desc: "Our certificates are industry-recognized and skill-linked, so recruiters know exactly what you can do — not just where you interned.",
                  highlight: "Skill-linked certs",
                },
                {
                  icon: Briefcase,
                  title: "All Domains Welcome",
                  desc: "From Marketing and Design to Tech, Finance, and Operations — we have internship pathways across 15+ domains.",
                  highlight: "15+ domains",
                },
                {
                  icon: Star,
                  title: "100% Free for Students",
                  desc: "We will never charge a student. Ever. Our platform is fully funded by our partner companies, so you can focus on learning.",
                  highlight: "Zero cost",
                },
                {
                  icon: Users,
                  title: "Community & Network",
                  desc: "Join a growing community of 500+ Thinklyedu alumni who help each other with referrals, advice, and opportunities.",
                  highlight: "500+ alumni",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group rounded-2xl p-7 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1.5px solid rgba(255,255,255,0.08)",
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
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: "rgba(34,197,94,0.1)",
                      border: "1px solid rgba(34,197,94,0.25)",
                    }}
                  >
                    <card.icon size={22} color="#4ADE80" strokeWidth={1.8} />
                  </div>
                  <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: "#22C55E" }}
                  >
                    {card.highlight}
                  </span>
                  <h3 className="text-lg font-bold mt-2 mb-3" style={{ color: "#F1F5F9" }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APPLY CTA ── */}
        <section
          id="apply"
          className="py-24 px-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <span
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest rounded-full px-4 py-2 mb-6"
              style={{
                color: "#4ADE80",
                border: "1px solid rgba(34,197,94,0.3)",
                background: "rgba(34,197,94,0.1)",
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              }}
            >
              <Terminal size={13} /> Ready to Begin?
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6" style={{ color: "#F8FAFC" }}>
              Your career story
              <span className="block" style={{ color: "#22C55E" }}>
                starts right here.
              </span>
            </h2>
            <p className="text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "rgba(226,232,240,0.6)" }}>
              Join thousands of students who took the leap. Apply for a
              Thinklyedu internship today — it&apos;s free, it&apos;s real,
              and it could change everything.
            </p>
            <a
              href="#"
              className="inline-block font-black text-lg px-10 py-4 rounded-full transition-colors"
              style={{
                background: "#22C55E",
                color: "#08150C",
                boxShadow: "0 12px 40px rgba(34,197,94,0.3)",
              }}
              onClick={(e) => {
                e.preventDefault();
                openApplyModal();
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#16a34a")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#22C55E")}
            >
              Apply for Internship →
            </a>
            <p
              className="text-sm mt-6"
              style={{ color: "rgba(226,232,240,0.3)", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
            >
              Questions? Write to us at supportthinkly.co@gmail.com · +91 98185 09083
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
