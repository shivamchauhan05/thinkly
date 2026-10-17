"use client";
import { useState } from "react";
import Link from "next/link";
import TechBackground from "@/components/TechBackground";
import { useQuoteModal } from "@/components/QuoteModal";
import { SERVICES_DATA, RELATED_SERVICES } from "@/lib/services-data";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  Phone,
  Sparkles,
  Rocket,
  Target,
  ShieldCheck,
} from "lucide-react";

const SITE_DOMAIN = "thinklyedu.com";
const SITE_URL = "https://thinklyedu.com";
const WHATSAPP_URL = "https://wa.me/919818509083";

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
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "18px 0",
          fontFamily: "inherit",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: "#F1F5F9", paddingRight: 20 }}>
          {q}
        </span>
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
            fontSize: 14,
            color: "#94A3B8",
            lineHeight: 1.75,
            paddingBottom: 18,
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

const HIGHLIGHTS = [
  { icon: Sparkles, label: "Strategy-first execution" },
  { icon: Rocket, label: "Fast turnaround" },
  { icon: Target, label: "Growth-focused results" },
  { icon: ShieldCheck, label: "Verified & secure delivery" },
];

export default function ServiceDetail({ slug }) {
  const { open: openQuoteModal } = useQuoteModal();
  const {
    title,
    badge,
    subtitle,
    intro,
    stats,
    offerings,
    features,
    useCases,
    technologies,
    process,
    benefits,
    faqs,
  } = SERVICES_DATA[slug];
  const related = RELATED_SERVICES.filter(
    (r) => r.href !== `/services/${slug}`
  );

  return (
    <section
      className="min-h-screen px-4 py-20 sm:px-6 lg:px-8"
      style={{ position: "relative", background: "#0a1628", color: "#F1F5F9" }}
    >
      <TechBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm" style={{ color: "#94A3B8" }}>
            <Link
              href="/"
              className="font-medium transition-colors"
              style={{ color: "#4ADE80" }}
            >
              Home
            </Link>
            <span style={{ color: "rgba(148,163,184,0.5)" }}>/</span>
            <span style={{ color: "rgba(148,163,184,0.7)" }}>Services</span>
            <span style={{ color: "rgba(148,163,184,0.5)" }}>/</span>
            <span style={{ color: "#E2E8F0" }}>{title}</span>
          </div>

          {/* Hero */}
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              {badge ? (
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest"
                  style={{
                    color: "#4ADE80",
                    border: "1px solid rgba(34,197,94,0.3)",
                    background: "rgba(34,197,94,0.08)",
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  }}
                >
                  {badge}
                </span>
              ) : null}
              <h1
                className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
                style={{ color: "#F8FAFC" }}
              >
                {title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg" style={{ color: "#94A3B8" }}>
                {subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={openQuoteModal}
                  className="rounded-full px-7 py-3 text-sm font-bold transition-all inline-block"
                  style={{
                    background: "#22C55E",
                    color: "#08150C",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "none",
                    boxShadow: "0 8px 28px rgba(34,197,94,0.28)",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = "#16a34a")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "#22C55E")}
                >
                  Get a Free Quote →
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all"
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
                  <MessageCircle size={16} /> Talk to us
                </a>
              </div>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1.5px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#22C55E" }}
              >
                Why Thinklyedu
              </p>
              <div className="mt-4 space-y-3 text-sm" style={{ color: "#94A3B8" }}>
                {HIGHLIGHTS.map((item) => (
                  <p key={item.label} className="flex items-start gap-2.5">
                    <item.icon
                      size={16}
                      color="#4ADE80"
                      strokeWidth={1.8}
                      style={{ flexShrink: 0, marginTop: 2 }}
                    />
                    <span>{item.label}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Intro */}
          <div className="mt-14 max-w-3xl">
            {intro.map((para, i) => (
              <p key={i} className="mb-4 text-base leading-7" style={{ color: "#CBD5E1" }}>
                {para}
              </p>
            ))}
          </div>

          {/* Stats */}
          {stats && (
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-5 text-center"
                  style={{
                    background: "rgba(34,197,94,0.04)",
                    border: "1.5px solid rgba(34,197,94,0.18)",
                  }}
                >
                  <div className="text-2xl font-extrabold md:text-3xl" style={{ color: "#4ADE80" }}>
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wide" style={{ color: "#94A3B8" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Offerings */}
          <section className="mt-16">
            <h2 className="text-2xl font-extrabold md:text-3xl" style={{ color: "#F8FAFC" }}>
              What we offer
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {offerings.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-6 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1.5px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      background: "rgba(34,197,94,0.1)",
                      border: "1px solid rgba(34,197,94,0.25)",
                    }}
                  >
                    <item.icon size={20} color="#4ADE80" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold" style={{ color: "#F1F5F9" }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6" style={{ color: "#94A3B8" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* What's included */}
          {features && (
            <section className="mt-16">
              <h2 className="text-2xl font-extrabold md:text-3xl" style={{ color: "#F8FAFC" }}>
                What&apos;s included
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6" style={{ color: "#94A3B8" }}>
                Every {title.toLowerCase()} project comes with the essentials you need to launch and grow with confidence.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-2.5 rounded-xl p-4 text-sm"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1.5px solid rgba(255,255,255,0.08)",
                      color: "#CBD5E1",
                    }}
                  >
                    <CheckCircle2 size={16} color="#22C55E" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Use cases */}
          {useCases && (
            <section className="mt-16">
              <h2 className="text-2xl font-extrabold md:text-3xl" style={{ color: "#F8FAFC" }}>
                Who it&apos;s for
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6" style={{ color: "#94A3B8" }}>
                {title} services built for a wide range of teams and industries.
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {useCases.map((u) => (
                  <div
                    key={u.title}
                    className="rounded-2xl p-6"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1.5px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-lg"
                        style={{
                          background: "rgba(34,197,94,0.1)",
                          border: "1px solid rgba(34,197,94,0.25)",
                        }}
                      >
                        <u.icon size={17} color="#4ADE80" strokeWidth={1.8} />
                      </span>
                      <h3 className="text-base font-semibold" style={{ color: "#F1F5F9" }}>
                        {u.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-6" style={{ color: "#94A3B8" }}>
                      {u.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technologies */}
          {technologies && (
            <section className="mt-16">
              <h2 className="text-2xl font-extrabold md:text-3xl" style={{ color: "#F8FAFC" }}>
                Tools &amp; technologies we use
              </h2>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full px-4 py-2 text-sm font-medium"
                    style={{
                      color: "#CBD5E1",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Process */}
          <section className="mt-16">
            <h2 className="text-2xl font-extrabold md:text-3xl" style={{ color: "#F8FAFC" }}>
              Our process
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {process.map((step, i) => (
                <div
                  key={step.title}
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1.5px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="mb-3 text-sm font-bold"
                    style={{
                      color: "#22C55E",
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    }}
                  >
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: "#F1F5F9" }}>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6" style={{ color: "#94A3B8" }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mt-16">
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: "rgba(34,197,94,0.04)",
                border: "1.5px solid rgba(34,197,94,0.2)",
              }}
            >
              <h2 className="mb-5 text-xl font-bold md:text-2xl" style={{ color: "#F8FAFC" }}>
                Why choose us
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {benefits.map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "#CBD5E1" }}
                  >
                    <CheckCircle2 size={16} color="#22C55E" style={{ flexShrink: 0 }} />
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mx-auto mt-16 max-w-2xl">
            <h2
              className="mb-6 text-center text-2xl font-extrabold md:text-3xl"
              style={{ color: "#F8FAFC" }}
            >
              Frequently asked questions
            </h2>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1.5px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "0 24px",
              }}
            >
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </section>

          {/* Related services */}
          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-extrabold md:text-3xl" style={{ color: "#F8FAFC" }}>
                Explore other services
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="group flex items-center justify-between rounded-2xl p-5 transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1.5px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "#F1F5F9" }}
                    >
                      {r.label}
                    </span>
                    <ArrowRight
                      size={16}
                      color="#4ADE80"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="mt-16 text-center">
            <h2 className="text-2xl font-extrabold md:text-3xl" style={{ color: "#F8FAFC" }}>
              Ready to get started?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6" style={{ color: "#94A3B8" }}>
              Tell us about your goals and we will share a clear plan, timeline, and quote — with{" "}
              {SITE_DOMAIN}.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={openQuoteModal}
                className="rounded-full px-8 py-3 text-sm font-bold transition-all inline-block"
                style={{
                  background: "#22C55E",
                  color: "#08150C",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "none",
                  boxShadow: "0 8px 28px rgba(34,197,94,0.28)",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "#16a34a")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#22C55E")}
              >
                Get a Free Quote →
              </button>
              <a
                href={`tel:+919818509083`}
                className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold transition-all"
                style={{ border: "1.5px solid rgba(255,255,255,0.16)", color: "#E2E8F0" }}
              >
                <Phone size={16} /> Call now
              </a>
            </div>
            <p className="mt-6 text-xs" style={{ color: "#64748B" }}>
              Official website:{" "}
              <a href={SITE_URL} style={{ color: "#4ADE80", textDecoration: "none" }}>
                {SITE_DOMAIN}
              </a>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
