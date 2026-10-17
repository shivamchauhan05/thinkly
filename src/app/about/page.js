"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
  Globe,
  Smartphone,
  Bot,
  GraduationCap,
  Megaphone,
} from "lucide-react";

// ── Our own live products ────────────────────────────────────────────────────
const OWN_WORK = [
  {
    name: "MedShop Australia",
    tag: "Online pharmacy",
    desc: "A live pharmacy store serving real customers in Australia.",
    url: "https://medshopaustralia.com/",
    displayUrl: "medshopaustralia.com",
  },
  {
    name: "My Meds Shop Australia",
    tag: "Online pharmacy",
    desc: "A second pharmacy brand we run and keep improving.",
    url: "https://mymedsshopaustralia.com/",
    displayUrl: "mymedsshopaustralia.com",
  },
  {
    name: "LaptechPro",
    tag: "Tech store",
    desc: "A laptop sales and service platform built to bring real enquiries.",
    url: "https://laptechpro.in",
    displayUrl: "laptechpro.in",
  },
  {
    name: "MSGMIC",
    tag: "Education",
    desc: "A school website that connects students, parents and staff.",
    url: "https://msgmic.in",
    displayUrl: "msgmic.in",
  },
];

// ── Services we offer to businesses ──────────────────────────────────────────
const SERVICES = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Business websites, landing pages and online stores that load fast and convert.",
    href: "/services/website",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Mobile apps for Android and iOS, built around a real business need.",
    href: "/services/app",
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Chatbots and automated workflows that save hours of manual work.",
    href: "/services/ai-automation",
  },
  {
    icon: GraduationCap,
    title: "EdTech Solutions",
    desc: "Learning platforms and school websites that make education easy to run.",
    href: "/services/edtech",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "SEO, social media and paid ads that bring in real customers.",
    href: "/services/digital-marketing",
  },
];

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
  { deg: 0, label: "Client Projects", icon: Rocket },
  { deg: 60, label: "Mentorship", icon: Users },
  { deg: 120, label: "Certified", icon: CheckCircle2 },
  { deg: 180, label: "Own Products", icon: Globe },
  { deg: 240, label: "Fast Delivery", icon: Zap },
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
      <span style={{ opacity: 0.6 }}>{"//"}</span> {children}
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
              We Build Products.
              <span className="block relative" style={{ color: "#22C55E" }}>
                We Build Careers.
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
              Thinklyedu is a technology company. We design and build websites,
              mobile apps, AI automation and digital marketing for real
              businesses — and we train the next generation of talent through
              hands-on internships.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="font-bold px-8 py-3.5 rounded-full transition-colors"
                style={{
                  background: "#22C55E",
                  color: "#08150C",
                  boxShadow: "0 8px 28px rgba(34,197,94,0.28)",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "#16a34a")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#22C55E")}
              >
                Start a Project →
              </Link>
              <a
                href="#"
                className="font-semibold px-8 py-3.5 rounded-full transition-colors"
                style={{ border: "1.5px solid rgba(255,255,255,0.16)", color: "#E2E8F0" }}
                onClick={(e) => {
                  e.preventDefault();
                  openApplyModal();
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
                Apply for Internship
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
              { value: 500, suffix: "+", label: "Students Mentored" },
              { value: 10, suffix: "+", label: "Live Products" },
              { value: 5, suffix: "", label: "Digital Services" },
              { value: 2, suffix: "", label: "Countries" },
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
                <Target size={13} strokeWidth={2.2} /> Projects that ship
              </div>
            </div>

            {/* Text */}
            <div>
              <SectionTag>our_mission</SectionTag>
              <h2 className="text-4xl font-extrabold mt-3 mb-6 leading-tight" style={{ color: "#F8FAFC" }}>
                We Build.
                <span style={{ color: "#22C55E" }}> And We Teach.</span>
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "#94A3B8" }}>
                Thinklyedu does two things well. First, we build digital products
                for businesses — from websites and apps to AI automation and
                marketing. Every project is real, shipped, and used by real
                customers, including our own brands in India and Australia.
                Second, we use that same work to train students, so they learn on
                live projects instead of simulations.
              </p>
              <ul className="space-y-3">
                {[
                  "End-to-end digital services for businesses",
                  "Real, shipped products — including our own brands",
                  "Interns learn on live client work, not mock briefs",
                  "Verified certificates and mentorship for students",
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

        {/* ── WHAT WE DO ── */}
        <section
          id="services"
          className="py-24 px-6"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <SectionTag>what_we_do</SectionTag>
              <h2 className="text-4xl font-extrabold mt-3 leading-tight" style={{ color: "#F8FAFC" }}>
                Everything Digital, <span style={{ color: "#22C55E" }}>Under One Roof.</span>
              </h2>
              <p className="mt-4 max-w-xl mx-auto" style={{ color: "#94A3B8" }}>
                One team for your website, app, automation and marketing. No
                juggling different vendors.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group rounded-2xl p-7 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1.5px solid rgba(255,255,255,0.08)",
                    textDecoration: "none",
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
                    <s.icon size={22} color="#4ADE80" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#F1F5F9" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                    {s.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR OWN PRODUCTS ── */}
        <section id="work" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <SectionTag>our_work</SectionTag>
              <h2 className="text-4xl font-extrabold mt-3 leading-tight" style={{ color: "#F8FAFC" }}>
                Products We <span style={{ color: "#22C55E" }}>Run Ourselves.</span>
              </h2>
              <p className="mt-4 max-w-xl mx-auto" style={{ color: "#94A3B8" }}>
                We don&apos;t just build for clients — we run our own live
                products across different industries and countries.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {OWN_WORK.map((w) => (
                <a
                  key={w.name}
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl p-6 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1.5px solid rgba(255,255,255,0.08)",
                    textDecoration: "none",
                    display: "block",
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
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider"
                    style={{ color: "#22C55E" }}
                  >
                    {w.tag}
                  </span>
                  <h3 className="text-lg font-bold mt-2 mb-2" style={{ color: "#F1F5F9" }}>
                    {w.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#94A3B8" }}>
                    {w.desc}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold"
                    style={{
                      color: "#4ADE80",
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    }}
                  >
                    <Globe size={13} /> {w.displayUrl}
                  </span>
                </a>
              ))}
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
                A Company That Builds
                <span style={{ color: "#22C55E" }}> and Grows Talent.</span>
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "#94A3B8" }}>
                We are building a technology company that ships real products and
                creates real opportunities. Our own platforms — an online pharmacy
                in Australia, a laptop store, a school website — show we can build
                for any industry. We aim to serve more businesses and mentor more
                students across India every year.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Rocket, label: "Product Excellence" },
                  { icon: Globe, label: "Global Clients" },
                  { icon: Users, label: "Talent Pipeline" },
                  { icon: Star, label: "Innovation" },
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
                  India + AU
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(226,232,240,0.4)" }}>
                    Where We Work
                  </div>
                  <div className="font-bold text-2xl leading-snug" style={{ color: "#F1F5F9" }}>
                    Building for Real Businesses &amp; Real Students
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
                Built Different. <span style={{ color: "#22C55E" }}>For Everyone.</span>
              </h2>
              <p className="mt-4 max-w-xl mx-auto" style={{ color: "#94A3B8" }}>
                Whether you want to hire us or learn with us, here&apos;s what
                makes Thinklyedu the right choice.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Rocket,
                  title: "Real Products, Not Mock Work",
                  desc: "We build websites, apps and automation for live businesses — and for our own brands in India and Australia. Nothing here is a simulation.",
                  highlight: "Shipped work",
                },
                {
                  icon: Users,
                  title: "Mentor-Driven Learning",
                  desc: "Every intern gets a dedicated mentor who reviews real deliverables every week and helps you improve with honest feedback.",
                  highlight: "1-on-1 mentorship",
                },
                {
                  icon: Star,
                  title: "Verified Certifications",
                  desc: "Our certificates prove what you actually built — not just where you sat. Recruiters can see real, skill-linked output.",
                  highlight: "Skill-linked certs",
                },
                {
                  icon: Globe,
                  title: "Full-Service Digital Team",
                  desc: "Website, App, AI Automation, EdTech and Digital Marketing — everything under one roof, with one team that stays with you.",
                  highlight: "5 core services",
                },
                {
                  icon: CheckCircle2,
                  title: "Learn Without Paying",
                  desc: "Students join real projects without any fee. You bring the effort, we bring the work, the tools and the guidance.",
                  highlight: "No fee for students",
                },
                {
                  icon: Briefcase,
                  title: "A Growing Community",
                  desc: "A network of students, builders and clients who share opportunities, referrals and advice — everyone grows together.",
                  highlight: "500+ community",
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

        {/* ── DUAL CTA ── */}
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
              Let&apos;s Build Something.
              <span className="block" style={{ color: "#22C55E" }}>
                Or Launch Your Career.
              </span>
            </h2>
            <p className="text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "rgba(226,232,240,0.6)" }}>
              Need a website, app or automation for your business? Or looking for
              real internship experience? We do both — talk to us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block font-black text-lg px-10 py-4 rounded-full transition-colors"
                style={{
                  background: "#22C55E",
                  color: "#08150C",
                  boxShadow: "0 12px 40px rgba(34,197,94,0.3)",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "#16a34a")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#22C55E")}
              >
                Start a Project →
              </Link>
              <a
                href="#"
                className="inline-block font-bold text-lg px-10 py-4 rounded-full transition-colors"
                style={{ border: "1.5px solid rgba(255,255,255,0.16)", color: "#E2E8F0" }}
                onClick={(e) => {
                  e.preventDefault();
                  openApplyModal();
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
                Apply for Internship →
              </a>
            </div>
            <p
              className="text-sm mt-6"
              style={{ color: "rgba(226,232,240,0.3)", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
            >
              Questions? Write to us at supportthinkly.co@gmail.com · +91 98185 09083
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
