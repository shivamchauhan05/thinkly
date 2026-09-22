"use client";
import { useEffect, useRef, useState } from "react";
import Footer from '@/components/Footer'
import TechBackground from '@/components/TechBackground'
import { useApplyModal } from '@/components/ApplyModal'
import {
  Palette,
  Compass,
  Puzzle,
  Map,
  FlaskConical,
  Smartphone,
  Layers,
  Handshake,
  Accessibility,
  BarChart3,
  PenLine,
  Rocket,
  Clock,
  Globe,
  GraduationCap,
  ChevronDown,
} from "lucide-react";

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

const SKILLS = [
  { icon: Palette, title: "UI Design Fundamentals", desc: "Master layout, color theory, typography, and visual hierarchy for digital products." },
  { icon: Compass, title: "UX Research & Strategy", desc: "Run user interviews, surveys, and usability tests to guide real product decisions." },
  { icon: Puzzle, title: "Wireframing & Prototyping", desc: "Turn ideas into low and high-fidelity wireframes and clickable prototypes." },
  { icon: Map, title: "User Flows & Journey Mapping", desc: "Map user journeys, personas, and information architecture for complex products." },
  { icon: FlaskConical, title: "Usability Testing", desc: "Plan and run usability sessions, then translate findings into design fixes." },
  { icon: Smartphone, title: "Responsive & Mobile Design", desc: "Design interfaces that adapt cleanly across desktop, tablet, and mobile." },
  { icon: Layers, title: "Design Systems", desc: "Build reusable components, tokens, and style guides used across a product." },
  { icon: Handshake, title: "Design–Dev Handoff", desc: "Prepare specs, assets, and documentation developers can build from directly." },
  { icon: Accessibility, title: "Accessibility (a11y)", desc: "Design inclusive interfaces that meet real-world accessibility standards." },
  { icon: BarChart3, title: "Data-Informed Design", desc: "Use analytics and A/B test results to validate and improve design decisions." },
  { icon: PenLine, title: "UX Writing & Microcopy", desc: "Write clear, human interface copy for buttons, errors, and empty states." },
  { icon: Rocket, title: "Portfolio Case Studies", desc: "Package your process and outcomes into interview-ready case studies." },
];

const MONTHS = [
  { month: "Month 1", title: "Design Foundations", desc: "Learn design principles, typography, color, and get fluent in Figma and design tooling.", color: "#22C55E" },
  { month: "Month 2", title: "UX Research", desc: "Conduct user interviews, build personas, and map user journeys for a real product.", color: "#3B82F6" },
  { month: "Month 3", title: "Wireframes & Prototypes", desc: "Design low-fidelity wireframes, then build interactive high-fidelity prototypes.", color: "#F59E0B" },
  { month: "Month 4", title: "Design Systems", desc: "Create reusable components and a design system ready for production use.", color: "#EF4444" },
  { month: "Month 5", title: "Usability Testing & Iteration", desc: "Test designs with real users, analyze feedback, and iterate on the product.", color: "#8B5CF6" },
  { month: "Month 6", title: "Portfolio & Handoff", desc: "Finalize a portfolio case study and prepare polished dev handoff documentation.", color: "#94A3B8" },
];

const TESTIMONIALS = [
  { name: "Priya Sharma", role: "Design Intern → UI/UX Designer", quote: "I went from knowing nothing about Figma to shipping a full case study I use in every interview. The mentorship made all the difference.", color: "#0D1F3C" },
  { name: "Rohan Mehta", role: "Design Intern → Product Designer", quote: "Real user research, real prototypes, real feedback loops — this felt like an actual design job, not a course.", color: "#22C55E" },
  { name: "Sara Khan", role: "UX Intern → UX Researcher", quote: "The usability testing and research process I learned here is exactly what I use at my full-time job today.", color: "#3B82F6" },
];

const FAQS = [
  { q: "Do I need design experience or a portfolio to join?", a: "No. The internship starts from design fundamentals and builds up to advanced UX research and prototyping over 1–6 months." },
  { q: "What tools will I learn?", a: "You'll work with Figma, FigJam, Adobe XD, and other industry-standard design and prototyping tools." },
  { q: "Will I build a real portfolio?", a: "Yes. You will complete full case studies covering research, wireframes, prototypes, and design systems." },
  { q: "Is the internship flexible?", a: "Yes — choose a 1, 3, or 6 month track, and we'll match you with a mentor and project rhythm that fits your availability." },
  { q: "Will I get a certificate?", a: "Yes. You receive a verified UI/UX design certificate plus a portfolio-ready case study at completion." },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "none", border: "none", cursor: "pointer", padding: "18px 0",
        fontFamily: "inherit", textAlign: "left",
      }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "#F1F5F9", paddingRight: 20 }}>{q}</span>
        <ChevronDown size={18} color="#4ADE80" style={{ flexShrink: 0, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none" }} />
      </button>
      {open && (
        <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.75, paddingBottom: 18, margin: 0, paddingRight: 32 }}>{a}</p>
      )}
    </div>
  );
}

