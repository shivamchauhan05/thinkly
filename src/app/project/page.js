// ── SEO Metadata (Next.js App Router) ────────────────────────────────────────
"use client";
import Footer from '@/components/Footer'
import TechBackground from '@/components/TechBackground'

import { useApplyModal } from '@/components/ApplyModal'
// export const metadata = {
//   title: "Live Projects by Interns | Thinklyedu — Real Work, Real Impact",
//   description:
//     "Thinklyedu interns have built and launched real websites for real clients — including msgmic.in, laptechpro.in and pharmacy websites. See the live projects our students delivered.",
//   keywords: [
//     "internship live projects India",
//     "student built websites",
//     "real internship projects",
//     "Thinklyedu projects",
//     "intern project portfolio",
//     "web development internship projects",
//     "real work internship India",
//     "student developer portfolio",
//     "free internship real projects",
//     "internship with live project experience",
//   ].join(", "),
//   openGraph: {
//     title: "Real Projects Built by Thinklyedu Interns",
//     description:
//       "Our interns don't do fake tasks. They build and launch real websites for real clients. See their work live.",
//     type: "website",
//     url: "https://thinklyedu.com/project",
//     siteName: "Thinklyedu",
//   },
//   alternates: { canonical: "https://thinklyedu.com/project" },
// };

// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";
import {
  Mic,
  Laptop,
  Pill,
  Stethoscope,
  Palette,
  Code2,
  Zap,
  Smartphone,
  Search,
  Map,
  MessageCircle,
  BarChart3,
  Brain,
  Hammer,
  Rocket,
  Lock,
  Building2,
  ExternalLink,
} from "lucide-react";

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

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

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
          const progress = Math.min((Date.now() - start) / duration, 1);
          setCount(Math.round((1 - Math.pow(1 - progress, 3)) * target));
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

// ── Project Data ──────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    name: "MSGMIC",
    url: "https://msgmic.in",
    displayUrl: "msgmic.in",
    category: "Tech / Services",
    categoryColor: "#3B82F6",
    icon: Mic,
    gradient: "linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 100%)",
    description:
      "A professional services website built end-to-end by Thinklyedu interns. Includes service listings, contact forms, and a fully responsive layout optimized for mobile users.",
    tags: ["Web Design", "HTML/CSS", "Responsive", "SEO"],
    interns: 2,
    duration: "6 weeks",
    highlight: "Live & fully functional",
  },
  {
    id: 2,
    name: "LaptechPro",
    url: "https://laptechpro.in",
    displayUrl: "laptechpro.in",
    category: "E-commerce / Tech",
    categoryColor: "#F59E0B",
    icon: Laptop,
    gradient: "linear-gradient(135deg,#78350f 0%,#d97706 100%)",
    description:
      "A laptop services and sales platform designed and developed by interns. Features product listings, service booking, and a clean UI built to convert visitors into customers.",
    tags: ["E-commerce", "UI/UX", "JavaScript", "Lead Gen"],
    interns: 3,
    duration: "8 weeks",
    highlight: "500+ monthly visitors",
  },
  {
    id: 3,
    name: "Pharmacy Website 1",
    url: "#",
    displayUrl: "pharmacy — live",
    category: "Healthcare",
    categoryColor: "#22C55E",
    icon: Pill,
    gradient: "linear-gradient(135deg,#14532d 0%,#16a34a 100%)",
    description:
      "A local pharmacy's digital presence — built by our interns from scratch. Includes medicine categories, store timings, contact info, and a WhatsApp order button for quick customer action.",
    tags: ["Healthcare", "Local SEO", "WhatsApp CTA", "Mobile-first"],
    interns: 1,
    duration: "4 weeks",
    highlight: "WhatsApp orders enabled",
  },
  {
    id: 4,
    name: "Pharmacy Website 2",
    url: "#",
    displayUrl: "pharmacy — live",
    category: "Healthcare",
    categoryColor: "#22C55E",
    icon: Building2,
    gradient: "linear-gradient(135deg,#134e4a 0%,#0d9488 100%)",
    description:
      "Second pharmacy project — a clean, trust-focused design that helped the owner move from zero online presence to a professional digital storefront with Google Maps integration.",
    tags: ["Healthcare", "Google Maps", "Trust Design", "SEO"],
    interns: 2,
    duration: "5 weeks",
    highlight: "Google Maps integrated",
  },
  {
    id: 5,
    name: "Pharmacy Website 3",
    url: "#",
    displayUrl: "pharmacy — live",
    category: "Healthcare",
    categoryColor: "#22C55E",
    icon: Stethoscope,
    gradient: "linear-gradient(135deg,#1e1b4b 0%,#6d28d9 100%)",
    description:
      "Third pharmacy client — this one focused on a medicine delivery landing page. Interns designed a conversion-optimized page with product highlights and a call-to-action funnel.",
    tags: ["Healthcare", "Landing Page", "Conversion CRO", "Delivery"],
    interns: 2,
    duration: "4 weeks",
    highlight: "Delivery CTA funnel built",
  },
];

