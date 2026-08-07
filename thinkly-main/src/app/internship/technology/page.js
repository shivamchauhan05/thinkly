"use client";
import { useEffect, useRef, useState } from "react";
import Footer from '@/components/Footer'

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

const SKILLS = [
  { icon: "💻", title: "Full Stack Web Development", desc: "Build end-to-end apps with React, Next.js, Node.js, Express, and modern databases." },
  { icon: "⚙️", title: "Software & Product Engineering", desc: "Plan feature work, write clean code, and collaborate on real product sprints." },
  { icon: "☁️", title: "Cloud Computing & DevOps", desc: "Ship apps with AWS, Docker, Kubernetes, CI/CD pipelines, and deployment monitoring." },
  { icon: "🧠", title: "Data Structures & Problem Solving", desc: "Turn requirements into working features with debugging, testing, and quality checks." },
  { icon: "📱", title: "Mobile & Responsive UI", desc: "Create responsive interfaces that work smoothly across desktop, tablet, and phone." },
  { icon: "🔐", title: "Cybersecurity & Performance", desc: "Write secure code, optimize load times, and keep production systems stable." },
  { icon: "🤖", title: "AI, Machine Learning & Data Science", desc: "Work with Python, data pipelines, and applied machine learning models used in real products." },
  { icon: "🗄️", title: "Database & Backend Engineering", desc: "Design schemas and APIs using SQL, MongoDB, PostgreSQL, and RESTful/GraphQL services." },
  { icon: "🧩", title: "UI/UX & Frontend Design", desc: "Craft user-friendly, accessible interfaces with Figma-informed design systems and Tailwind CSS." },
  { icon: "🔗", title: "API & Microservices Development", desc: "Build and integrate scalable REST and GraphQL APIs across distributed microservices." },
  { icon: "🧪", title: "Automation & QA Testing", desc: "Write unit, integration, and end-to-end tests to ship reliable, bug-free software." },
  { icon: "⛓️", title: "Emerging Tech: Blockchain & IoT", desc: "Get exposure to blockchain fundamentals, smart contracts, and IoT-driven product ideas." },
];

const WEEKS = [
  { week: "Month 1", title: "Setup & Core Stack", desc: "Get comfortable with the codebase, tooling, and the project workflow used across the internship.", color: "#22C55E" },
  { week: "Month 2", title: "Feature Build", desc: "Ship an important product feature end-to-end, from UI design to backend logic and testing.", color: "#3B82F6" },
  { week: "Month 3", title: "Integration & Testing", desc: "Connect components, add automation tests, and improve reliability for real user flows.", color: "#F59E0B" },
  { week: "Month 4", title: "Performance & Deployment", desc: "Optimize performance, configure hosting, and release your work to staging or production.", color: "#EF4444" },
  { week: "Month 5", title: "Mentor Project", desc: "Drive a mentor-backed project with clear goals, feedback loops, and review-ready deliverables.", color: "#8B5CF6" },
  { week: "Month 6", title: "Portfolio & Handoff", desc: "Finalize your portfolio project, write documentation, and prepare for interviews.", color: "#0D1F3C" },
];

