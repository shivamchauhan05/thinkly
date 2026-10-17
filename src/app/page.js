"use client";
import { useEffect, useRef, useState } from "react";
import TechBackground from "@/components/TechBackground";
import { useApplyModal } from "@/components/ApplyModal";
import Image from "next/image";
import Link from "next/link";
import { POSTS } from "@/lib/blog-data";
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
  Bot,
  Pill,
  Laptop,
  GraduationCap,
  Rocket,
  Send,
} from "lucide-react";

// ── CONFIG: apni details yahan badlo ───────────────────────────────────────────
const CONTACT = {
  email: "supportthinkly.co@gmail.com",
  phoneDisplay: "+91 98185 09083",
  whatsapp: "919818509083", // country code + number, bina + ke
};

// "Our Work" section ke links: apni live websites ke URL yahan daalo
const OWN_SITES = [
  {
    icon: Pill,
    name: "MedShop Australia",
    tag: "Online pharmacy",
    desc: "A live online pharmacy serving real customers with product pages, easy ordering and fast enquiries.",
    href: "https://medshopaustralia.com/",
  },
  {
    icon: Pill,
    name: "My Meds Shop Australia",
    tag: "Online pharmacy",
    desc: "A second pharmacy store where we test and improve what turns visitors into repeat customers.",
    href: "https://mymedsshopaustralia.com/",
  },
  {
    icon: Laptop,
    name: "LaptechPro",
    tag: "Tech store",
    desc: "A laptop sales and service platform built to bring in real enquiries and online orders.",
    href: "https://laptechpro.in",
  },
  {
    icon: GraduationCap,
    name: "MSGMIC",
    tag: "Education",
    desc: "A school website that shares information, builds trust and connects with students and parents.",
    href: "https://msgmic.in",
  },
];

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
      <span style={{ opacity: 0.6 }}>{"//"}</span> {children}
    </span>
  );
}

// ── Shared section heading ─────────────────────────────────────────────────────
function SectionHead({ tag, before, green, after = "", desc, mb = 64 }) {
  return (
    <Reveal>
      <div
        className="section-head-mb"
        style={{ textAlign: "center", marginBottom: mb }}
      >
        <SectionTag>{tag}</SectionTag>
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
          {before} <span style={{ color: "#22C55E" }}>{green}</span>
          {after}
        </h2>
        {desc && (
          <p
            style={{
              color: "#94A3B8",
              fontSize: 16,
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            {desc}
          </p>
        )}
      </div>
    </Reveal>
  );
}

// ── Shared card hover handlers ─────────────────────────────────────────────────
const cardHover = {
  onMouseOver: (e) => {
    e.currentTarget.style.borderColor = "rgba(34,197,94,0.5)";
    e.currentTarget.style.background = "rgba(34,197,94,0.05)";
    e.currentTarget.style.boxShadow = "0 8px 32px rgba(34,197,94,0.12)";
    e.currentTarget.style.transform = "translateY(-4px)";
  },
  onMouseOut: (e) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.transform = "translateY(0)";
  },
};

const cardBase = {
  background: "rgba(255,255,255,0.03)",
  border: "1.5px solid rgba(255,255,255,0.08)",
  borderRadius: 20,
  padding: 28,
  transition: "all 0.3s",
};

function IconBox({ icon: Icon }) {
  return (
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
      <Icon size={22} color="#4ADE80" strokeWidth={1.8} />
    </div>
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
                {"> status: open_for_projects_&_interns"}
                <span style={{ animation: "blink 1s step-end infinite" }}>
                  _
                </span>
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(38px,4.6vw,56px)",
                fontWeight: 900,
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                color: "#F8FAFC",
                marginBottom: 8,
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.35s forwards",
              }}
            >
              We Build Digital Products.
              <span
                style={{
                  display: "block",
                  color: "#22C55E",
                  position: "relative",
                }}
              >
                {"<We Train Builders />"}
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
                maxWidth: 500,
                margin: "24px 0 36px",
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.5s forwards",
              }}
            >
              Thinklyedu is a team of 10 that builds websites, mobile apps and
              AI automation for businesses. We also run live-project internships
              where students learn by doing real work.
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
                href="#contact"
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
                Start a Project
              </a>
              <a
                href="#"
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

            {/* Trust bar */}
            <div
              className="rx-nowrap"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginTop: 48,
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.8s forwards",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22C55E",
                  display: "inline-block",
                  animation: "pulse 2s infinite",
                  flexShrink: 0,
                }}
              />
              <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>
                <strong style={{ color: "#F1F5F9" }}>
                  4 live websites run by our own team.
                </strong>{" "}
                Real traffic, real leads, real results.
              </p>
            </div>
          </div>

          {/* Right — code visual */}
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
            <div className="relative w-full max-w-[430px] aspect-square mx-auto">
              <div className="absolute inset-0 z-0 bg-green-400/15 blur-3xl scale-110 rounded-full" />

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
                  <div style={{ color: "#64748B" }}>{"// thinklyedu.js"}</div>
                  <div style={{ color: "#E2E8F0" }}>
                    <span style={{ color: "#818CF8" }}>const</span> team = {"{"}
                  </div>
                  <div style={{ paddingLeft: 16, color: "#E2E8F0" }}>
                    builds: [
                    <span style={{ color: "#FBBF24" }}>&quot;web&quot;</span>,{" "}
                    <span style={{ color: "#FBBF24" }}>&quot;apps&quot;</span>,{" "}
                    <span style={{ color: "#FBBF24" }}>&quot;AI&quot;</span>],
                  </div>
                  <div style={{ paddingLeft: 16, color: "#E2E8F0" }}>
                    interns:{" "}
                    <span style={{ color: "#FBBF24" }}>
                      &quot;live projects&quot;
                    </span>
                    ,
                  </div>
                  <div style={{ paddingLeft: 16, color: "#E2E8F0" }}>
                    size: <span style={{ color: "#FBBF24" }}>10</span>,
                  </div>
                  <div style={{ color: "#E2E8F0" }}>{"};"}</div>
                  <div style={{ marginTop: 12, color: "#E2E8F0" }}>
                    <span style={{ color: "#818CF8" }}>function</span>{" "}
                    <span style={{ color: "#22C55E" }}>startWithUs</span>
                    (you) {"{"}
                  </div>
                  <div style={{ paddingLeft: 16, color: "#E2E8F0" }}>
                    <span style={{ color: "#818CF8" }}>return</span>{" "}
                    <span style={{ color: "#FBBF24" }}>
                      &quot;let&apos;s build&quot;
                    </span>
                    ;
                  </div>
                  <div style={{ color: "#E2E8F0" }}>
                    {"}"}
                    <span style={{ animation: "blink 1s step-end infinite" }}>
                      _
                    </span>
                  </div>
                </div>
              </div>

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