const SKILLS_USED = [
  { icon: Palette, label: "UI/UX Design" },
  { icon: Code2, label: "HTML & CSS" },
  { icon: Zap, label: "JavaScript" },
  { icon: Smartphone, label: "Responsive Design" },
  { icon: Search, label: "On-page SEO" },
  { icon: Map, label: "Google Maps API" },
  { icon: MessageCircle, label: "WhatsApp Integration" },
  { icon: BarChart3, label: "Analytics Setup" },
];

const PROCESS = [
  { icon: Brain, step: "01", title: "Client Brief", desc: "Interns meet the real client, understand their business, audience, and goals. No simulated briefs." },
  { icon: Palette, step: "02", title: "Design & Prototype", desc: "Wireframes and mockups are built and approved by the client before a single line of code is written." },
  { icon: Hammer, step: "03", title: "Build & Test", desc: "Development happens under mentor supervision — responsive, fast, and cross-browser tested." },
  { icon: Rocket, step: "04", title: "Go Live", desc: "Interns deploy the site, hand over credentials, and document everything for the client." },
];

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;

  return (
    <Reveal delay={index * 80}>
      <div
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1.5px solid",
          borderColor: hovered ? "rgba(34,197,94,0.5)" : "rgba(255,255,255,0.08)",
          borderRadius: 22,
          overflow: "hidden",
          transition: "all 0.3s",
          transform: hovered ? "translateY(-5px)" : "translateY(0)",
        }}
      >
        {/* Card header — gradient banner */}
        <div style={{ background: project.gradient, padding: "32px 28px 28px", position: "relative", overflow: "hidden" }}>
          {/* Decorative circles */}
          <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -20, left: "40%", width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
            <div>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 12,
                }}
              >
                <Icon size={22} color="#ffffff" strokeWidth={1.8} />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 900, color: "white", margin: "0 0 4px", letterSpacing: "-0.02em" }}>{project.name}</h3>
              <span style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", color: "white", fontSize: 11, fontWeight: 600, padding: "3px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.2)" }}>
                {project.category}
              </span>
            </div>

            {/* Live badge */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.4)", borderRadius: 999, padding: "6px 14px" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", display: "inline-block", animation: "pulse 2s infinite" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E" }}>LIVE</span>
            </div>
          </div>

          {/* URL */}
          <a href={project.url} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, padding: "7px 14px", textDecoration: "none", transition: "background 0.2s", position: "relative", zIndex: 1 }}
            onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
            onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}>
            <ExternalLink size={12} color="white" strokeWidth={2.5} />
            <span style={{ fontSize: 13, color: "white", fontWeight: 600 }}>{project.displayUrl}</span>
          </a>
        </div>

        {/* Card body */}
        <div style={{ padding: "24px 28px" }}>
          {/* Highlight pill */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 999, padding: "4px 12px", marginBottom: 14 }}>
            <Zap size={12} color="#22C55E" strokeWidth={2} fill="#22C55E" />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#4ADE80" }}>{project.highlight}</span>
          </div>

          <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.75, margin: "0 0 20px" }}>{project.description}</p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
            {project.tags.map((tag) => (
              <span key={tag} style={{ background: "rgba(255,255,255,0.06)", color: "#CBD5E1", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 999 }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Meta row */}
          <div style={{ display: "flex", gap: 20, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <div>
              <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Interns</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#F1F5F9" }}>{project.interns}</div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Duration</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#F1F5F9" }}>{project.duration}</div>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <a href={project.url} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#4ADE80", fontSize: 13, fontWeight: 700, textDecoration: "none", transition: "gap 0.2s" }}
                onMouseOver={e => e.currentTarget.style.gap = "10px"}
                onMouseOut={e => e.currentTarget.style.gap = "6px"}>
                Visit Site →
              </a>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function ProjectPage() {
  const { open: openApplyModal } = useApplyModal();

  return (
    <main
      className="font-sans antialiased"
      style={{ fontFamily: "'Inter', -apple-system, sans-serif", position: "relative", background: "#0a1628", color: "#F1F5F9" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        * { box-sizing: border-box; }
      `}</style>

      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Live Projects Built by Thinklyedu Interns",
        "description": "Real websites and web projects built and launched by Thinklyedu student interns for real clients across India.",
        "itemListElement": PROJECTS.filter(p => p.url !== "#").map((p, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": p.name,
          "url": p.url,
          "description": p.description,
        }))
      })}} />

      <TechBackground />
      <div style={{ position: "relative", zIndex: 1, paddingTop: 68 }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: "72px 24px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ opacity: 0, animation: "fadeUp 0.6s ease 0.1s forwards", marginBottom: 24 }}>
            <span style={{ fontSize: 13, color: "rgba(226,232,240,0.4)" }}>
              <a href="/" style={{ color: "rgba(226,232,240,0.4)", textDecoration: "none" }}>Home</a>
              {" / "}
              <span style={{ color: "#22C55E" }}>Projects</span>
            </span>
          </div>

          <div className="rx-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            {/* Left */}
            <div>
              <div style={{ opacity: 0, animation: "fadeUp 0.6s ease 0.2s forwards", marginBottom: 18 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 999, padding: "6px 16px", fontSize: 12, fontWeight: 700, color: "#4ADE80", fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: "0.05em" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", display: "inline-block", animation: "pulse 2s infinite" }} />
                  5 Live Websites Delivered
                </span>
              </div>

              <h1 style={{ fontSize: "clamp(36px,5vw,60px)", fontWeight: 900, color: "#F8FAFC", lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 20px", opacity: 0, animation: "fadeUp 0.6s ease 0.3s forwards" }}>
                Our Interns Build
                <span style={{ display: "block", color: "#22C55E" }}>Real Websites.</span>
              </h1>

              <p style={{ fontSize: 17, color: "#94A3B8", lineHeight: 1.8, maxWidth: 480, margin: "0 0 36px", opacity: 0, animation: "fadeUp 0.6s ease 0.45s forwards" }}>
                Every project on this page is <strong style={{ color: "#CBD5E1" }}>live on the internet</strong> — built by Thinklyedu interns for real clients. From tech services to local pharmacies, our students deliver work that actually ships.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", opacity: 0, animation: "fadeUp 0.6s ease 0.55s forwards" }}>
                <a href="mailto:supportthinkly.co@gmail.com"
                  style={{ background: "#22C55E", color: "#08150C", fontWeight: 800, fontSize: 15, padding: "14px 32px", borderRadius: 999, textDecoration: "none", boxShadow: "0 8px 28px rgba(34,197,94,0.28)", transition: "all 0.2s" }}
                  onMouseOver={e => { e.currentTarget.style.background = "#16a34a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseOut={e => { e.currentTarget.style.background = "#22C55E"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  Build Your Project Too →
                </a>
                <a href="#projects"
                  style={{ border: "1.5px solid rgba(255,255,255,0.16)", color: "#E2E8F0", fontWeight: 600, fontSize: 15, padding: "14px 24px", borderRadius: 999, textDecoration: "none", transition: "all 0.2s" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "#22C55E"; e.currentTarget.style.color = "#4ADE80"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)"; e.currentTarget.style.color = "#E2E8F0"; }}>
                  See All Projects
                </a>
              </div>
            </div>

            {/* Right — live site preview cards */}
            <div style={{ opacity: 0, animation: "fadeUp 0.6s ease 0.5s forwards", position: "relative" }}>
              {/* Stacked cards visual */}
              {[
                { name: "msgmic.in", color: "#1d4ed8", icon: Mic, top: 0, zIndex: 3 },
                { name: "laptechpro.in", color: "#d97706", icon: Laptop, top: 20, zIndex: 2, marginLeft: 20 },
                { name: "pharmacy websites", color: "#16a34a", icon: Pill, top: 40, zIndex: 1, marginLeft: 40 },
              ].map((card, i) => {
                const CardIcon = card.icon;
                return (
                <div key={card.name} style={{
                  position: i === 0 ? "relative" : "absolute",
                  top: i === 0 ? 0 : card.top,
                  left: card.marginLeft || 0,
                  right: i > 0 ? card.marginLeft || 0 : 0,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 16,
                  padding: "20px 24px",
                  backdropFilter: "blur(12px)",
                  zIndex: card.zIndex,
                  marginBottom: i === 0 ? 60 : 0,
                }}>
                  {/* Fake browser bar */}
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
                    {["#EF4444","#F59E0B","#22C55E"].map((c) => (
                      <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.7 }} />
                    ))}
                    <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 5, background: "rgba(255,255,255,0.08)", borderRadius: 6, padding: "4px 10px", marginLeft: 8 }}>
                      <Lock size={10} color="rgba(226,232,240,0.5)" />
                      <span style={{ fontSize: 11, color: "rgba(226,232,240,0.4)" }}>{card.name}</span>
                    </div>
                  </div>
                  {/* Content preview */}
                  <div style={{ background: card.color, borderRadius: 10, padding: "20px", textAlign: "center" }}>
                    <CardIcon size={26} color="white" strokeWidth={1.8} style={{ margin: "0 auto" }} />
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", fontWeight: 600, marginTop: 6 }}>{card.name}</div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "rgba(34,197,94,0.2)", borderRadius: 999, padding: "3px 10px", marginTop: 8 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E", display: "inline-block" }} />
                      <span style={{ fontSize: 10, color: "#22C55E", fontWeight: 700 }}>LIVE</span>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: "52px 24px", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
        <div className="rx-2" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, textAlign: "center" }}>
          {[
            { val: 5, suffix: "", label: "Live Websites Delivered" },
            { val: 10, suffix: "+", label: "Interns Involved" },
            { val: 3, suffix: "", label: "Industries Covered" },
            { val: 100, suffix: "%", label: "Real Client Projects" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 38, fontWeight: 900, color: "#22C55E", letterSpacing: "-0.02em", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
                <Counter target={s.val} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: 13, color: "rgba(226,232,240,0.55)", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECT GRID ─────────────────────────────────────────────────── */}
      <section id="projects" style={{ padding: "88px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <SectionTag>live_projects</SectionTag>
              <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, color: "#F8FAFC", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                Built by Interns. <span style={{ color: "#22C55E" }}>Live on the Internet.</span>
              </h2>
              <p style={{ color: "#94A3B8", fontSize: 16, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
                These aren't assignments. Every site below is live, visited by real users, and was built by a Thinklyedu intern.
              </p>
            </div>
          </Reveal>

          {/* Featured 2 */}
          <div className="rx-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24, marginBottom: 24 }}>
            {PROJECTS.slice(0, 2).map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>

          {/* Pharmacy 3 */}
          <div>
            <Reveal>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, color: "#F1F5F9" }}>
                  <Pill size={16} color="#4ADE80" /> Pharmacy Projects
                </span>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} />
                <span style={{ fontSize: 12, color: "#94A3B8" }}>3 websites delivered</span>
              </div>
            </Reveal>
            <div className="rx-stack" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {PROJECTS.slice(2).map((p, i) => <ProjectCard key={p.id} project={p} index={i + 2} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS USED ──────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <SectionTag>tech_stack</SectionTag>
              <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, color: "#F8FAFC", margin: "12px 0", letterSpacing: "-0.02em" }}>
                Skills Interns Used on <span style={{ color: "#22C55E" }}>Real Projects</span>
              </h2>
            </div>
          </Reveal>

          <div className="rx-2" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {SKILLS_USED.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1.5px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "20px 24px", display: "flex", alignItems: "center", gap: 12, transition: "all 0.25s", cursor: "default" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.4)"; e.currentTarget.style.background = "rgba(34,197,94,0.05)"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <s.icon size={19} color="#4ADE80" strokeWidth={1.8} />
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#F1F5F9" }}>{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ──────────────────────────────────────────────────── */}
      <section style={{ padding: "88px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionTag>how_it_works</SectionTag>
              <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, color: "#F8FAFC", margin: "12px 0", letterSpacing: "-0.02em" }}>
                From Brief to <span style={{ color: "#22C55E" }}>Launch</span>
              </h2>
              <p style={{ color: "#94A3B8", fontSize: 15, maxWidth: 440, margin: "0 auto", lineHeight: 1.7 }}>
                Every Thinklyedu project follows the same professional process real agencies use.
              </p>
            </div>
          </Reveal>

          <div className="rx-2" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 80}>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1.5px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: 24, textAlign: "center", transition: "all 0.25s", position: "relative" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.5)"; e.currentTarget.style.background = "rgba(34,197,94,0.05)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  {/* Connector line */}
                  {i < PROCESS.length - 1 && (
                    <div style={{ position: "absolute", top: 36, right: -10, width: 20, height: 2, background: "rgba(255,255,255,0.1)", zIndex: 2 }} />
                  )}
                  <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(34,197,94,0.1)", border: "1.5px solid rgba(34,197,94,0.25)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                    <p.icon size={26} color="#4ADE80" strokeWidth={1.7} />
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#22C55E", letterSpacing: "0.1em", marginBottom: 8, fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>{p.step}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#F1F5F9", marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT CALLOUT ───────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <div className="rx-cta" style={{ background: "linear-gradient(160deg, #0d1b30 0%, #0a1628 100%)", border: "1.5px solid rgba(34,197,94,0.25)", borderRadius: 28, padding: "52px 56px", display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(34,197,94,0.08)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, color: "#4ADE80", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
                  <Building2 size={15} /> Are You a Business Owner?
                </div>
                <h3 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 900, color: "#F8FAFC", margin: "0 0 12px", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
                  Want a website built by our interns?
                </h3>
                <p style={{ color: "#94A3B8", fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 480 }}>
                  We partner with small businesses and local brands to give our interns real project experience. You get a professionally built website — at no cost or minimal cost. Win-win.
                </p>
              </div>
              <div style={{ position: "relative", zIndex: 1, flexShrink: 0 }}>
                <a href="mailto:supportthinkly.co@gmail.com"
                  style={{ display: "block", background: "#22C55E", color: "#08150C", fontWeight: 800, fontSize: 15, padding: "16px 32px", borderRadius: 999, textDecoration: "none", textAlign: "center", whiteSpace: "nowrap", boxShadow: "0 8px 28px rgba(34,197,94,0.28)", transition: "all 0.2s" }}
                  onMouseOver={e => { e.currentTarget.style.background = "#16a34a"; e.currentTarget.style.transform = "scale(1.04)"; }}
                  onMouseOut={e => { e.currentTarget.style.background = "#22C55E"; e.currentTarget.style.transform = "scale(1)"; }}>
                  Partner With Us →
                </a>
                <p style={{ fontSize: 11, color: "rgba(226,232,240,0.3)", textAlign: "center", marginTop: 10 }}>supportthinkly.co@gmail.com</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <section style={{ padding: "88px 24px", textAlign: "center", position: "relative", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 280, height: 280, borderRadius: "50%", background: "rgba(34,197,94,0.08)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 580, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Reveal>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <Rocket size={32} color="#4ADE80" strokeWidth={1.7} />
            </div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, color: "#F8FAFC", lineHeight: 1.1, marginBottom: 16, letterSpacing: "-0.02em" }}>
              Want your project
              <span style={{ color: "#22C55E", display: "block" }}>on this page?</span>
            </h2>
            <p style={{ color: "#94A3B8", fontSize: 16, lineHeight: 1.7, marginBottom: 36 }}>
              Apply for a Thinklyedu internship, build something real, and your work could be featured here — live on the internet.
            </p>
            <a href="#"
              style={{ display: "inline-block", background: "#22C55E", color: "#08150C", fontWeight: 800, fontSize: 16, padding: "16px 44px", borderRadius: 999, textDecoration: "none", boxShadow: "0 12px 40px rgba(34,197,94,0.3)", transition: "all 0.2s" }}
              onClick={(e) => { e.preventDefault(); openApplyModal(); }}
              onMouseOver={e => { e.currentTarget.style.background = "#16a34a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.currentTarget.style.background = "#22C55E"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Apply for Free Internship →
            </a>
            <p style={{ color: "rgba(226,232,240,0.3)", fontSize: 13, marginTop: 20, fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
              supportthinkly.co@gmail.com &nbsp;·&nbsp; +91 98185 09083
            </p>
          </Reveal>
        </div>
      </section>
       <Footer/>
      </div>
    </main>
  );
}