export default function UIUXInternshipPage() {
  const { open: openApplyModal } = useApplyModal();
  const lineRef = useRef(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    el.style.width = "0%";
    el.style.transition = "width 1.1s cubic-bezier(0.4,0,0.2,1) 0.5s";
    setTimeout(() => { el.style.width = "100%"; }, 50);
  }, []);

  return (
    <main style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: "#F1F5F9", position: "relative", background: "#0a1628", paddingTop: 68 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
      `}</style>
      <TechBackground />
      <div style={{ position: "relative", zIndex: 1 }}>

      <section style={{ padding: "88px 24px 56px", overflow: "hidden", position: "relative" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div className="rx-stack" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
            <div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#4ADE80", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 999, padding: "6px 16px", background: "rgba(34,197,94,0.08)", marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", display: "inline-block" }} />
                1–6 month internship track
              </span>

              <h1 style={{ fontSize: "clamp(38px,5vw,62px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#F8FAFC", margin: "0 0 18px" }}>
                UI/UX Design
                <span style={{ display: "block", color: "#22C55E", position: "relative" }}>
                  Internship
                  <span ref={lineRef} style={{ display: "block", height: 3, background: "rgba(34,197,94,0.35)", borderRadius: 4, marginTop: 6, width: "0%" }} />
                </span>
              </h1>

              <p style={{ fontSize: 17, color: "#94A3B8", lineHeight: 1.75, maxWidth: 560, margin: "0 0 32px" }}>
                Start your design career with a flexible 1 to 6 month UI/UX design internship. Learn user research, wireframing, prototyping, and design systems — build a real portfolio and graduate with a verified certificate.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
                {[
                  { icon: Clock, label: "Flexible duration", value: "1–6 months" },
                  { icon: Globe, label: "Remote ready", value: "Work from anywhere" },
                  { icon: Palette, label: "Project-based", value: "Real design work" },
                  { icon: GraduationCap, label: "Verified certificate", value: "Shareable on LinkedIn" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "center", minWidth: 200 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 18, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", display: "grid", placeItems: "center" }}>
                      <item.icon size={18} color="#4ADE80" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#22C55E" }}>{item.label}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#F1F5F9" }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href="#" style={{ background: "#22C55E", color: "#08150C", fontWeight: 700, fontSize: 15, padding: "14px 34px", borderRadius: 999, textDecoration: "none", boxShadow: "0 8px 28px rgba(34,197,94,0.28)", transition: "all 0.2s" }}
                  onClick={(e) => { e.preventDefault(); openApplyModal() }}
                  onMouseOver={e => { e.currentTarget.style.background = "#16a34a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseOut={e => { e.currentTarget.style.background = "#22C55E"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  Apply Now
                </a>
                <a href="#curriculum" style={{ border: "1.5px solid rgba(255,255,255,0.16)", color: "#E2E8F0", fontWeight: 600, fontSize: 15, padding: "14px 34px", borderRadius: 999, textDecoration: "none", transition: "all 0.2s" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "#22C55E"; e.currentTarget.style.color = "#4ADE80"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)"; e.currentTarget.style.color = "#E2E8F0"; }}>
                  See Curriculum
                </a>
              </div>
            </div>

            <div className="rx-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 20 }}>
              {[
                { label: "Design Tools", value: "Figma, FigJam, Adobe XD" },
                { label: "Research", value: "Interviews, Surveys, Personas" },
                { label: "Prototyping", value: "Wireframes, Clickable Prototypes" },
                { label: "Design Systems", value: "Components, Tokens, Style Guides" },
                { label: "Testing", value: "Usability Testing, A/B Testing" },
                { label: "Handoff", value: "Dev Specs, Redlines, Assets" },
                { label: "Accessibility", value: "WCAG, Inclusive Design" },
                { label: "UX Writing", value: "Microcopy, Content Design" },
              ].map((item) => (
                <div key={item.label} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 24, border: "1.5px solid rgba(255,255,255,0.08)", padding: 20, minHeight: 120, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#F1F5F9" }}>{item.label}</span>
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#94A3B8" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionTag>what_you_will_learn</SectionTag>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#F8FAFC", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                Design skills real product teams hire for.
              </h2>
              <p style={{ color: "#94A3B8", fontSize: 16, maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
                Every module moves you from design theory to a portfolio hiring managers can evaluate with confidence.
              </p>
            </div>
          </Reveal>

          <div className="rx-stack" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {SKILLS.map((skill, index) => (
              <Reveal key={skill.title} delay={index * 70}>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1.5px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 26, transition: "all 0.3s" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.5)"; e.currentTarget.style.background = "rgba(34,197,94,0.05)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <skill.icon size={22} color="#4ADE80" strokeWidth={1.8} />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#F1F5F9", marginBottom: 10 }}>{skill.title}</h3>
                  <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.8, margin: 0 }}>{skill.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <SectionTag>design_toolkit</SectionTag>
              <h2 style={{ fontSize: "clamp(26px,4vw,36px)", fontWeight: 900, color: "#F8FAFC", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                Every tool and skill you'll work with, hands-on.
              </h2>
              <p style={{ color: "#94A3B8", fontSize: 15, maxWidth: 620, margin: "0 auto", lineHeight: 1.75 }}>
                From research to pixel-perfect UI to developer handoff — this internship covers the full modern UI/UX design workflow.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
              {[
                "Figma", "FigJam", "Adobe XD", "Adobe Illustrator", "Adobe Photoshop", "Sketch",
                "Wireframing", "Prototyping", "User Research", "User Interviews", "Personas",
                "User Journey Mapping", "Information Architecture", "Usability Testing", "A/B Testing",
                "Design Systems", "Design Tokens", "Component Libraries", "Typography", "Color Theory",
                "Visual Hierarchy", "Interaction Design", "Motion & Micro-interactions", "Responsive Design",
                "Mobile App Design", "Accessibility (WCAG)", "UX Writing", "Content Design",
                "Design–Dev Handoff", "Zeplin", "Miro", "Design Thinking", "Heuristic Evaluation",
              ].map((tool) => (
                <span key={tool} style={{
                  fontSize: 13, fontWeight: 600, color: "#4ADE80", fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  border: "1px solid rgba(34,197,94,0.3)", background: "rgba(34,197,94,0.06)", borderRadius: 999, padding: "9px 18px",
                  transition: "all 0.2s", cursor: "default",
                }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.6)"; e.currentTarget.style.background = "rgba(34,197,94,0.12)"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.3)"; e.currentTarget.style.background = "rgba(34,197,94,0.06)"; }}>
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="curriculum" style={{ padding: "88px 24px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionTag>curriculum</SectionTag>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#F8FAFC", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                A clear path from month 1 to month 6.
              </h2>
              <p style={{ color: "#94A3B8", fontSize: 16, lineHeight: 1.7 }}>
                Progress through structured monthly goals, practical assignments, and mentor-led design projects.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gap: 20 }}>
            {MONTHS.map((item, index) => (
              <Reveal key={item.month} delay={index * 70}>
                <div style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 20, alignItems: "start" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: item.color, marginTop: 4 }} />
                    {index < MONTHS.length - 1 && <div style={{ flex: 1, width: 2, background: "rgba(255,255,255,0.1)", marginTop: 8 }} />}
                  </div>
                  <div style={{ padding: 26, background: "rgba(255,255,255,0.03)", borderRadius: 20, border: "1.5px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: item.color, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10 }}>{item.month}</div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "#F1F5F9", margin: "0 0 10px" }}>{item.title}</h3>
                    <p style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionTag>alumni</SectionTag>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#F8FAFC", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                Real stories from students who launched design careers.
              </h2>
            </div>
          </Reveal>
          <div className="rx-stack" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {TESTIMONIALS.map((item, index) => (
              <Reveal key={item.name} delay={index * 70}>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1.5px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 28, transition: "all 0.3s" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.5)"; e.currentTarget.style.background = "rgba(34,197,94,0.05)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <p style={{ fontSize: 15, color: "#CBD5E1", lineHeight: 1.75, margin: "0 0 24px" }}>
                    "{item.quote}"
                  </p>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#F1F5F9" }}>{item.name}</div>
                    <div style={{ fontSize: 13, color: "#4ADE80", marginTop: 4 }}>{item.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <SectionTag>faq</SectionTag>
              <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, color: "#F8FAFC", margin: "12px 0 16px", letterSpacing: "-0.02em" }}>
                Common questions about the UI/UX internship.
              </h2>
            </div>
          </Reveal>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1.5px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "0 24px" }}>
            {FAQS.map((faq) => <FAQ key={faq.q} {...faq} />)}
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 24px 8px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#94A3B8", marginBottom: 10 }}>
              Related searches
            </p>
            <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 2, margin: 0 }}>
              UI/UX Design Internship &middot; UI Designer Internship for Students &middot; UX Researcher Internship &middot;
              Product Design Internship &middot; Figma Internship &middot; Remote Design Internship India &middot;
              Design Internship with Certificate &middot; Internship for Design Students &middot; Wireframing and Prototyping Internship &middot;
              User Research Internship &middot; Design Systems Internship &middot; Work From Home Design Internship &middot;
              Internship with Job Offer &middot; Best Internship for Design Graduates
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "88px 24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.08)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(34,197,94,0.08)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Reveal>
            <Palette size={44} color="#4ADE80" style={{ marginBottom: 20 }} strokeWidth={1.6} />
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 18px", letterSpacing: "-0.02em", color: "#F8FAFC" }}>
              Launch your UI/UX design internship in 1–6 months.
            </h2>
            <p style={{ color: "rgba(226,232,240,0.6)", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
              Free to apply, crafted for real learning, and built to help you secure your first design role.
            </p>
            <a href="mailto:supportthinkly.co@gmail.com" style={{ display: "inline-block", background: "#22C55E", color: "#08150C", fontWeight: 700, fontSize: 16, padding: "16px 44px", borderRadius: 999, textDecoration: "none", boxShadow: "0 12px 40px rgba(34,197,94,0.3)", transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.background = "#16a34a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.currentTarget.style.background = "#22C55E"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Apply for UI/UX Design Internship →
            </a>
          </Reveal>
        </div>
      </section>
       <Footer/>
      </div>
    </main>
  );
}
