"use client";

import Head from "next/head";
import Footer from '@/components/Footer'
import CertificatePreview from '@/components/CertificatePreview'

// ── SEO Metadata (App Router ke liye export karein) ───────────────────────────
// export const metadata = {
//   title: "Internship Certificate | Thinklyedu — Verified Student Certificates",
//   description:
//     "Get a verified internship certificate from Thinklyedu. Skill-linked, recruiter-recognized certificates for students after completing real internships in Marketing, Design, Tech, Finance & more.",
//   keywords: [
//     "internship certificate",
//     "free internship certificate India",
//     "verified internship certificate for students",
//     "internship certificate online",
//     "Thinklyedu certificate",
//     "internship certificate for college students",
//     "digital marketing internship certificate",
//     "free internship with certificate",
//     "online internship certificate 2024",
//     "internship certificate for resume",
//     "skill certificate India",
//     "student internship certificate",
//     "internship certificate LinkedIn",
//     "certificate after internship",
//     "free online internship certificate India",
//   ].join(", "),
//   openGraph: {
//     title: "Free Verified Internship Certificate | Thinklyedu",
//     description:
//       "Complete a real internship and earn a skill-linked certificate recognized by top recruiters. 100% free for students across India.",
//     type: "website",
//     url: "https://thinklyedu.com/certificate",
//     siteName: "Thinklyedu",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Free Internship Certificate | Thinklyedu",
//     description:
//       "Real internships. Verified certificates. 100% free for students in India.",
//   },
//   alternates: {
//     canonical: "https://thinklyedu.com/certificate",
//   },
// };

// ─────────────────────────────────────────────────────────────────────────────
import { useEffect, useRef, useState } from "react";
import { useApplyModal } from "@/components/ApplyModal";

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
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

// ── Certificate Preview Component ─────────────────────────────────────────────
// function CertificatePreview({ name = "Priya Sharma", domain = "Marketing" }) {
//   return (
//     <div style={{
//       background: "white",
//       border: "2px solid #E2E8F0",
//       borderRadius: 20,
//       padding: "36px 40px",
//       maxWidth: 580,
//       margin: "0 auto",
//       position: "relative",
//       boxShadow: "0 32px 80px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
//       fontFamily: "'Georgia', serif",
//     }}>
//       {/* Top green border */}
//       <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: "linear-gradient(90deg,#22C55E,#16a34a)", borderRadius: "20px 20px 0 0" }} />
//       {/* Corner decorations */}
//       {[{ top: 16, left: 16 }, { top: 16, right: 16 }, { bottom: 16, left: 16 }, { bottom: 16, right: 16 }].map((style, i) => (
//         <div key={i} style={{ position: "absolute", width: 24, height: 24, ...style }}>
//           <svg viewBox="0 0 24 24" fill="none">
//             <path d="M2 2 L22 2 L22 22" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" fill="none"
//               style={{ transform: i === 1 ? "scaleX(-1)" : i === 2 ? "scaleY(-1)" : i === 3 ? "scale(-1,-1)" : "none", transformOrigin: "center" }} />
//           </svg>
//         </div>
//       ))}

//       {/* Logo + Org */}
//       <div style={{ textAlign: "center", marginBottom: 20 }}>
//         <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#0D1F3C", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
//           <span style={{ color: "#22C55E", fontWeight: 900, fontSize: 22, fontFamily: "Inter, sans-serif" }}>T</span>
//         </div>
//         <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#94A3B8", fontFamily: "Inter, sans-serif" }}>Thinklyedu</div>
//       </div>

//       {/* Title */}
//       <div style={{ textAlign: "center", marginBottom: 18 }}>
//         <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#94A3B8", fontFamily: "Inter, sans-serif", marginBottom: 6 }}>Certificate of Completion</div>
//         <div style={{ width: 80, height: 1, background: "linear-gradient(90deg,transparent,#22C55E,transparent)", margin: "0 auto 14px" }} />
//         <div style={{ fontSize: 12, color: "#64748B", fontFamily: "Inter, sans-serif" }}>This is to certify that</div>
//       </div>

