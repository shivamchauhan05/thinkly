"use client";
import { useEffect, useRef, useState } from "react";
import Footer from '@/components/Footer'

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
  { icon: "✍️", title: "Article & Blog Writing", desc: "Write well-researched, engaging long-form articles and blog posts on real briefs." },
  { icon: "🔍", title: "SEO Content Writing", desc: "Use keyword research, on-page SEO, and search intent to write content that ranks." },
  { icon: "📣", title: "Copywriting", desc: "Craft persuasive landing pages, ads, and emails that drive clicks and conversions." },
  { icon: "📱", title: "Social Media Content", desc: "Write scroll-stopping captions, threads, and posts for Instagram, LinkedIn, and X." },
  { icon: "🎬", title: "Scriptwriting", desc: "Write scripts for YouTube, reels, and short-form video content that hold attention." },
  { icon: "📧", title: "Email & Newsletter Writing", desc: "Write email sequences and newsletters that build an audience and drive action." },
  { icon: "🧠", title: "Content Strategy", desc: "Plan content calendars, pillars, and briefs aligned to real business goals." },
  { icon: "📊", title: "Research & Fact-Checking", desc: "Source credible references, verify facts, and write with accuracy and rigor." },
  { icon: "🧩", title: "UX & Microcopy Writing", desc: "Write clear product copy — buttons, onboarding flows, and error messages." },
  { icon: "🛠️", title: "Editing & Proofreading", desc: "Sharpen grammar, clarity, tone, and structure across every piece you write." },
  { icon: "📈", title: "Content Analytics", desc: "Read performance data and use it to improve headlines, structure, and CTAs." },
  { icon: "📁", title: "Portfolio Case Studies", desc: "Package your best work into a portfolio site recruiters can review in minutes." },
];

const MONTHS = [
  { month: "Month 1", title: "Writing Foundations", desc: "Sharpen grammar, tone, and structure, and learn the fundamentals of writing for the web.", color: "#22C55E" },
  { month: "Month 2", title: "SEO & Research Skills", desc: "Learn keyword research, search intent, and how to structure content that ranks.", color: "#3B82F6" },
  { month: "Month 3", title: "Blog & Article Writing", desc: "Write and publish long-form articles and blog posts on real client-style briefs.", color: "#F59E0B" },
  { month: "Month 4", title: "Copywriting & Social Content", desc: "Write landing pages, ads, emails, and social media content for real campaigns.", color: "#EF4444" },
  { month: "Month 5", title: "Content Strategy Project", desc: "Plan and execute a content calendar with mentor feedback and performance review.", color: "#8B5CF6" },
  { month: "Month 6", title: "Portfolio & Handoff", desc: "Finalize a writing portfolio, polish samples, and prepare for interviews.", color: "#0D1F3C" },
];

const TESTIMONIALS = [
  { name: "Ishita Rao", role: "Writing Intern → Content Writer", quote: "I learned to write for actual readers and search engines, not just for myself. My portfolio got me interviews within weeks.", color: "#0D1F3C" },
  { name: "Karan Malhotra", role: "Writing Intern → Copywriter", quote: "The feedback loops on real briefs pushed my writing further than any course I'd tried before.", color: "#22C55E" },
  { name: "Neha Joshi", role: "Content Intern → Content Strategist", quote: "I went from writing random blog posts to planning full content calendars backed by data.", color: "#3B82F6" },
];

