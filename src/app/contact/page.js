"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import TechBackground from "@/components/TechBackground";
import { useApplyModal } from "@/components/ApplyModal";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Globe,
  Smartphone,
  Bot,
  MonitorPlay,
  Megaphone,
  Sparkles,
  Zap,
  ShieldCheck,
  Users,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Headphones,
} from "lucide-react";

// ── CONFIG: apni details yahan badlo ───────────────────────────────────────────
const CONTACT = {
  email: "supportthinkly.co@gmail.com",
  phoneDisplay: "+91 98185 09083",
  phoneTel: "+919818509083",
  whatsapp: "919818509083", // country code + number, bina + ke
  address: "", // optional: jaise "Noida, Uttar Pradesh, India" (khaali chhodoge to card nahi dikhega)
  hours: "", // optional: jaise "Mon-Sat, 10:00 AM to 6:00 PM" (khaali chhodoge to card nahi dikhega)
};

// ── Scroll reveal ──────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0 }) {
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
  return (
    <div
      ref={ref}
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

const cardBase = {
  background: "rgba(255,255,255,0.03)",
  border: "1.5px solid rgba(255,255,255,0.08)",
  borderRadius: 20,
  padding: 28,
  transition: "all 0.3s",
};

const cardHover = {
  onMouseOver: (e) => {
    e.currentTarget.style.borderColor = "rgba(34,197,94,0.5)";
    e.currentTarget.style.background = "rgba(34,197,94,0.05)";
    e.currentTarget.style.transform = "translateY(-4px)";
  },
  onMouseOut: (e) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
    e.currentTarget.style.transform = "translateY(0)";
  },
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
        flexShrink: 0,
      }}
    >
      <Icon size={22} color="#4ADE80" strokeWidth={1.8} />
    </div>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────