//       {/* Name */}
//       <div style={{ textAlign: "center", marginBottom: 12 }}>
//         <div style={{ fontSize: 34, fontWeight: 700, color: "#0D1F3C", letterSpacing: "-0.01em", fontStyle: "italic", lineHeight: 1.1 }}>{name}</div>
//         <div style={{ width: 200, height: 2, background: "linear-gradient(90deg,transparent,#0D1F3C,transparent)", margin: "8px auto 0" }} />
//       </div>

//       {/* Body text */}
//       <div style={{ textAlign: "center", marginBottom: 24 }}>
//         <p style={{ fontSize: 12.5, color: "#64748B", lineHeight: 1.8, margin: 0, fontFamily: "Inter, sans-serif" }}>
//           has successfully completed the <strong style={{ color: "#0D1F3C" }}>{domain} Internship Program</strong><br />
//           at Thinklyedu, demonstrating professional skills and commitment<br />
//           to real-world project delivery.
//         </p>
//       </div>

//       {/* Date + Cert ID */}
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 20 }}>
//         <div style={{ textAlign: "center" }}>
//           {/* SVG Signature */}
//           <svg width="110" height="40" viewBox="0 0 110 40" style={{ display: "block", marginBottom: 4 }}>
//             <path d="M8 28 C14 20, 18 14, 22 18 C26 22, 24 30, 28 26 C32 22, 34 16, 38 20 C40 22, 38 28, 42 24 C46 20, 48 16, 52 22 C54 25, 52 30, 56 26 C60 22, 63 16, 68 22 C70 25, 68 30, 72 26 C76 22, 80 18, 84 22 C88 26, 86 32, 90 28 C94 24, 96 20, 100 24"
//               stroke="#0D1F3C" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//             <path d="M6 36 C30 34, 60 34, 100 36" stroke="#22C55E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
//           </svg>
//           <div style={{ fontSize: 11, fontWeight: 700, color: "#0D1F3C", fontFamily: "Inter, sans-serif" }}>Prashant Kumar</div>
//           <div style={{ fontSize: 10, color: "#94A3B8", fontFamily: "Inter, sans-serif" }}>Human Resources, Thinklyedu</div>
//         </div>

//         {/* Seal */}
//         <div style={{ textAlign: "center" }}>
//           <div style={{ width: 64, height: 64, borderRadius: "50%", border: "2px solid #22C55E", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", background: "rgba(34,197,94,0.05)", position: "relative" }}>
//             <div style={{ width: 52, height: 52, borderRadius: "50%", border: "1px dashed rgba(34,197,94,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//               <span style={{ fontSize: 22 }}>✓</span>
//             </div>
//           </div>
//           <div style={{ fontSize: 10, color: "#94A3B8", marginTop: 4, fontFamily: "Inter, sans-serif" }}>Verified</div>
//         </div>

//         <div style={{ textAlign: "center" }}>
//           <div style={{ fontSize: 13, fontWeight: 700, color: "#0D1F3C", fontFamily: "Inter, sans-serif" }}>January 2027</div>
//           <div style={{ fontSize: 10, color: "#94A3B8", fontFamily: "Inter, sans-serif" }}>Date of Issue</div>
//           <div style={{ fontSize: 10, color: "#94A3B8", marginTop: 4, fontFamily: "Inter, sans-serif" }}>ID: TKL-2027-MKT-001</div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: 12, textAlign: "center" }}>
//         <span style={{ fontSize: 10, color: "#CBD5E1", letterSpacing: "0.08em", fontFamily: "Inter, sans-serif" }}>
//           THINKLYEDU.COM &nbsp;·&nbsp; SUPPORTTHINKLY.CO@GMAIL.COM &nbsp;·&nbsp; +91 98185 09083
//         </span>
//       </div>
//     </div>
//   );
// }