// ── Stats bar (sirf sachche numbers) ───────────────────────────────────────────
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
          { value: 10, suffix: "", label: "Team Members" },
          { value: 4, suffix: "", label: "Websites We Run Ourselves" },
          { value: 3, suffix: "", label: "Core Services" },
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

// ── Services (clients) ─────────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: Globe,
      title: "Websites",
      desc: "Fast, mobile-friendly websites for businesses, online stores and lead generation. Built to load quickly and turn visitors into customers.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      desc: "Simple and reliable mobile apps for your business, designed for real users and ready to grow with you.",
    },
    {
      icon: Bot,
      title: "AI Automation",
      desc: "Chatbots, lead follow-ups and workflow automation that handle repetitive work, so you save hours every week.",
    },
  ];

  return (
    <section id="services" className="section-py" style={{ padding: "96px 24px" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHead
          tag="what_we_build"
          before="From Idea to"
          green="Launch"
          desc="We take care of design, development and automation, so you can focus on running your business."
        />

        <div
          className="rx-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 24,
          }}
        >
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div
                style={{ ...cardBase, cursor: "default", height: "100%", boxSizing: "border-box" }}
                {...cardHover}
              >
                <div style={{ marginBottom: 16 }}>
                  <IconBox icon={s.icon} />
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#F1F5F9",
                    marginBottom: 10,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "#94A3B8",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#4ADE80",
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Discuss your project <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Our own websites (proof of work) ───────────────────────────────────────────
function OurWork() {
  return (
    <section
      id="work"
      className="section-py"
      style={{
        padding: "96px 24px",
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHead
          tag="our_work"
          before="We Don't Just Build for Others."
          green="We Run Our Own."
          desc="Live websites in different industries, with real visitors and real leads. We know what works in real business."
        />

        <div
          className="rx-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 20,
          }}
        >
          {OWN_SITES.map((w, i) => (
            <Reveal key={w.name} delay={i * 70}>
              <a
                href={w.href}
                target={w.href === "#" ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{
                  ...cardBase,
                  display: "block",
                  textDecoration: "none",
                  height: "100%",
                  boxSizing: "border-box",
                }}
                {...cardHover}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <IconBox icon={w.icon} />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                      fontSize: 11.5,
                      color: "#4ADE80",
                      border: "1px solid rgba(34,197,94,0.3)",
                      background: "rgba(34,197,94,0.06)",
                      borderRadius: 999,
                      padding: "5px 14px",
                    }}
                  >
                    {w.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#F1F5F9",
                    marginBottom: 8,
                  }}
                >
                  {w.name}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "#94A3B8",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {w.desc}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Why choose us (clients) ────────────────────────────────────────────────────
function WhyUs() {
  const points = [
    {
      icon: Target,
      title: "Real Experience",
      desc: "We know what it takes to get traffic, leads and sales because we do it every day on our own websites.",
    },
    {
      icon: Users,
      title: "One Team, Everything",
      desc: "Design, development and AI automation under one roof. No juggling many different vendors.",
    },
    {
      icon: Handshake,
      title: "Clear Communication",
      desc: "Simple, honest updates. No confusing tech talk and no surprises.",
    },
    {
      icon: Award,
      title: "Fresh Ideas, Careful Work",
      desc: "A young, energetic team that handles every project with care and a focus on quality.",
    },
  ];

  return (
    <section id="why" className="section-py" style={{ padding: "96px 24px" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHead
          tag="why_thinklyedu"
          before="Why Businesses"
          green="Choose Us"
        />

        <div
          className="rx-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 20,
          }}
        >
          {points.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div
                style={{ ...cardBase, cursor: "default", height: "100%", boxSizing: "border-box" }}
                {...cardHover}
              >
                <div style={{ marginBottom: 16 }}>
                  <IconBox icon={f.icon} />
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

// ── Timeline (reused for client process + internship steps) ────────────────────
function Timeline({ steps, cols }) {
  return (
    <div style={{ position: "relative" }}>
      <div
        className="rx-hide"
        style={{
          position: "absolute",
          top: 40,
          left: `calc(${50 / cols}% + 20px)`,
          right: `calc(${50 / cols}% + 20px)`,
          height: 2,
          background: "linear-gradient(90deg,#22C55E,rgba(34,197,94,0.15))",
          zIndex: 0,
        }}
      />
      <div
        className="rx-stack"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols},1fr)`,
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
  );
}

// ── Client process ─────────────────────────────────────────────────────────────
function ClientProcess() {
  const steps = [
    {
      num: "01",
      title: "Share Your Idea",
      desc: "Tell us what you want to build. A short conversation is enough to get started.",
      icon: FileText,
    },
    {
      num: "02",
      title: "Plan & Quote",
      desc: "We prepare a clear plan with timeline and cost, so you know exactly what to expect.",
      icon: Search,
    },
    {
      num: "03",
      title: "Build & Review",
      desc: "We build in stages and show you progress along the way, so you stay in control.",
      icon: Code2,
    },
    {
      num: "04",
      title: "Launch & Support",
      desc: "We launch your project and stay with you after it goes live.",
      icon: Rocket,
    },
  ];

  return (
    <section
      id="process"
      className="section-py"
      style={{
        padding: "96px 24px",
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHead
          tag="how_we_work"
          before="From Idea to"
          green="Live"
          desc="Four simple steps. Clear at every stage."
          mb={72}
        />
        <Timeline steps={steps} cols={4} />
      </div>
    </section>
  );
}

// ── Internship intro + benefits ────────────────────────────────────────────────
function InternshipIntro() {
  const { open: openApplyModal } = useApplyModal();
  const benefits = [
    {
      icon: Target,
      title: "Live Projects",
      desc: "Work on real websites and real tasks, not just practice assignments.",
    },
    {
      icon: Users,
      title: "Training & Guidance",
      desc: "Learn from our team and get regular feedback on your work.",
    },
    {
      icon: Award,
      title: "Verified Certificate",
      desc: "Receive a certificate after successfully completing your tasks.",
    },
    {
      icon: Briefcase,
      title: "A Portfolio to Show",
      desc: "Build real work you can proudly share with recruiters.",
    },
    {
      icon: Lock,
      title: "No Fees",
      desc: "The internship is free for students. No hidden charges.",
    },
    {
      icon: Zap,
      title: "No Experience Needed",
      desc: "You only need the will to learn. We help you with the rest.",
    },
  ];

  return (
    <section id="internship" className="section-py" style={{ padding: "96px 24px 40px" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHead
          tag="internships"
          before="Learn by Doing."
          green="Intern at Thinklyedu."
          desc="If you are a student or a fresh graduate, you do not need to wait for experience to start your career. You gain it by working on live projects with our team."
        />

        <div
          className="rx-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 24,
          }}
        >
          {benefits.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div
                style={{ ...cardBase, cursor: "default", height: "100%", boxSizing: "border-box" }}
                {...cardHover}
              >
                <div style={{ marginBottom: 16 }}>
                  <IconBox icon={f.icon} />
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

        <Reveal delay={200}>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openApplyModal();
              }}
              style={{
                display: "inline-block",
                background: "#22C55E",
                color: "#08150C",
                fontWeight: 700,
                fontSize: 15,
                padding: "14px 32px",
                borderRadius: 10,
                textDecoration: "none",
                boxShadow: "0 8px 28px rgba(34,197,94,0.28)",
              }}
            >
              Apply for Internship
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Domains ────────────────────────────────────────────────────────────────────
function Domains() {
  const domains = [
    { icon: Megaphone, name: "Marketing", slug: "marketing", desc: "Social media, SEO, campaigns" },
    { icon: Palette, name: "Design", slug: "design", desc: "UI/UX, graphics, branding" },
    { icon: Code2, name: "Technology", slug: "technology", desc: "Web dev, apps, coding" },
    { icon: PenTool, name: "Content Writing", slug: "content-writing", desc: "Blogs, copywriting, scripts" },
    { icon: Camera, name: "Photography & Video", slug: "photography-video", desc: "Reels, editing, shoots" },
    { icon: Smartphone, name: "Social Media", slug: "social-media", desc: "Instagram, YouTube, LinkedIn" },
  ];

  return (
    <section id="domains" className="section-py" style={{ padding: "56px 24px 96px" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHead
          tag="domains"
          before="Pick Your"
          green="Domain"
          desc="Six industry-relevant tracks, each with real project work and guidance from our team."
          mb={48}
        />

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
                  ...cardBase,
                  display: "block",
                  padding: 26,
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
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <IconBox icon={d.icon} />
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

// ── Tech stack / skills strip ──────────────────────────────────────────────────
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

// ── Internship steps ───────────────────────────────────────────────────────────
function InternshipSteps() {
  const steps = [
    {
      num: "01",
      title: "Apply Online",
      desc: "Fill out a simple form with your interests, skills and availability. It takes only a few minutes.",
      icon: FileText,
    },
    {
      num: "02",
      title: "Get Selected",
      desc: "Our team reviews your profile and gets back to you.",
      icon: Search,
    },
    {
      num: "03",
      title: "Meet Your Mentor",
      desc: "Meet the team, align on your goals and plan your first project.",
      icon: Handshake,
    },
    {
      num: "04",
      title: "Do Real Work",
      desc: "Work on live projects, get regular feedback and build a portfolio.",
      icon: Briefcase,
    },
    {
      num: "05",
      title: "Get Certified",
      desc: "Complete your tasks and receive a certificate you can share on LinkedIn and your resume.",
      icon: Trophy,
    },
  ];

  return (
    <section
      id="how"
      className="section-py"
      style={{ padding: "96px 24px" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHead
          tag="internship_process"
          before="From Apply to"
          green="Certified"
          desc="Five simple steps between you and real project experience."
          mb={72}
        />
        <Timeline steps={steps} cols={5} />
      </div>
    </section>
  );
}

// ── Blog preview ───────────────────────────────────────────────────────────────
function BlogPreview() {
  const posts = POSTS.slice(0, 3);

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
            <Link
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
            </Link>
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
            <Reveal key={p.slug} delay={i * 80}>
              <a
                href={`/blog/${p.slug}`}
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

// ── FAQ (businesses + interns) ─────────────────────────────────────────────────
function FAQ() {
  const [tab, setTab] = useState("business");
  const [openIndex, setOpenIndex] = useState(null);

  const data = {
    business: [
      {
        q: "How long does a website take?",
        a: "It depends on the project. Most websites take 2 to 4 weeks. We share a clear timeline in your quote before we start.",
      },
      {
        q: "Do you build mobile apps?",
        a: "Yes. We build mobile apps along with websites and AI automation.",
      },
      {
        q: "What can AI automation do for my business?",
        a: "It can handle repetitive work such as answering common customer questions with a chatbot, following up on leads and moving data between your tools.",
      },
      {
        q: "Do you support projects after launch?",
        a: "Yes. We stay with you after launch for updates and fixes.",
      },
    ],
    intern: [
      {
        q: "Is the internship free?",
        a: "Yes. There is no fee for students and no hidden charges.",
      },
      {
        q: "Is the internship remote?",
        a: "Most tracks are remote, and some domains also offer on-site options. Our team will confirm what fits your domain.",
      },
      {
        q: "How do I get a certificate?",
        a: "You will receive a verified certificate after you successfully complete all your internship tasks and projects.",
      },
      {
        q: "How long is the internship?",
        a: "Typically 4-6 weeks depending on the domain. You work at your own pace within the timeline, guided by our team.",
      },
      {
        q: "What are the eligibility criteria?",
        a: "Anyone with a passion to learn and basic knowledge of their chosen domain can apply. Students and fresh graduates are encouraged to apply.",
      },
    ],
  };

  const faqs = data[tab];

  return (
    <section id="faq" className="section-py" style={{ padding: "96px 24px" }}>
      <div className="max-w-3xl mx-auto">
        <SectionHead
          tag="faq"
          before="Frequently Asked"
          green="Questions"
          desc="Got questions? We've got answers."
          mb={32}
        />

        <Reveal>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              marginBottom: 28,
            }}
          >
            {[
              { id: "business", label: "For Businesses" },
              { id: "intern", label: "For Interns" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTab(t.id);
                  setOpenIndex(null);
                }}
                style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  borderRadius: 999,
                  padding: "9px 22px",
                  border: `1.5px solid ${tab === t.id ? "#22C55E" : "rgba(255,255,255,0.12)"}`,
                  background: tab === t.id ? "#22C55E" : "transparent",
                  color: tab === t.id ? "#08150C" : "#94A3B8",
                  transition: "all 0.2s",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div
                key={tab + faq.q}
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
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#F1F5F9" }}>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── CTA + Contact form ─────────────────────────────────────────────────────────
function Contact() {
  const { open: openApplyModal } = useApplyModal();

  // Backend ki zaroorat nahi: form WhatsApp par ready message khol deta hai
  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg =
      `Hi Thinklyedu! I am a ${f.get("type")}.\n` +
      `Name: ${f.get("name")}\n` +
      `Email/Phone: ${f.get("contact")}\n` +
      `Message: ${f.get("message")}`;
    window.open(
      `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  const field = {
    width: "100%",
    boxSizing: "border-box",
    background: "rgba(255,255,255,0.04)",
    border: "1.5px solid rgba(255,255,255,0.12)",
    borderRadius: 10,
    padding: "13px 16px",
    color: "#F1F5F9",
    fontSize: 14,
    fontFamily: "inherit",
    outline: "none",
  };

  return (
    <section
      id="contact"
      className="section-py-lg"
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
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
            <Terminal size={13} /> Let&apos;s talk
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
            Ready to build something?
            <span style={{ display: "block", color: "#22C55E" }}>
              Or ready to learn?
            </span>
          </h2>
          <p
            style={{
              color: "rgba(226,232,240,0.6)",
              fontSize: 17,
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "0 auto 36px",
            }}
          >
            Have a business idea? Tell us about it. Are you a student? Apply for
            an internship.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              ...cardBase,
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              marginBottom: 28,
            }}
          >
            <input name="name" required placeholder="Your name" style={field} />
            <input
              name="contact"
              required
              placeholder="Email or phone number"
              style={field}
            />
            <select name="type" defaultValue="business owner" style={field}>
              <option value="business owner" style={{ color: "#000" }}>
                I am a business owner
              </option>
              <option value="student" style={{ color: "#000" }}>
                I am a student
              </option>
            </select>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell us about your project or what you want to learn"
              style={{ ...field, resize: "vertical" }}
            />
            <button
              type="submit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "#22C55E",
                color: "#08150C",
                fontWeight: 800,
                fontSize: 15,
                padding: "14px 32px",
                borderRadius: 10,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 28px rgba(34,197,94,0.28)",
              }}
            >
              <Send size={16} /> Send on WhatsApp
            </button>
          </form>

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
              onClick={(e) => {
                e.preventDefault();
                openApplyModal();
              }}
              style={{
                border: "1.5px solid rgba(255,255,255,0.2)",
                color: "#F1F5F9",
                fontWeight: 600,
                fontSize: 15,
                padding: "14px 34px",
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
              Apply for Internship
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
            {CONTACT.email} &nbsp;·&nbsp; {CONTACT.phoneDisplay}
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
        <Services />
        <OurWork />
        <WhyUs />
        <ClientProcess />
        <InternshipIntro />
        <Domains />
        <TechStack />
        <InternshipSteps />
        <BlogPreview />
        <FAQ />
        <Contact />
      </div>
    </main>
  );
}