function ContactHero() {
  return (
    <section
      className="section-py-lg"
      style={{ padding: "150px 24px 56px", textAlign: "center" }}
    >
      <div className="max-w-3xl mx-auto">
        <div style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.2s forwards" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#4ADE80",
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
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
            {"> contact --open"}
            <span style={{ animation: "blink 1s step-end infinite" }}>_</span>
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(38px,5vw,58px)",
            fontWeight: 900,
            lineHeight: 1.06,
            letterSpacing: "-0.03em",
            color: "#F8FAFC",
            margin: "0 0 20px",
            opacity: 0,
            animation: "fadeUp 0.7s ease 0.35s forwards",
          }}
        >
          Let&apos;s Talk.
          <span style={{ display: "block", color: "#22C55E" }}>
            {"<We're Listening />"}
          </span>
        </h1>

        <p
          style={{
            fontSize: 17,
            color: "#94A3B8",
            lineHeight: 1.75,
            maxWidth: 520,
            margin: "0 auto",
            opacity: 0,
            animation: "fadeUp 0.7s ease 0.5s forwards",
          }}
        >
          Have a project in mind, or want to start an internship? Send us a
          message and our team will get back to you.
        </p>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
      `}</style>
    </section>
  );
}

// ── Contact methods ────────────────────────────────────────────────────────────
function ContactCards() {
  const items = [
    {
      icon: Mail,
      title: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: Phone,
      title: "Call",
      value: CONTACT.phoneDisplay,
      href: `tel:${CONTACT.phoneTel}`,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat with us",
      href: `https://wa.me/${CONTACT.whatsapp}`,
      external: true,
    },
    CONTACT.address && {
      icon: MapPin,
      title: "Location",
      value: CONTACT.address,
    },
    CONTACT.hours && {
      icon: Clock,
      title: "Working hours",
      value: CONTACT.hours,
    },
  ].filter(Boolean);

  return (
    <section style={{ padding: "24px 24px 56px" }}>
      <div
        className="max-w-6xl mx-auto rx-stack"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.min(items.length, 3)},1fr)`,
          gap: 20,
        }}
      >
        {items.map((it, i) => {
          const Wrapper = it.href ? "a" : "div";
          return (
            <Reveal key={it.title} delay={i * 70}>
              <Wrapper
                {...(it.href
                  ? {
                      href: it.href,
                      target: it.external ? "_blank" : undefined,
                      rel: it.external ? "noopener noreferrer" : undefined,
                    }
                  : {})}
                style={{
                  ...cardBase,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  textDecoration: "none",
                  height: "100%",
                  boxSizing: "border-box",
                  padding: 22,
                }}
                {...(it.href ? cardHover : {})}
              >
                <IconBox icon={it.icon} />
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#4ADE80",
                      fontWeight: 700,
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                      marginBottom: 4,
                    }}
                  >
                    {it.title}
                  </div>
                  <div
                    style={{
                      fontSize: 14.5,
                      color: "#F1F5F9",
                      fontWeight: 600,
                      wordBreak: "break-word",
                    }}
                  >
                    {it.value}
                  </div>
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

// ── Form ───────────────────────────────────────────────────────────────────────
function ContactForm() {
  const { open: openApplyModal } = useApplyModal();
  const [type, setType] = useState("business");

  const services = ["Website", "Mobile App", "AI Automation", "Not sure yet"];
  const domains = [
    "Technology",
    "Design",
    "Marketing",
    "Content Writing",
    "Photography & Video",
    "Social Media",
  ];

  const buildMessage = (form) => {
    const f = new FormData(form);
    if (type === "business") {
      return (
        `Hi Thinklyedu! I am a business owner and I want to start a project.\n` +
        `Name: ${f.get("name")}\n` +
        `Email/Phone: ${f.get("contact")}\n` +
        `Service: ${f.get("topic")}\n` +
        `Details: ${f.get("message")}`
      );
    }
    return (
      `Hi Thinklyedu! I am a student and I want to apply for an internship.\n` +
      `Name: ${f.get("name")}\n` +
      `Email/Phone: ${f.get("contact")}\n` +
      `Domain: ${f.get("topic")}\n` +
      `College: ${f.get("college") || "-"}\n` +
      `About me: ${f.get("message")}`
    );
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const msg = buildMessage(e.currentTarget);
    window.open(
      `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  const sendEmail = (formEl) => {
    if (!formEl.reportValidity()) return;
    const msg = buildMessage(formEl);
    const subject =
      type === "business"
        ? "New project enquiry"
        : "Internship application enquiry";
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(msg)}`;
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

  const tabs = [
    { id: "business", label: "I have a project", icon: Briefcase },
    { id: "student", label: "I'm a student", icon: GraduationCap },
  ];

  return (
    <section
      className="section-py"
      style={{
        padding: "72px 24px 96px",
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <SectionTag>send_a_message</SectionTag>
            <h2
              style={{
                fontSize: "clamp(28px,4vw,38px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "#F8FAFC",
                margin: "12px 0 12px",
                lineHeight: 1.1,
              }}
            >
              How Can We <span style={{ color: "#22C55E" }}>Help?</span>
            </h2>
            <p style={{ color: "#94A3B8", fontSize: 16, margin: 0 }}>
              Choose what fits you and fill in the details.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 24,
            }}
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setType(t.id)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  borderRadius: 999,
                  padding: "10px 22px",
                  border: `1.5px solid ${type === t.id ? "#22C55E" : "rgba(255,255,255,0.12)"}`,
                  background: type === t.id ? "#22C55E" : "transparent",
                  color: type === t.id ? "#08150C" : "#94A3B8",
                  transition: "all 0.2s",
                }}
              >
                <t.icon size={15} /> {t.label}
              </button>
            ))}
          </div>

          <form
            key={type}
            onSubmit={sendWhatsApp}
            style={{
              ...cardBase,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <input name="name" required placeholder="Your name" style={field} />
            <input
              name="contact"
              required
              placeholder="Email or phone number"
              style={field}
            />

            <select
              name="topic"
              defaultValue={type === "business" ? services[0] : domains[0]}
              style={field}
            >
              {(type === "business" ? services : domains).map((o) => (
                <option key={o} value={o} style={{ color: "#000" }}>
                  {type === "business" ? `Service: ${o}` : `Domain: ${o}`}
                </option>
              ))}
            </select>

            {type === "student" && (
              <input
                name="college"
                placeholder="College name (optional)"
                style={field}
              />
            )}

            <textarea
              name="message"
              required
              rows={5}
              placeholder={
                type === "business"
                  ? "Tell us about your project, goals and timeline"
                  : "Tell us about your skills and why you want to intern with us"
              }
              style={{ ...field, resize: "vertical" }}
            />

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                type="submit"
                style={{
                  flex: 1,
                  minWidth: 180,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background: "#22C55E",
                  color: "#08150C",
                  fontWeight: 800,
                  fontSize: 15,
                  padding: "14px 24px",
                  borderRadius: 10,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 8px 28px rgba(34,197,94,0.28)",
                }}
              >
                <Send size={16} /> Send on WhatsApp
              </button>
              <button
                type="button"
                onClick={(e) => sendEmail(e.currentTarget.form)}
                style={{
                  flex: 1,
                  minWidth: 180,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background: "transparent",
                  color: "#E2E8F0",
                  fontWeight: 700,
                  fontSize: 15,
                  padding: "14px 24px",
                  borderRadius: 10,
                  border: "1.5px solid rgba(255,255,255,0.16)",
                  cursor: "pointer",
                }}
              >
                <Mail size={16} /> Send by Email
              </button>
            </div>
          </form>

          {type === "student" && (
            <p
              style={{
                textAlign: "center",
                color: "#94A3B8",
                fontSize: 13.5,
                marginTop: 20,
              }}
            >
              Want to apply directly?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openApplyModal();
                }}
                style={{
                  color: "#4ADE80",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                Open the application form <ArrowRight size={14} />
              </a>
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

// ── Help topics ────────────────────────────────────────────────────────────────
const HELP_TOPICS = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Business websites, landing pages and e-commerce stores built to convert.",
    href: "/services/website",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Custom Android and iOS apps for startups and growing brands.",
    href: "/services/app",
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Chatbots and workflow automation that save your team time every day.",
    href: "/services/ai-automation",
  },
  {
    icon: MonitorPlay,
    title: "EdTech Solutions",
    desc: "LMS platforms, online courses and learning apps for modern education.",
    href: "/services/edtech",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "SEO, paid ads and social media to grow your traffic and leads.",
    href: "/services/digital-marketing",
  },
  {
    icon: GraduationCap,
    title: "Internships",
    desc: "Free, mentor-led internships across 15+ domains for students.",
    href: "/internship",
  },
];

function HelpTopics() {
  return (
    <section style={{ padding: "24px 24px 64px" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <SectionTag>how_we_can_help</SectionTag>
            <h2
              style={{
                fontSize: "clamp(28px,4vw,38px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "#F8FAFC",
                margin: "12px 0 12px",
                lineHeight: 1.1,
              }}
            >
              Tell us what you need
            </h2>
            <p style={{ color: "#94A3B8", fontSize: 16, margin: 0, maxWidth: 560, marginInline: "auto", lineHeight: 1.7 }}>
              From a brand-new website to AI automation, pick a topic and our
              team will point you in the right direction.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {HELP_TOPICS.map((t, i) => (
            <Reveal key={t.title} delay={i * 60}>
              <Link
                href={t.href}
                style={{
                  ...cardBase,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  textDecoration: "none",
                  height: "100%",
                  boxSizing: "border-box",
                }}
                {...cardHover}
              >
                <IconBox icon={t.icon} />
                <div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#F1F5F9",
                      margin: "0 0 8px",
                    }}
                  >
                    {t.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.7, margin: 0 }}>
                    {t.desc}
                  </p>
                </div>
                <span
                  style={{
                    marginTop: "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: "#4ADE80",
                    fontSize: 13.5,
                    fontWeight: 700,
                  }}
                >
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Why contact us ─────────────────────────────────────────────────────────────
const REASONS = [
  { icon: Zap, title: "Fast response", desc: "We usually reply within 24 working hours — often much sooner." },
  { icon: Sparkles, title: "Free consultation", desc: "Get honest advice before you commit to anything." },
  { icon: ShieldCheck, title: "NDA & privacy", desc: "Your ideas, data and documents stay completely confidential." },
  { icon: Users, title: "Real humans", desc: "Talk to actual specialists who understand your goals." },
  { icon: CheckCircle2, title: "No-obligation quote", desc: "Transparent, itemised pricing with no hidden costs." },
  { icon: Headphones, title: "Dedicated support", desc: "One point of contact from first message to final delivery." },
];

function WhyContact() {
  return (
    <section style={{ padding: "64px 24px" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <SectionTag>why_reach_out</SectionTag>
            <h2
              style={{
                fontSize: "clamp(28px,4vw,38px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "#F8FAFC",
                margin: "12px 0 12px",
                lineHeight: 1.1,
              }}
            >
              What you can expect
            </h2>
            <p style={{ color: "#94A3B8", fontSize: 16, margin: 0, maxWidth: 560, marginInline: "auto", lineHeight: 1.7 }}>
              Reaching out should be simple. Here is how we make sure it is.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 50}>
              <div
                style={{
                  ...cardBase,
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <IconBox icon={r.icon} />
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#F1F5F9",
                    margin: "16px 0 8px",
                  }}
                >
                  {r.title}
                </h3>
                <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.7, margin: 0 }}>
                  {r.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Stats band ─────────────────────────────────────────────────────────────────
const STATS = [
  { value: "24 hrs", label: "Average reply time" },
  { value: "500+", label: "Projects & internships" },
  { value: "15+", label: "Domains covered" },
  { value: "4.8★", label: "Client satisfaction" },
];

function StatsBand() {
  return (
    <section style={{ padding: "16px 24px 64px" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{
              ...cardBase,
              gap: 24,
              textAlign: "center",
            }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: "clamp(24px,3vw,34px)", fontWeight: 900, color: "#4ADE80" }}>
                  {s.value}
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#94A3B8",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "How quickly will I get a reply?",
    a: "We usually respond within 24 working hours. For urgent requirements, message us on WhatsApp and we will get back to you as soon as possible.",
  },
  {
    q: "Is the consultation really free?",
    a: "Yes. You can share your idea or requirement and get honest guidance and a quote with no cost or obligation. You decide if and when to move ahead.",
  },
  {
    q: "Do you work with small businesses and startups?",
    a: "Absolutely. We work with everyone from solo founders and local businesses to established brands, and we scale the scope and budget to fit your goals.",
  },
  {
    q: "Do you sign NDAs and keep my idea private?",
    a: "Yes. We are happy to sign an NDA before you share details, and all project information is handled confidentially.",
  },
  {
    q: "Can I apply for an internship through this page?",
    a: "Yes. Switch to the “I'm a student” tab in the form above, or use the Apply Now button to open the full application form.",
  },
  {
    q: "What details should I include in my message?",
    a: "A short description of what you need, your goals, any timeline, and a rough budget range if you have one. The more context you share, the faster we can help.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "20px 0",
          fontFamily: "inherit",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: 15.5, fontWeight: 600, color: "#F1F5F9" }}>{q}</span>
        <ChevronDown
          size={18}
          color="#4ADE80"
          style={{
            flexShrink: 0,
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "none",
          }}
        />
      </button>
      {open && (
        <p
          style={{
            fontSize: 14.5,
            color: "#94A3B8",
            lineHeight: 1.8,
            paddingBottom: 20,
            margin: 0,
            paddingRight: 32,
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

function ContactFAQ() {
  return (
    <section style={{ padding: "24px 24px 64px" }}>
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <SectionTag>faq</SectionTag>
            <h2
              style={{
                fontSize: "clamp(28px,4vw,38px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "#F8FAFC",
                margin: "12px 0 12px",
                lineHeight: 1.1,
              }}
            >
              Frequently asked questions
            </h2>
            <p style={{ color: "#94A3B8", fontSize: 16, margin: 0 }}>
              Quick answers before you reach out.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1.5px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              padding: "4px 24px",
            }}
          >
            {FAQS.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Final CTA ──────────────────────────────────────────────────────────────────
function FinalCTA() {
  const { open: openApplyModal } = useApplyModal();
  return (
    <section style={{ padding: "16px 24px 110px" }}>
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div
            style={{
              borderRadius: 24,
              padding: "48px 32px",
              textAlign: "center",
              background: "rgba(34,197,94,0.05)",
              border: "1.5px solid rgba(34,197,94,0.22)",
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <HelpCircle size={30} color="#4ADE80" strokeWidth={1.8} />
            </div>
            <h2
              style={{
                fontSize: "clamp(26px,4vw,36px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "#F8FAFC",
                margin: "0 0 14px",
                lineHeight: 1.1,
              }}
            >
              Still have a question?
            </h2>
            <p
              style={{
                color: "#94A3B8",
                fontSize: 16,
                lineHeight: 1.75,
                maxWidth: 520,
                margin: "0 auto 28px",
              }}
            >
              Reach out on WhatsApp, drop us an email, or open the application
              form — whichever is easiest for you.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#22C55E",
                  color: "#08150C",
                  fontWeight: 800,
                  fontSize: 15,
                  padding: "14px 30px",
                  borderRadius: 999,
                  textDecoration: "none",
                  boxShadow: "0 8px 28px rgba(34,197,94,0.28)",
                }}
              >
                <MessageCircle size={17} /> Chat on WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: "#E2E8F0",
                  fontWeight: 700,
                  fontSize: 15,
                  padding: "14px 30px",
                  borderRadius: 999,
                  textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.16)",
                }}
              >
                <Mail size={17} /> Email us
              </a>
              <button
                type="button"
                onClick={() => openApplyModal()}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: "#4ADE80",
                  fontWeight: 700,
                  fontSize: 15,
                  padding: "14px 30px",
                  borderRadius: 999,
                  border: "1.5px solid rgba(34,197,94,0.35)",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Apply Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Page export ────────────────────────────────────────────────────────────────
export default function ContactPage() {
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
        <ContactHero />
        <ContactCards />
        <HelpTopics />
        <ContactForm />
        <StatsBand />
        <WhyContact />
        <ContactFAQ />
        <FinalCTA />
      </div>
    </main>
  );
}