const FEATURES = [
  { icon: "✅", title: "Skill-Linked Verification", desc: "Every certificate mentions the exact skills you practiced — not just your name and dates. Recruiters can see what you actually did." },
  { icon: "🔗", title: "LinkedIn Ready", desc: "Add your certificate directly to your LinkedIn profile with a unique certificate ID that employers can verify online." },
  { icon: "📄", title: "Resume Booster", desc: "Thinklyedu certificates are designed to be added to resumes. The format and credibility get you shortlisted faster." },
  { icon: "🏢", title: "Recruiter Recognized", desc: "40+ partner companies know what a Thinklyedu certificate means — real work, real skills, real commitment." },
  { icon: "⚡", title: "Issued in 48 Hours", desc: "Complete your internship, submit your final project, and receive your certificate within 48 hours — digitally, in high resolution." },
  { icon: "♾️", title: "Valid Forever", desc: "No expiry. Your certificate stays valid and verifiable permanently at thinklyedu.com/verify." },
];

const DOMAINS = [
  "Marketing", "Design", "Technology", "Finance", "Content Writing",
  "Human Resources", "Sales & BD", "Operations", "Social Media",
  "Photography & Video", "Research & Data", "Education & Training",
];

const FAQS = [
  { q: "Is the Thinklyedu certificate recognized by companies?", a: "Yes. 40+ of our partner companies actively recognize and value Thinklyedu certificates. Many recruiters also independently verify them through our website." },
  { q: "How do I add this certificate to LinkedIn?", a: "Once issued, you'll receive a unique certificate ID and a shareable link. Go to LinkedIn → Add Profile Section → Licenses & Certifications, and fill in the details including your certificate ID." },
  { q: "Is there any fee to get the certificate?", a: "No. The certificate is completely free — as is the internship. You will never be charged anything by Thinklyedu." },
  { q: "How long does it take to receive the certificate?", a: "After completing your final project and internship period, you'll receive your certificate digitally within 48 hours." },
  { q: "What details are mentioned on the certificate?", a: "Your full name, internship domain, specific skills practiced, duration, date of issue, and a unique certificate ID for verification." },
  { q: "Can I get a physical copy?", a: "The certificate is issued digitally in high-resolution PDF format — print-ready at any size. Physical copies are not issued by default but you can print it yourself." },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #E2E8F0" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", padding: "18px 0", fontFamily: "inherit", textAlign: "left" }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "#0D1F3C", paddingRight: 20 }}>{q}</span>
        <svg style={{ width: 18, height: 18, color: "#22C55E", flexShrink: 0, transition: "transform 0.2s", transform: open ? "rotate(45deg)" : "none" }} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      </button>
      {open && <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.75, paddingBottom: 18, margin: 0, paddingRight: 32 }}>{a}</p>}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function CertificatePage() {
  const [previewName, setPreviewName] = useState("Your Name");
  const [previewDomain, setPreviewDomain] = useState("Marketing");
  const { open: openApplyModal } = useApplyModal();

  return (
    <main style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: "#0D1F3C", paddingTop: 68 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        * { box-sizing: border-box; }
      `}</style>

      {/* ── SEO Hidden Content (schema + keywords) ───────────────────────── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Thinklyedu",
        "url": "https://thinklyedu.com",
        "description": "Thinklyedu provides free internship certificates to students across India after completing real internship programs in marketing, design, technology, finance, and more.",
        "offers": {
          "@type": "Offer",
          "name": "Free Internship Certificate",
          "price": "0",
          "priceCurrency": "INR",
          "description": "Verified internship certificate issued to students on completion of Thinklyedu internship programs."
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "supportthinkly.co@gmail.com",
          "telephone": "+919818509083",
          "contactType": "customer support"
        }
      })}} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg,#0D1F3C 0%,#1a3a60 60%,#0f2a4a 100%)", padding: "72px 24px 80px", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: -100, right: -80, width: 380, height: 380, borderRadius: "50%", background: "rgba(34,197,94,0.07)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: "20%", width: 260, height: 260, borderRadius: "50%", background: "rgba(34,197,94,0.04)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative", zIndex: 1 }}>
          {/* Left */}
          <div>
            <div style={{ opacity: 0, animation: "fadeUp 0.6s ease 0.1s forwards", marginBottom: 20 }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
                <a href="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</a> / <span style={{ color: "#22C55E" }}>Certificate</span>
              </span>
            </div>

            <div style={{ opacity: 0, animation: "fadeUp 0.6s ease 0.2s forwards", marginBottom: 18 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 999, padding: "6px 16px", fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                <span style={{ animation: "float 2s ease-in-out infinite", display: "inline-block" }}>📜</span>
                100% Free Certificate
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(36px,5vw,58px)", fontWeight: 900, color: "white", lineHeight: 1.06, letterSpacing: "-0.03em", margin: "0 0 20px", opacity: 0, animation: "fadeUp 0.6s ease 0.3s forwards" }}>
              Earn a Certificate
              <span style={{ display: "block", color: "#22C55E" }}>Recruiters Trust.</span>
            </h1>

            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 480, margin: "0 0 32px", opacity: 0, animation: "fadeUp 0.6s ease 0.45s forwards" }}>
              Complete a real internship at Thinklyedu and receive a <strong style={{ color: "rgba(255,255,255,0.8)" }}>skill-linked, verified certificate</strong> — add it to LinkedIn, your resume, or share it directly with employers. No fees. No fake projects.
            </p>

            {/* Key points */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36, opacity: 0, animation: "fadeUp 0.6s ease 0.55s forwards" }}>
              {["Issued within 48 hours of completion", "Unique certificate ID — verifiable online", "Recognized by 40+ hiring companies", "LinkedIn + resume ready format"].map((pt) => (
                <div key={pt} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 800 }}>✓</span>
                  </div>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.65)" }}>{pt}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", opacity: 0, animation: "fadeUp 0.6s ease 0.65s forwards" }}>
              <a href="#apply" style={{ background: "#22C55E", color: "white", fontWeight: 800, fontSize: 15, padding: "14px 32px", borderRadius: 999, textDecoration: "none", boxShadow: "0 8px 28px rgba(34,197,94,0.25)", transition: "all 0.2s" }}
                onClick={(e) => { e.preventDefault(); openApplyModal(); }}
                onMouseOver={e => { e.currentTarget.style.background = "#16a34a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseOut={e => { e.currentTarget.style.background = "#22C55E"; e.currentTarget.style.transform = "translateY(0)"; }}>
                Apply & Earn Certificate →
              </a>
              <a href="#preview" style={{ border: "1.5px solid rgba(255,255,255,0.2)", color: "white", fontWeight: 600, fontSize: 15, padding: "14px 24px", borderRadius: 999, textDecoration: "none", transition: "all 0.2s" }}
                onMouseOver={e => { e.currentTarget.style.borderColor = "#22C55E"; e.currentTarget.style.color = "#22C55E"; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "white"; }}>
                See Sample Certificate
              </a>
            </div>
          </div>

          {/* Right — mini certificate teaser */}
          {/* <div style={{ opacity: 0, animation: "fadeUp 0.6s ease 0.5s forwards" }}>
            <div style={{ transform: "rotate(-2deg)", transition: "transform 0.3s" }}
              onMouseOver={e => e.currentTarget.style.transform = "rotate(0deg) scale(1.02)"}
              onMouseOut={e => e.currentTarget.style.transform = "rotate(-2deg)"}>
              <CertificatePreview name="Priya Sharma" domain="Marketing" />
            </div>
            <p style={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.25)", marginTop: 16 }}>Sample certificate — yours will have your name & domain</p>
          </div> */}
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section style={{ background: "white", padding: "52px 24px", borderBottom: "1px solid #F1F5F9" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, textAlign: "center" }}>
          {[
            { val: 500, suffix: "+", label: "Certificates Issued" },
            { val: 40, suffix: "+", label: "Recognizing Companies" },
            { val: 48, suffix: "hrs", label: "Issue Time" },
            { val: 100, suffix: "%", label: "Free, Always" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 38, fontWeight: 900, color: "#22C55E", letterSpacing: "-0.02em" }}>
                <Counter target={s.val} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: 13, color: "#94A3B8", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTERACTIVE PREVIEW ───────────────────────────────────────────── */}
      <section id="preview" style={{ padding: "88px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Live Preview</span>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#0D1F3C", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                See Your <span style={{ color: "#22C55E" }}>Certificate</span> Right Now
              </h2>
              {/* <p style={{ color: "#64748B", fontSize: 16, lineHeight: 1.7, maxWidth: 460, margin: "0 auto" }}>
                Type your name and pick a domain — preview your certificate before you even apply.
              </p> */}
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 48, alignItems: "start" }}>
            {/* Controls */}
            <Reveal>
              <div>
              {/* <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: 28 }}> */}
                {/* <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0D1F3C", marginBottom: 20 }}>Customize Preview</h3> */}

                {/* <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Your Name</label>
                  <input
                    type="text"
                    value={previewName}
                    onChange={e => setPreviewName(e.target.value || "Your Name")}
                    placeholder="Type your name..."
                    style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E2E8F0", borderRadius: 10, fontSize: 14, color: "#0D1F3C", outline: "none", fontFamily: "inherit", transition: "border-color 0.2s" }}
                    onFocus={e => e.target.style.borderColor = "#22C55E"}
                    onBlur={e => e.target.style.borderColor = "#E2E8F0"}
                  />
                </div> */}

                {/* <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Internship Domain</label>
                  {DOMAINS.map((d) => (
                    <button key={d} onClick={() => setPreviewDomain(d)}
                      style={{ display: "block", width: "100%", textAlign: "left", padding: "8px 12px", marginBottom: 4, borderRadius: 8, border: "1.5px solid", borderColor: previewDomain === d ? "#22C55E" : "transparent", background: previewDomain === d ? "rgba(34,197,94,0.08)" : "transparent", fontSize: 13, fontWeight: previewDomain === d ? 700 : 400, color: previewDomain === d ? "#16a34a" : "#64748B", cursor: "pointer", transition: "all 0.15s", fontFamily: "inherit" }}>
                      {d}
                    </button>
                  ))}
                </div> */}
              </div>
            </Reveal>

            {/* Certificate */}
            <Reveal delay={100}>
              <CertificatePreview name={previewName} domain={previewDomain} />
              <div style={{ textAlign: "center", marginTop: 24 }}>
                <a href="#apply"
                  style={{ display: "inline-block", background: "#22C55E", color: "white", fontWeight: 700, fontSize: 15, padding: "13px 36px", borderRadius: 999, textDecoration: "none", boxShadow: "0 8px 24px rgba(34,197,94,0.2)", transition: "all 0.2s" }}
                  onClick={(e) => { e.preventDefault(); openApplyModal(); }}
                  onMouseOver={e => { e.currentTarget.style.background = "#16a34a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseOut={e => { e.currentTarget.style.background = "#22C55E"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  Apply to Earn This Certificate →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section style={{ padding: "88px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Why It Matters</span>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#0D1F3C", margin: "12px 0 14px", letterSpacing: "-0.02em" }}>
                Not Just a Paper. <span style={{ color: "#22C55E" }}>A Proof.</span>
              </h2>
              <p style={{ color: "#64748B", fontSize: 16, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
                A Thinklyedu certificate tells recruiters exactly what you can do — and proves it.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div style={{ background: "#FAFBFC", border: "1.5px solid #E2E8F0", borderRadius: 18, padding: 26, transition: "all 0.25s" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.4)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.07)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0D1F3C", marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 13.5, color: "#64748B", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO GET IT ─────────────────────────────────────────────────── */}
      <section style={{ padding: "88px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Steps</span>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#0D1F3C", margin: "12px 0", letterSpacing: "-0.02em" }}>
                How to Get Your <span style={{ color: "#22C55E" }}>Certificate</span>
              </h2>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { step: "01", icon: "📝", title: "Apply for Internship", desc: "Send an email to supportthinkly.co@gmail.com or fill the apply form. We'll match you within 72 hours — free." },
              { step: "02", icon: "💼", title: "Complete 8 Weeks of Real Work", desc: "Work on real projects under a company mentor. Weekly check-ins, actual deliverables, no busy work." },
              { step: "03", icon: "📤", title: "Submit Your Final Project", desc: "At the end of Week 8, submit your final project or report to your mentor for review and approval." },
              { step: "04", icon: "📜", title: "Receive Your Certificate", desc: "Within 48 hours, you'll get your personalized, verified certificate via email — PDF, high resolution, ready to share." },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 80}>
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start", background: "white", border: "1.5px solid #E2E8F0", borderRadius: 18, padding: "24px 28px", transition: "all 0.25s" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.35)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.06)"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(34,197,94,0.1)", border: "1.5px solid rgba(34,197,94,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 22 }}>
                    {s.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: "#22C55E", letterSpacing: "0.08em" }}>STEP {s.step}</span>
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0D1F3C", marginBottom: 6 }}>{s.title}</h3>
                    <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOMAIN CHIPS ─────────────────────────────────────────────────── */}
      <section style={{ padding: "72px 24px", background: "white", textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 900, color: "#0D1F3C", marginBottom: 12, letterSpacing: "-0.02em" }}>
              Certificates Available in <span style={{ color: "#22C55E" }}>15+ Domains</span>
            </h2>
            <p style={{ color: "#64748B", fontSize: 15, marginBottom: 32 }}>Choose your path — a certificate follows every completed internship.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {DOMAINS.map((d) => (
                <a key={d} href={`/internship/${d.toLowerCase().replace(/\s+&?\s*/g, "-")}`}
                  style={{ display: "inline-block", background: "#F0F4F8", border: "1.5px solid #E2E8F0", borderRadius: 999, padding: "8px 20px", fontSize: 14, fontWeight: 600, color: "#475569", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseOver={e => { e.currentTarget.style.background = "rgba(34,197,94,0.1)"; e.currentTarget.style.borderColor = "#22C55E"; e.currentTarget.style.color = "#16a34a"; }}
                  onMouseOut={e => { e.currentTarget.style.background = "#F0F4F8"; e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.color = "#475569"; }}>
                  {d}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: "88px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{ color: "#22C55E", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>FAQ</span>
              <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, color: "#0D1F3C", margin: "12px 0", letterSpacing: "-0.02em" }}>
                Certificate <span style={{ color: "#22C55E" }}>Questions</span>
              </h2>
            </div>
          </Reveal>
          <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "0 28px" }}>
            {FAQS.map((faq) => <FAQ key={faq.q} {...faq} />)}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <section style={{ background: "#0D1F3C", padding: "88px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(34,197,94,0.07)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Reveal>
            <div style={{ fontSize: 52, marginBottom: 16 }}>📜</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, color: "white", lineHeight: 1.1, marginBottom: 16, letterSpacing: "-0.02em" }}>
              Your certificate is
              <span style={{ color: "#22C55E", display: "block" }}>one internship away.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, lineHeight: 1.7, marginBottom: 36 }}>
              Apply today. Complete real work. Get a certificate recruiters respect — free, always.
            </p>
            <a href="#apply"
              style={{ display: "inline-block", background: "#22C55E", color: "white", fontWeight: 800, fontSize: 16, padding: "16px 44px", borderRadius: 999, textDecoration: "none", boxShadow: "0 12px 40px rgba(34,197,94,0.25)", transition: "all 0.2s" }}
              onClick={(e) => { e.preventDefault(); openApplyModal(); }}
              onMouseOver={e => { e.currentTarget.style.background = "#16a34a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.currentTarget.style.background = "#22C55E"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Apply for Free Internship →
            </a>
            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 13, marginTop: 20 }}>
              supportthinkly.co@gmail.com &nbsp;·&nbsp; +91 98185 09083
            </p>
          </Reveal>
        </div>
      </section>
      <Footer/>
    </main>
  );
}