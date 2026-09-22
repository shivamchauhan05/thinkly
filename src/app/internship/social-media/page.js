"use client";
import { useEffect, useRef, useState } from "react";
import Footer from '@/components/Footer'
import TechBackground from '@/components/TechBackground'
import { useApplyModal } from '@/components/ApplyModal'
import {
  Calendar,
  Palette,
  TrendingUp,
  Video,
  MessageCircle,
  BarChart3,
  DollarSign,
  Handshake,
  Search,
  PenLine,
  Brain,
  FolderOpen,
  Clock,
  Globe,
  Smartphone,
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
  { icon: Calendar, title: "Content Calendars & Planning", desc: "Plan monthly content calendars aligned to brand goals and key dates." },
  { icon: Palette, title: "Content Creation", desc: "Create posts, reels, carousels, and stories using real design and editing tools." },
  { icon: TrendingUp, title: "Social Media Strategy", desc: "Build platform-specific strategies for Instagram, LinkedIn, X, and Facebook." },
  { icon: Video, title: "Reels & Short-Form Video", desc: "Script, shoot, and edit short-form video content that holds attention." },
  { icon: MessageCircle, title: "Community Management", desc: "Manage comments, DMs, and audience engagement to build real communities." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Track reach, engagement, and growth metrics to prove what's working." },
  { icon: DollarSign, title: "Paid Social & Ads", desc: "Learn Meta Ads and boosted posts to grow reach beyond organic content." },
  { icon: Handshake, title: "Influencer & Brand Collabs", desc: "Coordinate influencer outreach, collaborations, and campaign partnerships." },
  { icon: Search, title: "Trend Research", desc: "Spot trending audio, formats, and hashtags before they peak." },
  { icon: PenLine, title: "Caption & Copywriting", desc: "Write scroll-stopping captions, hooks, and calls-to-action that convert." },
  { icon: Brain, title: "Brand Voice & Guidelines", desc: "Keep tone, visuals, and messaging consistent across every platform." },
  { icon: FolderOpen, title: "Portfolio & Case Studies", desc: "Package real campaign results into a portfolio recruiters can evaluate." },
];

const MONTHS = [
  { month: "Month 1", title: "Platform Foundations", desc: "Learn how Instagram, LinkedIn, X, and Facebook algorithms and formats actually work.", color: "#22C55E" },
  { month: "Month 2", title: "Content Creation", desc: "Create posts, reels, and carousels using Canva, CapCut, and other creator tools.", color: "#3B82F6" },
  { month: "Month 3", title: "Strategy & Calendars", desc: "Build a full content calendar and strategy for a real brand or project.", color: "#F59E0B" },
  { month: "Month 4", title: "Community & Engagement", desc: "Manage comments, DMs, and audience engagement to grow real communities.", color: "#EF4444" },
  { month: "Month 5", title: "Paid Ads & Analytics", desc: "Run small paid campaigns and learn to read analytics to improve performance.", color: "#8B5CF6" },
  { month: "Month 6", title: "Portfolio & Handoff", desc: "Finalize a campaign case study and prepare a portfolio for interviews.", color: "#94A3B8" },
];

const TESTIMONIALS = [
  { name: "Tanya Kapoor", role: "Social Media Intern → Social Media Manager", quote: "I went from posting randomly to running a real content calendar and reading analytics like a professional.", color: "#0D1F3C" },
  { name: "Aditya Nair", role: "Content Intern → Social Media Strategist", quote: "Working on real brand accounts taught me more about growth than any certification course could.", color: "#22C55E" },
  { name: "Simran Kaur", role: "Social Media Intern → Community Manager", quote: "The mentor feedback on my reels and captions made a visible difference in engagement within weeks.", color: "#3B82F6" },
];

const FAQS = [
  { q: "Do I need a large personal following to join?", a: "No. The internship focuses on brand accounts and real campaigns, not your personal social media following." },
  { q: "What platforms will I work on?", a: "You'll work across Instagram, LinkedIn, X (Twitter), Facebook, and short-form video platforms like Reels and YouTube Shorts." },
  { q: "What tools will I learn?", a: "You'll use Canva, CapCut, Meta Business Suite, scheduling tools, and analytics dashboards used by real teams." },
  { q: "Is the internship flexible?", a: "Yes — choose a 1, 3, or 6 month track, and we'll match you with a mentor and project rhythm that fits your availability." },
  { q: "Will I get a certificate?", a: "Yes. You receive a verified social media marketing certificate plus a portfolio-ready case study at completion." },
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

export default function SocialMediaInternshipPage() {
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
                Social Media
                <span style={{ display: "block", color: "#22C55E", position: "relative" }}>
                  Internship
                  <span ref={lineRef} style={{ display: "block", height: 3, background: "rgba(34,197,94,0.35)", borderRadius: 4, marginTop: 6, width: "0%" }} />
                </span>
              </h1>

              <p style={{ fontSize: 17, color: "#94A3B8", lineHeight: 1.75, maxWidth: 560, margin: "0 0 32px" }}>
                Start your marketing career with a flexible 1 to 6 month social media internship. Learn content creation, strategy, community management, and paid ads — build a real portfolio and graduate with a verified certificate.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
                {[
                  { icon: Clock, label: "Flexible duration", value: "1–6 months" },
                  { icon: Globe, label: "Remote ready", value: "Work from anywhere" },
                  { icon: Smartphone, label: "Project-based", value: "Real brand campaigns" },
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
                { label: "Content Creation", value: "Posts, Reels, Carousels" },
                { label: "Strategy", value: "Content Calendars, Planning" },
                { label: "Community", value: "Comments, DMs, Engagement" },
                { label: "Paid Ads", value: "Meta Ads, Boosted Posts" },
                { label: "Analytics", value: "Reach, Engagement, Growth" },
                { label: "Video", value: "Reels, Shorts, Scripting" },
                { label: "Tools", value: "Canva, CapCut, Scheduling Tools" },
                { label: "Copywriting", value: "Captions, Hooks, CTAs" },
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
                Marketing skills real brands hire for.
              </h2>
              <p style={{ color: "#94A3B8", fontSize: 16, maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
                Every module moves you from posting content to running a full social media strategy with measurable results.
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
              <SectionTag>marketing_toolkit</SectionTag>
              <h2 style={{ fontSize: "clamp(26px,4vw,36px)", fontWeight: 900, color: "#F8FAFC", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                Every platform and tool you'll work with, hands-on.
              </h2>
              <p style={{ color: "#94A3B8", fontSize: 15, maxWidth: 620, margin: "0 auto", lineHeight: 1.75 }}>
                From content creation to paid ads to analytics — this internship covers the full modern social media marketing workflow.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
              {[
                "Instagram Marketing", "LinkedIn Marketing", "Facebook Marketing", "X (Twitter) Marketing",
                "YouTube Shorts", "Reels Creation", "Content Calendars", "Social Media Strategy",
                "Community Management", "Influencer Marketing", "Meta Ads", "Paid Social Campaigns",
                "Hashtag Strategy", "Trend Research", "Caption Writing", "Copywriting for Social",
                "Brand Voice", "Analytics & Reporting", "Canva", "CapCut", "Adobe Premiere Rush",
                "Meta Business Suite", "Buffer", "Hootsuite", "Later", "Google Analytics",
                "Short-Form Video Editing", "Graphic Design Basics", "Growth Hacking", "Engagement Strategy",
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
                Progress through structured monthly goals, practical assignments, and mentor-led brand campaigns.
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
                Real stories from students who launched marketing careers.
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
                Common questions about the social media internship.
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
              Social Media Marketing Internship &middot; Social Media Manager Internship &middot; Content Creator Internship &middot;
              Digital Marketing Internship for Students &middot; Remote Social Media Internship India &middot;
              Social Media Internship with Certificate &middot; Instagram Marketing Internship &middot;
              Community Management Internship &middot; Meta Ads Internship &middot; Influencer Marketing Internship &middot;
              Work From Home Marketing Internship &middot; Internship with Job Offer &middot; Best Internship for Marketing Students
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "88px 24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.08)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(34,197,94,0.08)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Reveal>
            <Smartphone size={44} color="#4ADE80" style={{ marginBottom: 20 }} strokeWidth={1.6} />
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 18px", letterSpacing: "-0.02em", color: "#F8FAFC" }}>
              Launch your social media internship in 1–6 months.
            </h2>
            <p style={{ color: "rgba(226,232,240,0.6)", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
              Free to apply, crafted for real learning, and built to help you secure your first marketing role.
            </p>
            <a href="mailto:supportthinkly.co@gmail.com" style={{ display: "inline-block", background: "#22C55E", color: "#08150C", fontWeight: 700, fontSize: 16, padding: "16px 44px", borderRadius: 999, textDecoration: "none", boxShadow: "0 12px 40px rgba(34,197,94,0.3)", transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.background = "#16a34a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.currentTarget.style.background = "#22C55E"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Apply for Social Media Internship →
            </a>
          </Reveal>
        </div>
      </section>
       <Footer/>
      </div>
    </main>
  );
}
