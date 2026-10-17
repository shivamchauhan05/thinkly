"use client";

import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiLayers,
  FiDollarSign,
  FiClock,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

const SERVICES = [
  "Website Development",
  "App Development",
  "AI Automation",
  "EdTech Solutions",
  "Digital Marketing",
  "Not sure yet",
];

const BUDGETS = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Let's discuss",
];

const TIMELINES = [
  "ASAP",
  "Within 2 weeks",
  "Within 1 month",
  "1–3 months",
  "Just exploring",
];

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setDone(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Failed to send. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
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
    transition: "border-color 0.2s",
  };

  const label = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13,
    fontWeight: 600,
    color: "#CBD5E1",
    marginBottom: 8,
  };

  const icon = { color: "#4ADE80", fontSize: 16, flexShrink: 0 };

  if (done) {
    return (
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1.5px solid rgba(34,197,94,0.35)",
          borderRadius: 20,
          padding: "56px 32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "rgba(34,197,94,0.12)",
            border: "1px solid rgba(34,197,94,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
          }}
        >
          <FiCheckCircle size={30} color="#4ADE80" />
        </div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#F8FAFC", margin: "0 0 12px" }}>
          Quote Request Sent!
        </h2>
        <p style={{ color: "#94A3B8", fontSize: 15, maxWidth: 420, margin: "0 auto 24px", lineHeight: 1.7 }}>
          Thanks {form.name || "there"}! We&apos;ve received your project details
          and will get back to you with a clear plan and quote within 24 hours.
        </p>
        <button
          onClick={() => {
            setDone(false);
            setForm({
              name: "",
              email: "",
              phone: "",
              company: "",
              service: "",
              budget: "",
              timeline: "",
              message: "",
            });
          }}
          style={{
            background: "#22C55E",
            color: "#08150C",
            fontWeight: 700,
            fontSize: 14,
            padding: "12px 28px",
            borderRadius: 999,
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1.5px solid rgba(255,255,255,0.08)",
        borderRadius: 20,
        padding: "32px 28px",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
        <div>
          <label style={label}>
            <FiUser style={icon} /> Full Name <span style={{ color: "#F87171" }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            style={field}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(34,197,94,0.6)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
          />
        </div>

        <div>
          <label style={label}>
            <FiMail style={icon} /> Email <span style={{ color: "#F87171" }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            style={field}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(34,197,94,0.6)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
          />
        </div>

        <div>
          <label style={label}>
            <FiPhone style={icon} /> Phone / WhatsApp
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={handleChange}
            style={field}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(34,197,94,0.6)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
          />
        </div>

        <div>
          <label style={label}>
            <FiBriefcase style={icon} /> Company / Business
          </label>
          <input
            type="text"
            name="company"
            placeholder="Your business name"
            value={form.company}
            onChange={handleChange}
            style={field}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(34,197,94,0.6)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
          />
        </div>

        <div>
          <label style={label}>
            <FiLayers style={icon} /> Service Needed <span style={{ color: "#F87171" }}>*</span>
          </label>
          <select
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            style={{ ...field, appearance: "none", cursor: "pointer" }}
          >
            <option value="" style={{ color: "#333" }}>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s} style={{ color: "#333" }}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label style={label}>
            <FiDollarSign style={icon} /> Budget Range
          </label>
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            style={{ ...field, appearance: "none", cursor: "pointer" }}
          >
            <option value="" style={{ color: "#333" }}>
              Select budget
            </option>
            {BUDGETS.map((b) => (
              <option key={b} value={b} style={{ color: "#333" }}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label style={label}>
            <FiClock style={icon} /> Timeline
          </label>
          <select
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            style={{ ...field, appearance: "none", cursor: "pointer" }}
          >
            <option value="" style={{ color: "#333" }}>
              When do you need it?
            </option>
            {TIMELINES.map((t) => (
              <option key={t} value={t} style={{ color: "#333" }}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <label style={label}>
          <FiMessageSquare style={icon} /> Project Details <span style={{ color: "#F87171" }}>*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project — what you need, your goals, and any references you like..."
          value={form.message}
          onChange={handleChange}
          style={{ ...field, resize: "vertical", lineHeight: 1.6 }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(34,197,94,0.6)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
        />
      </div>

      {error && (
        <p style={{ color: "#F87171", fontSize: 13, marginTop: 14 }}>{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        style={{
          width: "100%",
          marginTop: 24,
          background: submitting ? "rgba(34,197,94,0.5)" : "#22C55E",
          color: "#08150C",
          fontWeight: 800,
          fontSize: 15,
          padding: "15px 32px",
          borderRadius: 999,
          border: "none",
          cursor: submitting ? "not-allowed" : "pointer",
          boxShadow: "0 8px 28px rgba(34,197,94,0.28)",
          transition: "all 0.2s",
        }}
        onMouseOver={(e) => {
          if (!submitting) e.currentTarget.style.background = "#16a34a";
        }}
        onMouseOut={(e) => {
          if (!submitting) e.currentTarget.style.background = "#22C55E";
        }}
      >
        {submitting ? "Sending..." : "Get My Free Quote →"}
      </button>

      <p style={{ fontSize: 12, color: "#64748B", textAlign: "center", marginTop: 14 }}>
        No spam, no obligation. We&apos;ll reply within 24 hours.
      </p>
    </form>
  );
}
