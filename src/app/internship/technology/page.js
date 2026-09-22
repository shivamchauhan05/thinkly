"use client";
import { useEffect, useRef, useState } from "react";
import Footer from '@/components/Footer'
import TechBackground from "@/components/TechBackground";
import { useApplyModal } from "@/components/ApplyModal";
import {
  Terminal,
  Clock,
  Globe,
  Package,
  GraduationCap,
  Code2,
  Settings,
  Cloud,
  Brain,
  Smartphone,
  Lock,
  Bot,
  Database,
  Puzzle,
  Link2,
  FlaskConical,
  Link,
  Lightbulb,
  ChevronDown,
} from "lucide-react";

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

const SKILLS = [
  { icon: Code2, title: "Full Stack Web Development", desc: "Build end-to-end apps with React, Next.js, Node.js, Express, and modern databases." },
  { icon: Settings, title: "Software & Product Engineering", desc: "Plan feature work, write clean code, and collaborate on real product sprints." },
  { icon: Cloud, title: "Cloud Computing & DevOps", desc: "Ship apps with AWS, Docker, Kubernetes, CI/CD pipelines, and deployment monitoring." },
  { icon: Brain, title: "Data Structures & Problem Solving", desc: "Turn requirements into working features with debugging, testing, and quality checks." },
  { icon: Smartphone, title: "Mobile & Responsive UI", desc: "Create responsive interfaces that work smoothly across desktop, tablet, and phone." },
  { icon: Lock, title: "Cybersecurity & Performance", desc: "Write secure code, optimize load times, and keep production systems stable." },
  { icon: Bot, title: "AI, Machine Learning & Data Science", desc: "Work with Python, data pipelines, and applied machine learning models used in real products." },
  { icon: Database, title: "Database & Backend Engineering", desc: "Design schemas and APIs using SQL, MongoDB, PostgreSQL, and RESTful/GraphQL services." },
  { icon: Puzzle, title: "UI/UX & Frontend Design", desc: "Craft user-friendly, accessible interfaces with Figma-informed design systems and Tailwind CSS." },
  { icon: Link2, title: "API & Microservices Development", desc: "Build and integrate scalable REST and GraphQL APIs across distributed microservices." },
  { icon: FlaskConical, title: "Automation & QA Testing", desc: "Write unit, integration, and end-to-end tests to ship reliable, bug-free software." },
  { icon: Link, title: "Emerging Tech: Blockchain & IoT", desc: "Get exposure to blockchain fundamentals, smart contracts, and IoT-driven product ideas." },
];

const WEEKS = [
  { week: "Month 1", title: "Setup & Core Stack", desc: "Get comfortable with the codebase, tooling, and the project workflow used across the internship.", color: "#22C55E" },
  { week: "Month 2", title: "Feature Build", desc: "Ship an important product feature end-to-end, from UI design to backend logic and testing.", color: "#3B82F6" },
  { week: "Month 3", title: "Integration & Testing", desc: "Connect components, add automation tests, and improve reliability for real user flows.", color: "#F59E0B" },
  { week: "Month 4", title: "Performance & Deployment", desc: "Optimize performance, configure hosting, and release your work to staging or production.", color: "#EF4444" },
  { week: "Month 5", title: "Mentor Project", desc: "Drive a mentor-backed project with clear goals, feedback loops, and review-ready deliverables.", color: "#8B5CF6" },
  { week: "Month 6", title: "Portfolio & Handoff", desc: "Finalize your portfolio project, write documentation, and prepare for interviews.", color: "#4ADE80" },
];

const TESTIMONIALS = [
  { name: "Ananya Verma", role: "Tech Intern → Product Engineer", quote: "I joined a 6-month track and built the kind of project I can show to employers with confidence. The process was practical, supportive, and fast.", color: "#4ADE80" },
  { name: "Aarav Desai", role: "Frontend Intern → UI Developer", quote: "From day one I was writing real code, making releases, and learning best practices instead of busywork.", color: "#22C55E" },
  { name: "Megha Patel", role: "Backend Intern → Developer", quote: "The mentors helped me go from zero to building APIs, deployments, and a live app in just four months.", color: "#3B82F6" },
];