const FAQS = [
  { q: "Do I need prior writing experience?", a: "No. The internship starts with writing fundamentals and builds up to SEO, copywriting, and strategy over 1–6 months." },
  { q: "What kind of content will I write?", a: "You'll write blog posts, SEO articles, social media content, email copy, scripts, and landing page copy on real briefs." },
  { q: "Will I build a real portfolio?", a: "Yes. You'll complete published-quality samples across formats that you can share with hiring teams." },
  { q: "Is the internship flexible?", a: "Yes — choose a 1, 3, or 6 month track, and we'll match you with a mentor and project rhythm that fits your availability." },
  { q: "Will I get a certificate?", a: "Yes. You receive a verified content writing certificate plus a portfolio-ready case study at completion." },
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

export default function ContentWritingInternshipPage() {
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
                Content Writing
                <span style={{ display: "block", color: "#22C55E", position: "relative" }}>
                  Internship
                  <span ref={lineRef} style={{ display: "block", height: 3, background: "rgba(34,197,94,0.25)", borderRadius: 4, marginTop: 6, width: "0%" }} />
                </span>
              </h1>

              <p style={{ fontSize: 17, color: "#64748B", lineHeight: 1.75, maxWidth: 560, margin: "0 0 32px" }}>
                Start your writing career with a flexible 1 to 6 month content writing internship. Learn SEO writing, copywriting, social media content, and content strategy — build a real portfolio and graduate with a verified certificate.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
                {[
                  { icon: "⏱️", label: "Flexible duration", value: "1–6 months" },
                  { icon: "🌐", label: "Remote ready", value: "Work from anywhere" },
                  { icon: "📝", label: "Project-based", value: "Real writing briefs" },
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
                { label: "Blog & Articles", value: "SEO Writing, Long-form Content" },
                { label: "Copywriting", value: "Landing Pages, Ads, Emails" },
                { label: "Social Content", value: "Instagram, LinkedIn, X Threads" },
                { label: "Scriptwriting", value: "YouTube, Reels, Shorts" },
                { label: "Strategy", value: "Content Calendars, Briefs" },
                { label: "Research", value: "Fact-checking, Source Citing" },
                { label: "Tools", value: "SEO Tools, Grammarly, CMS" },
                { label: "Editing", value: "Proofreading, Style Guides" },
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
                Writing skills real brands hire for.
              </h2>
              <p style={{ color: "#64748B", fontSize: 16, maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
                Every module moves you from writing for yourself to writing for readers, search engines, and business goals.
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
              <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Writing toolkit</span>
              <h2 style={{ fontSize: "clamp(26px,4vw,36px)", fontWeight: 900, color: "#0D1F3C", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                Every format and skill you'll practice, hands-on.
              </h2>
              <p style={{ color: "#64748B", fontSize: 15, maxWidth: 620, margin: "0 auto", lineHeight: 1.75 }}>
                From SEO articles to ad copy to scripts — this internship covers the full modern content writing workflow.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
              {[
                "Blog Writing", "SEO Writing", "Keyword Research", "On-page SEO", "Copywriting",
                "Landing Page Copy", "Ad Copywriting", "Email Copywriting", "Newsletter Writing",
                "Social Media Content", "Instagram Captions", "LinkedIn Posts", "Twitter/X Threads",
                "Scriptwriting", "YouTube Scripts", "Reels & Shorts Scripts", "Content Strategy",
                "Content Calendars", "Editorial Guidelines", "UX Writing", "Microcopy",
                "Proofreading", "Grammar & Style", "Fact-Checking", "Content Analytics",
                "Google Docs", "WordPress", "Grammarly", "SurferSEO", "Ahrefs", "Google Trends",
                "Storytelling", "Brand Voice",
              ].map((tool) => (
                <span key={tool} style={{
                  fontSize: 13.5, fontWeight: 600, color: "#0D1F3C", background: "#F8FAFC",
                  border: "1px solid #E2E8F0", borderRadius: 999, padding: "9px 18px",
                  transition: "all 0.2s", cursor: "default",
                }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "#22C55E"; e.currentTarget.style.background = "rgba(34,197,94,0.06)"; e.currentTarget.style.color = "#16803C"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.background = "#F8FAFC"; e.currentTarget.style.color = "#0D1F3C"; }}>
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="curriculum" style={{ padding: "88px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Curriculum</span>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#0D1F3C", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                A clear path from month 1 to month 6.
              </h2>
              <p style={{ color: "#64748B", fontSize: 16, lineHeight: 1.7 }}>
                Progress through structured monthly goals, practical assignments, and mentor-led writing projects.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gap: 20 }}>
            {MONTHS.map((item, index) => (
              <Reveal key={item.month} delay={index * 70}>
                <div style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 20, alignItems: "start" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: item.color, marginTop: 4 }} />
                    {index < MONTHS.length - 1 && <div style={{ flex: 1, width: 2, background: "#E2E8F0", marginTop: 8 }} />}
                  </div>
                  <div style={{ padding: 26, background: "white", borderRadius: 20, border: "1px solid #E2E8F0" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: item.color, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10 }}>{item.month}</div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0D1F3C", margin: "0 0 10px" }}>{item.title}</h3>
                    <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: "88px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Alumni</span>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#0D1F3C", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                Real stories from students who launched writing careers.
              </h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {TESTIMONIALS.map((item, index) => (
              <Reveal key={item.name} delay={index * 70}>
                <div style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: 28, transition: "transform 0.25s, box-shadow 0.25s" }}
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

      <section style={{ padding: "88px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>FAQ</span>
              <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, color: "#0D1F3C", margin: "12px 0 16px", letterSpacing: "-0.02em" }}>
                Common questions about the content writing internship.
              </h2>
            </div>
          </Reveal>
          <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "0 24px" }}>
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
              Content Writing Internship &middot; SEO Content Writer Internship &middot; Copywriting Internship &middot;
              Blog Writing Internship for Students &middot; Remote Content Writing Internship India &middot;
              Writing Internship with Certificate &middot; Social Media Content Internship &middot;
              Freelance Content Writer Training &middot; Scriptwriting Internship &middot; Content Strategy Internship &middot;
              Work From Home Writing Internship &middot; Internship with Job Offer &middot; Best Internship for English/Mass Comm Students
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ background: "#0D1F3C", padding: "88px 24px", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontSize: 46, marginBottom: 20 }}>📝</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 18px", letterSpacing: "-0.02em" }}>
              Launch your content writing internship in 1–6 months.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.76)", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
              Free to apply, crafted for real learning, and built to help you secure your first writing role.
            </p>
            <a href="mailto:supportthinkly.co@gmail.com" style={{ display: "inline-block", background: "#22C55E", color: "white", fontWeight: 700, fontSize: 16, padding: "16px 44px", borderRadius: 999, textDecoration: "none", boxShadow: "0 12px 40px rgba(34,197,94,0.25)", transition: "transform 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; }}>
              Apply for Content Writing Internship →
            </a>
          </Reveal>
        </div>
      </section>
       <Footer/>
    </main>
    
  );
}