const TESTIMONIALS = [
  { name: "Ananya Verma", role: "Tech Intern → Product Engineer", quote: "I joined a 6-month track and built the kind of project I can show to employers with confidence. The process was practical, supportive, and fast.", color: "#0D1F3C" },
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

export default function TechnologyInternshipPage() {
  const lineRef = useRef(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    el.style.width = "0%";
    el.style.transition = "width 1.1s cubic-bezier(0.4,0,0.2,1) 0.5s";
    setTimeout(() => { el.style.width = "100%"; }, 50);
  }, []);

  return (
    <main style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: "#0D1F3C", background: "white", paddingTop: 68 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-8px); } }
      `}</style>

      <section style={{ background: "linear-gradient(160deg, #ffffff 0%, #f5fbf8 55%, #ffffff 100%)", padding: "88px 24px 56px", overflow: "hidden", position: "relative" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
            <div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#22C55E", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 999, padding: "6px 16px", background: "rgba(34,197,94,0.06)", marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", display: "inline-block" }} />
                1–6 month internship track
              </span>

              <h1 style={{ fontSize: "clamp(38px,5vw,62px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#0D1F3C", margin: "0 0 18px" }}>
                Technology
                <span style={{ display: "block", color: "#22C55E", position: "relative" }}>
                  Internship
                  <span ref={lineRef} style={{ display: "block", height: 3, background: "rgba(34,197,94,0.25)", borderRadius: 4, marginTop: 6, width: "0%" }} />
                </span>
              </h1>

              <p style={{ fontSize: 17, color: "#64748B", lineHeight: 1.75, maxWidth: 560, margin: "0 0 32px" }}>
                Start your tech career with a flexible 1 to 6 month software development internship. Gain hands-on experience in web development, full stack development, cloud computing, and data science — build real software, ship features, and graduate with portfolio-ready work and a verified certificate.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
                {[
                  { icon: "⏱️", label: "Flexible duration", value: "1–6 months" },
                  { icon: "🌐", label: "Remote ready", value: "Work from anywhere" },
                  { icon: "📦", label: "Project-based", value: "Real product work" },
                  { icon: "🎓", label: "Verified certificate", value: "Shareable on LinkedIn" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "center", minWidth: 200 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 18, background: "#f4fdf7", display: "grid", placeItems: "center", fontSize: 18 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#22C55E" }}>{item.label}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#0D1F3C" }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href="#" style={{ background: "#0D1F3C", color: "white", fontWeight: 700, fontSize: 15, padding: "14px 34px", borderRadius: 999, textDecoration: "none", boxShadow: "0 12px 32px rgba(13,31,60,0.16)", transition: "transform 0.2s" }}
                  onClick={(e) => { e.preventDefault(); openApplyModal() }}
                  onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; }}>
                  Apply Now
                </a>
                <a href="#curriculum" style={{ border: "1.5px solid rgba(13,31,60,0.18)", color: "#0D1F3C", fontWeight: 600, fontSize: 15, padding: "14px 34px", borderRadius: 999, textDecoration: "none", transition: "all 0.2s" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "#22C55E"; e.currentTarget.style.color = "#22C55E"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(13,31,60,0.18)"; e.currentTarget.style.color = "#0D1F3C"; }}>
                  See Curriculum
                </a>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 20 }}>
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
                <div key={item.label} style={{ background: "white", borderRadius: 24, border: "1px solid #E2E8F0", padding: 20, minHeight: 120, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#0D1F3C" }}>{item.label}</span>
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#64748B" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#F8FAFC", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>What you will learn</span>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#0D1F3C", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                Built-for-work skills that matter.
              </h2>
              <p style={{ color: "#64748B", fontSize: 16, maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
                Every module is chosen to help you move from learning to earning, with a focus on practical delivery over theory.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {SKILLS.map((skill, index) => (
              <Reveal key={skill.title} delay={index * 70}>
                <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: 26, transition: "transform 0.25s, box-shadow 0.25s" }}
                  onMouseOver={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(15,23,42,0.08)"; }}
                  onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ fontSize: 28, marginBottom: 16 }}>{skill.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0D1F3C", marginBottom: 10 }}>{skill.title}</h3>
                  <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.8, margin: 0 }}>{skill.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Tech stack</span>
              <h2 style={{ fontSize: "clamp(26px,4vw,36px)", fontWeight: 900, color: "#0D1F3C", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                Every technology you'll work with, hands-on.
              </h2>
              <p style={{ color: "#64748B", fontSize: 15, maxWidth: 620, margin: "0 auto", lineHeight: 1.75 }}>
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
                  fontSize: 13.5, fontWeight: 600, color: "#0D1F3C", background: "#F8FAFC",
                  border: "1px solid #E2E8F0", borderRadius: 999, padding: "9px 18px",
                  transition: "all 0.2s", cursor: "default",
                }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "#22C55E"; e.currentTarget.style.background = "rgba(34,197,94,0.06)"; e.currentTarget.style.color = "#16803C"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.background = "#F8FAFC"; e.currentTarget.style.color = "#0D1F3C"; }}>
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="curriculum" style={{ padding: "88px 24px", background: "white" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Curriculum</span>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#0D1F3C", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                A clear path from month 1 to month 6.
              </h2>
              <p style={{ color: "#64748B", fontSize: 16, lineHeight: 1.7 }}>
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
                    {index < WEEKS.length - 1 && <div style={{ flex: 1, width: 2, background: "#E2E8F0", marginTop: 8 }} />}
                  </div>
                  <div style={{ padding: 26, background: "#F8FAFC", borderRadius: 20, border: "1px solid #E2E8F0" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: item.color, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10 }}>{item.week}</div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0D1F3C", margin: "0 0 10px" }}>{item.title}</h3>
                    <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#F8FAFC", padding: "88px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Alumni</span>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#0D1F3C", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                Real stories from students who launched tech careers.
              </h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {TESTIMONIALS.map((item, index) => (
              <Reveal key={item.name} delay={index * 70}>
                <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: 28, transition: "transform 0.25s, box-shadow 0.25s" }}
                  onMouseOver={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(15,23,42,0.08)"; }}
                  onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, margin: "0 0 24px" }}>
                    “{item.quote}”
                  </p>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#0D1F3C" }}>{item.name}</div>
                    <div style={{ fontSize: 13, color: "#64748B", marginTop: 4 }}>{item.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "white" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>FAQ</span>
              <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, color: "#0D1F3C", margin: "12px 0 16px", letterSpacing: "-0.02em" }}>
                Common questions about the tech internship.
              </h2>
            </div>
          </Reveal>
          <div style={{ border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "0 24px" }}>
            {FAQS.map((faq) => <FAQ key={faq.q} {...faq} />)}
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 24px 8px", background: "white" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#94A3B8", marginBottom: 10 }}>
              Related searches
            </p>
            <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 2, margin: 0 }}>
              Software Development Internship &middot; Web Development Internship for Students &middot; Full Stack Developer Internship &middot;
              Remote Tech Internship India &middot; Coding Internship with Certificate &middot; IT Internship Program 2026 &middot;
              Computer Science Internship &middot; Python Django Internship &middot; React Node.js Internship &middot;
              Data Science and AI Internship &middot; DevOps and Cloud Computing Internship &middot; Cybersecurity Internship for Freshers &middot;
              Work From Home Tech Internship &middot; Internship with Job Offer &middot; Best Internship for Engineering Students
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ background: "#0D1F3C", padding: "88px 24px", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontSize: 46, marginBottom: 20 }}>💡</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 18px", letterSpacing: "-0.02em" }}>
              Launch your tech internship in 1–6 months.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.76)", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
              Free to apply, crafted for real learning, and built to help you secure your first tech role.
            </p>
            <a href="mailto:supportthinkly.co@gmail.com" style={{ display: "inline-block", background: "#22C55E", color: "white", fontWeight: 700, fontSize: 16, padding: "16px 44px", borderRadius: 999, textDecoration: "none", boxShadow: "0 12px 40px rgba(34,197,94,0.25)", transition: "transform 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; }}>
              Apply for Technology Internship →
            </a>
          </Reveal>
        </div>
      </section>
       <Footer/>
    </main>
  );
}