const FAQS = [
  { q: "Can I join with no prior coding experience?", a: "Yes. The internship is designed to take you from fundamentals to product-ready development over 1–6 months." },
  { q: "What projects will I build?", a: "You will build real web applications, APIs, and deployment pipelines for products that matter to hiring teams." },
  { q: "Is the internship flexible?", a: "Yes — choose a 1, 3, or 6 month track, and we will match you with a mentor and project rhythm that fits your availability." },
  { q: "Will I get a certificate?", a: "Yes. You receive a verified certificate plus a portfolio-ready case study at completion." },
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
        <ChevronDown
          size={18}
          color="#4ADE80"
          style={{ flexShrink: 0, transition: "transform 0.25s", transform: open ? "rotate(180deg)" : "none" }}
        />
      </button>
      {open && (
        <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.75, paddingBottom: 18, margin: 0, paddingRight: 32 }}>{a}</p>
      )}
    </div>
  );
}

export default function TechnologyInternshipPage() {
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
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-8px); } }
      `}</style>

      <TechBackground />
      <div style={{ position: "relative", zIndex: 1 }}>

      <section style={{ padding: "88px 24px 56px", overflow: "hidden", position: "relative" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div className="rx-stack" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
            <div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#4ADE80", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 999, padding: "6px 16px", background: "rgba(34,197,94,0.08)", marginBottom: 24, fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
                <Terminal size={13} />
                1–6 month internship track
              </span>

              <h1 style={{ fontSize: "clamp(38px,5vw,62px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#F8FAFC", margin: "0 0 18px" }}>
                Technology
                <span style={{ display: "block", color: "#22C55E", position: "relative" }}>
                  Internship
                  <span ref={lineRef} style={{ display: "block", height: 3, background: "rgba(34,197,94,0.35)", borderRadius: 4, marginTop: 6, width: "0%" }} />
                </span>
              </h1>

              <p style={{ fontSize: 17, color: "#94A3B8", lineHeight: 1.75, maxWidth: 560, margin: "0 0 32px" }}>
                Start your tech career with a flexible 1 to 6 month software development internship. Gain hands-on experience in web development, full stack development, cloud computing, and data science — build real software, ship features, and graduate with portfolio-ready work and a verified certificate.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
                {[
                  { icon: Clock, label: "Flexible duration", value: "1–6 months" },
                  { icon: Globe, label: "Remote ready", value: "Work from anywhere" },
                  { icon: Package, label: "Project-based", value: "Real product work" },
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
                { label: "Web Apps", value: "React, Next.js, JavaScript, TypeScript" },
                { label: "Backend", value: "Node.js, Express, Python, Java" },
                { label: "Cloud & DevOps", value: "AWS, Docker, Kubernetes, CI/CD" },
                { label: "Databases", value: "MongoDB, MySQL, PostgreSQL, Firebase" },
                { label: "APIs", value: "REST APIs, GraphQL, Microservices" },
                { label: "AI & Data", value: "Python, Machine Learning, Data Science" },
                { label: "Version Control", value: "Git, GitHub, Agile Workflows" },
                { label: "Testing & QA", value: "Unit tests, Automation, Code review" },
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

      <section style={{ padding: "72px 24px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionTag>what_you_will_learn</SectionTag>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#F8FAFC", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                Built-for-work skills that matter.
              </h2>
              <p style={{ color: "#94A3B8", fontSize: 16, maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
                Every module is chosen to help you move from learning to earning, with a focus on practical delivery over theory.
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
              <SectionTag>tech_stack</SectionTag>
              <h2 style={{ fontSize: "clamp(26px,4vw,36px)", fontWeight: 900, color: "#F8FAFC", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                Every technology you'll work with, hands-on.
              </h2>
              <p style={{ color: "#94A3B8", fontSize: 15, maxWidth: 620, margin: "0 auto", lineHeight: 1.75 }}>
                From frontend to backend, cloud to AI — this internship covers the full modern technology stack used by real product teams.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
              {[
                "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Redux",
                "Tailwind CSS", "Node.js", "Express.js", "Python", "Django", "Flask", "Java",
                "Spring Boot", "PHP", "REST API", "GraphQL", "MongoDB", "MySQL", "PostgreSQL",
                "Firebase", "Git & GitHub", "Docker", "Kubernetes", "AWS", "Microsoft Azure",
                "Google Cloud", "CI/CD", "Linux", "Machine Learning", "Data Science", "Artificial Intelligence",
                "Data Structures & Algorithms", "System Design", "Cybersecurity", "Blockchain",
                "Unit Testing", "Agile & Scrum", "UI/UX Design", "WebSockets", "Postman",
              ].map((tech) => (
                <span key={tech} style={{
                  fontSize: 13.5, fontWeight: 600, color: "#4ADE80", background: "rgba(34,197,94,0.06)",
                  border: "1px solid rgba(34,197,94,0.3)", borderRadius: 999, padding: "9px 18px",
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  transition: "all 0.2s", cursor: "default",
                }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "#22C55E"; e.currentTarget.style.background = "rgba(34,197,94,0.14)"; e.currentTarget.style.color = "#4ADE80"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.3)"; e.currentTarget.style.background = "rgba(34,197,94,0.06)"; e.currentTarget.style.color = "#4ADE80"; }}>
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="curriculum" style={{ padding: "88px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionTag>curriculum</SectionTag>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#F8FAFC", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                A clear path from month 1 to month 6.
              </h2>
              <p style={{ color: "#94A3B8", fontSize: 16, lineHeight: 1.7 }}>
                Progress through structured monthly goals, practical assignments, and mentor-led project work.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gap: 20 }}>
            {WEEKS.map((item, index) => (
              <Reveal key={item.week} delay={index * 70}>
                <div style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 20, alignItems: "start" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: item.color, marginTop: 4 }} />
                    {index < WEEKS.length - 1 && <div style={{ flex: 1, width: 2, background: "rgba(255,255,255,0.1)", marginTop: 8 }} />}
                  </div>
                  <div style={{ padding: 26, background: "rgba(255,255,255,0.03)", borderRadius: 20, border: "1.5px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: item.color, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10, fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>{item.week}</div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "#F1F5F9", margin: "0 0 10px" }}>{item.title}</h3>
                    <p style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <SectionTag>alumni</SectionTag>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#F8FAFC", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                Real stories from students who launched tech careers.
              </h2>
            </div>
          </Reveal>
          <div className="rx-stack" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {TESTIMONIALS.map((item, index) => (
              <Reveal key={item.name} delay={index * 70}>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1.5px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 28, transition: "all 0.3s" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.4)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <p style={{ fontSize: 15, color: "#CBD5E1", lineHeight: 1.75, margin: "0 0 24px", fontStyle: "italic" }}>
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#F1F5F9" }}>{item.name}</div>
                    <div style={{ fontSize: 13, color: "#4ADE80", marginTop: 4, fontWeight: 600 }}>{item.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <SectionTag>faq</SectionTag>
              <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, color: "#F8FAFC", margin: "12px 0 16px", letterSpacing: "-0.02em" }}>
                Common questions about the tech internship.
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
            <p style={{ fontSize: 13, color: "rgba(148,163,184,0.7)", lineHeight: 2, margin: 0 }}>
              Software Development Internship &middot; Web Development Internship for Students &middot; Full Stack Developer Internship &middot;
              Remote Tech Internship India &middot; Coding Internship with Certificate &middot; IT Internship Program 2026 &middot;
              Computer Science Internship &middot; Python Django Internship &middot; React Node.js Internship &middot;
              Data Science and AI Internship &middot; DevOps and Cloud Computing Internship &middot; Cybersecurity Internship for Freshers &middot;
              Work From Home Tech Internship &middot; Internship with Job Offer &middot; Best Internship for Engineering Students
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "88px 24px", textAlign: "center", color: "#F1F5F9", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Reveal>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <Lightbulb size={32} color="#4ADE80" strokeWidth={1.8} />
            </div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 18px", letterSpacing: "-0.02em", color: "#F8FAFC" }}>
              Launch your tech internship in 1–6 months.
            </h2>
            <p style={{ color: "#94A3B8", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
              Free to apply, crafted for real learning, and built to help you secure your first tech role.
            </p>
            <a href="mailto:supportthinkly.co@gmail.com" style={{ display: "inline-block", background: "#22C55E", color: "#08150C", fontWeight: 700, fontSize: 16, padding: "16px 44px", borderRadius: 999, textDecoration: "none", boxShadow: "0 12px 40px rgba(34,197,94,0.3)", transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.background = "#16a34a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.currentTarget.style.background = "#22C55E"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Apply for Technology Internship →
            </a>
          </Reveal>
        </div>
      </section>
       <Footer/>
      </div>
    </main>
  );
}
