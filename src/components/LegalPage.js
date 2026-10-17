import Link from "next/link";
import { Fragment } from "react";
import TechBackground from "@/components/TechBackground";
import { Terminal, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";

const card = {
  background: "rgba(255,255,255,0.03)",
  border: "1.5px solid rgba(255,255,255,0.08)",
  borderRadius: 16,
  padding: "24px 24px",
};

const metaBox = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  background: "rgba(34,197,94,0.06)",
  border: "1px solid rgba(34,197,94,0.25)",
  borderRadius: 12,
  padding: "16px 20px",
  marginTop: 24,
  textAlign: "left",
};

export default function LegalPage({
  badge,
  title,
  titleAccent,
  meta = [],
  intro,
  sections = [],
  crossLinks = [],
}) {
  return (
    <main
      className="font-sans antialiased"
      style={{ position: "relative", color: "#F1F5F9", background: "#0a1628" }}
    >
      <TechBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <section className="px-6 pt-32 pb-24 max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: "#4ADE80", textDecoration: "none", marginBottom: 28 }}
          >
            <ArrowLeft size={15} /> Back to home
          </Link>

          <div style={{ textAlign: "center", marginBottom: 40 }}>
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
                textTransform: "uppercase",
                border: "1px solid rgba(34,197,94,0.3)",
                borderRadius: 999,
                padding: "6px 16px",
                background: "rgba(34,197,94,0.1)",
              }}
            >
              <Terminal size={13} /> {badge}
            </span>

            <h1
              style={{
                fontSize: "clamp(28px,5vw,44px)",
                fontWeight: 800,
                color: "#F8FAFC",
                margin: "20px 0 14px",
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
              }}
            >
              {title} <span style={{ color: "#22C55E" }}>{titleAccent}</span>
            </h1>

            {intro && (
              <p
                style={{
                  color: "#94A3B8",
                  fontSize: 15.5,
                  maxWidth: 560,
                  margin: "0 auto",
                  lineHeight: 1.75,
                }}
              >
                {intro}
              </p>
            )}

            {meta.length > 0 && (
              <div style={metaBox}>
                {meta.map((m) => (
                  <p
                    key={m.label}
                    style={{
                      margin: 0,
                      fontSize: 13,
                      color: "#CBD5E1",
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        color: "#4ADE80",
                        fontWeight: 700,
                        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                        marginRight: 6,
                      }}
                    >
                      {m.label}:
                    </span>
                    {m.value}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {sections.map((s, i) => (
              <Fragment key={s.title}>
                {s.part && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      marginTop: i === 0 ? 0 : 14,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#4ADE80",
                        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.part}
                    </span>
                    <span
                      style={{
                        flex: 1,
                        height: 1,
                        background:
                          "linear-gradient(90deg, rgba(34,197,94,0.4), rgba(255,255,255,0.06))",
                      }}
                    />
                  </div>
                )}

                <section style={card}>
                  <h2
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#F8FAFC",
                    margin: "0 0 14px",
                    lineHeight: 1.3,
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: "rgba(34,197,94,0.12)",
                      border: "1px solid rgba(34,197,94,0.35)",
                      color: "#4ADE80",
                      fontSize: 13,
                      fontWeight: 700,
                      flexShrink: 0,
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    }}
                  >
                    {i + 1}
                  </span>
                  {s.title}
                </h2>

                {(s.paragraphs || []).map((p, j) => (
                  <p
                    key={j}
                    style={{
                      color: "#94A3B8",
                      fontSize: 15,
                      lineHeight: 1.75,
                      margin: j === (s.paragraphs.length - 1) && !s.list && !s.note ? 0 : "0 0 12px",
                    }}
                  >
                    {p}
                  </p>
                ))}

                {s.list && (
                  <ul
                    style={{
                      margin: "6px 0 0",
                      padding: 0,
                      listStyle: "none",
                      display: "grid",
                      gap: 10,
                    }}
                  >
                    {s.list.map((item, j) => {
                      const isObj = typeof item === "object" && item !== null;
                      return (
                        <li
                          key={j}
                          style={{
                            display: "flex",
                            gap: 10,
                            color: "#CBD5E1",
                            fontSize: 14.5,
                            lineHeight: 1.7,
                          }}
                        >
                          <span
                            style={{
                              marginTop: 9,
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              background: "#22C55E",
                              flexShrink: 0,
                            }}
                          />
                          <span>
                            {isObj ? (
                              <>
                                <strong style={{ color: "#E2E8F0", fontWeight: 600 }}>
                                  {item.label}
                                </strong>{" "}
                                {item.text}
                              </>
                            ) : (
                              item
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}

                {s.note && (
                  <p
                    style={{
                      marginTop: 14,
                      marginBottom: 0,
                      fontSize: 13.5,
                      lineHeight: 1.7,
                      color: "#FCD34D",
                      background: "rgba(250,204,21,0.06)",
                      border: "1px solid rgba(250,204,21,0.22)",
                      borderRadius: 10,
                      padding: "12px 14px",
                    }}
                  >
                    {s.note}
                  </p>
                )}
              </section>
            </Fragment>
          ))}
          </div>

          {/* Contact */}
          <div
            style={{
              ...card,
              marginTop: 24,
              border: "1.5px solid rgba(34,197,94,0.28)",
              background: "rgba(34,197,94,0.05)",
            }}
          >
            <h3
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#F8FAFC",
                margin: "0 0 8px",
              }}
            >
              Questions or concerns?
            </h3>
            <p
              style={{
                color: "#94A3B8",
                fontSize: 14.5,
                lineHeight: 1.7,
                margin: "0 0 16px",
              }}
            >
              Reach out to the Thinklyedu team and we will get back to you.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 18 }}>
              <a
                href="mailto:supportthinkly.co@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#E2E8F0",
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                <Mail size={16} color="#4ADE80" /> supportthinkly.co@gmail.com
              </a>
              <a
                href="tel:+919818509083"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#E2E8F0",
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                <Phone size={16} color="#4ADE80" /> +91 98185 09083
              </a>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#E2E8F0",
                  fontSize: 14,
                }}
              >
                <MapPin size={16} color="#4ADE80" /> Noida, Uttar Pradesh, India
              </span>
            </div>
          </div>

          {/* Cross links */}
          {crossLinks.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 24,
              }}
            >
              {crossLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-full px-5 py-2.5 text-sm font-semibold transition-all"
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.16)",
                    color: "#E2E8F0",
                    textDecoration: "none",
                  }}
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
