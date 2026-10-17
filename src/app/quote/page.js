import TechBackground from "@/components/TechBackground";
import QuoteForm from "@/components/QuoteForm";
import { Terminal, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Get a Free Quote | Thinklyedu",
  description:
    "Share your project requirements and get a transparent, no-obligation quote from Thinklyedu within 24 hours. Websites, apps, AI automation, EdTech and digital marketing.",
  alternates: { canonical: "https://thinklyedu.com/quote" },
  openGraph: {
    title: "Get a Free Quote | Thinklyedu",
    description:
      "Share your project requirements and get a transparent, no-obligation quote within 24 hours.",
    url: "https://thinklyedu.com/quote",
    siteName: "Thinklyedu",
    type: "website",
  },
};

export default function QuotePage() {
  return (
    <main
      className="font-sans antialiased"
      style={{ position: "relative", color: "#F1F5F9", background: "#0a1628" }}
    >
      <TechBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <section className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest rounded-lg px-4 py-2"
              style={{
                color: "#4ADE80",
                border: "1px solid rgba(34,197,94,0.3)",
                background: "rgba(34,197,94,0.08)",
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              }}
            >
              <Terminal size={13} /> get_a_quote
            </span>
            <h1
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
              style={{ color: "#F8FAFC", margin: "20px 0 14px", lineHeight: 1.1 }}
            >
              Tell Us About
              <span style={{ color: "#22C55E" }}> Your Project.</span>
            </h1>
            <p
              style={{
                color: "#94A3B8",
                fontSize: 16,
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Share a few details and we&apos;ll send you a clear plan, timeline
              and transparent quote — with no cost and no obligation.
            </p>
          </div>

          <QuoteForm />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 24,
              flexWrap: "wrap",
              marginTop: 32,
            }}
          >
            <a
              href="mailto:supportthinkly.co@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#94A3B8",
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
                color: "#94A3B8",
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              <Phone size={16} color="#4ADE80" /> +91 98185 09083
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
