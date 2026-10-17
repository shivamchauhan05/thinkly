"use client";

import { useState } from "react";

import {
  FiUser,
  FiMail,
  FiPhone,
  FiBookOpen,
  FiCalendar,
  FiFlag,
  FiLayers,
  FiClock,
  FiEdit3,
  FiBriefcase,
  FiWifi,
  FiFileText,
  FiUploadCloud,
  FiCheckCircle,
} from "react-icons/fi";

const WHATSAPP_NUMBER = "919818509083";

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

const row = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 18,
};

const focusField = (e) => (e.currentTarget.style.borderColor = "rgba(34,197,94,0.6)");
const blurField = (e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)");

function Chevron() {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      stroke="#94A3B8"
      viewBox="0 0 24 24"
      style={{
        position: "absolute",
        right: 14,
        top: "50%",
        transform: "translateY(-50%)",
        pointerEvents: "none",
      }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function CourseRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    currentYear: "",
    studypassed: "",
    internshipDomain: "",
    tenure: "",
    whyJoin: "",
    priorExperience: "",
    flexibleSchedule: "",
    file: null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const payload = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (key === "file") {
          if (value) payload.append("file", value);
        } else {
          payload.append(key, value ?? "");
        }
      });

      const res = await fetch("/api/send-email", {
        method: "POST",
        body: payload,
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setError("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      college: "",
      currentYear: "",
      studypassed: "",
      internshipDomain: "",
      tenure: "",
      whyJoin: "",
      priorExperience: "",
      flexibleSchedule: "",
      file: null,
    });
  };

  if (submitted) {
    return (
      <div id="apply" className="px-5 py-10 md:px-10 md:py-14">
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
            Application Submitted!
          </h2>
          <p
            style={{
              color: "#94A3B8",
              fontSize: 15,
              maxWidth: 440,
              margin: "0 auto 24px",
              lineHeight: 1.7,
            }}
          >
            Thank you{formData.name ? `, ${formData.name}` : ""}! Your application
            has been received. Our team will review it and get back to you shortly.
          </p>
          <button
            type="button"
            onClick={resetForm}
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
            onMouseOver={(e) => (e.currentTarget.style.background = "#16a34a")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#22C55E")}
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="apply" className="px-5 pt-9 pb-8 md:px-10 md:pt-11 md:pb-10">
      {/* header */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
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
          <FiBookOpen size={13} /> For Students Only
        </span>

        <h1
          style={{
            fontSize: "clamp(26px,4vw,36px)",
            fontWeight: 800,
            color: "#F8FAFC",
            margin: "18px 0 12px",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}
        >
          Internship <span style={{ color: "#22C55E" }}>Application</span>
        </h1>

        <p
          style={{
            color: "#94A3B8",
            fontSize: 15,
            maxWidth: 480,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Apply for a hands-on internship — real projects, expert mentorship, and a
          verified certificate. Fill out this form to{" "}
          <span style={{ color: "#4ADE80" }}>get started</span>.
        </p>
      </div>

      {/* form */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1.5px solid rgba(255,255,255,0.08)",
          borderRadius: 20,
          padding: "28px 24px",
        }}
      >
        <div style={row}>
          <div>
            <label style={label}>
              <FiUser style={icon} /> Full Name <span style={{ color: "#F87171" }}>*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              style={field}
              onFocus={focusField}
              onBlur={blurField}
            />
          </div>

          <div>
            <label style={label}>
              <FiMail style={icon} /> Email Address <span style={{ color: "#F87171" }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              style={field}
              onFocus={focusField}
              onBlur={blurField}
            />
          </div>
        </div>

        <div style={{ ...row, marginTop: 18 }}>
          <div>
            <label style={label}>
              <FiPhone style={icon} /> Phone Number <span style={{ color: "#F87171" }}>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9+\-\s]{10,15}"
              title="Please enter a valid phone number"
              style={field}
              onFocus={focusField}
              onBlur={blurField}
            />
          </div>

          <div>
            <label style={label}>
              <FiBookOpen style={icon} /> College / University <span style={{ color: "#F87171" }}>*</span>
            </label>
            <input
              type="text"
              name="college"
              required
              placeholder="e.g. Delhi University"
              value={formData.college}
              onChange={handleChange}
              style={field}
              onFocus={focusField}
              onBlur={blurField}
            />
          </div>
        </div>

        <div style={{ ...row, marginTop: 18 }}>
          <div>
            <label style={label}>
              <FiCalendar style={icon} /> Current Year of Study
            </label>
            <div style={{ position: "relative" }}>
              <select
                name="currentYear"
                value={formData.currentYear}
                onChange={handleChange}
                style={{ ...field, appearance: "none", WebkitAppearance: "none", cursor: "pointer", paddingRight: 42 }}
                onFocus={focusField}
                onBlur={blurField}
              >
                <option value="" style={{ color: "#333" }}>Select year</option>
                <option value="1st Year" style={{ color: "#333" }}>1st Year</option>
                <option value="2nd Year" style={{ color: "#333" }}>2nd Year</option>
                <option value="3rd Year" style={{ color: "#333" }}>3rd Year</option>
                <option value="4th Year" style={{ color: "#333" }}>4th Year</option>
                <option value="completed" style={{ color: "#333" }}>Completed</option>
              </select>
              <Chevron />
            </div>
          </div>

          <div>
            <label style={label}>
              <FiFlag style={icon} /> Year of Study Passed <span style={{ color: "#F87171" }}>*</span>
            </label>
            <input
              type="text"
              name="studypassed"
              required
              placeholder="e.g. 2025"
              value={formData.studypassed}
              onChange={handleChange}
              style={field}
              onFocus={focusField}
              onBlur={blurField}
            />
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <label style={label}>
            <FiLayers style={icon} /> Preferred Domain
          </label>
          <div style={{ position: "relative" }}>
            <select
              name="internshipDomain"
              value={formData.internshipDomain}
              onChange={handleChange}
              style={{ ...field, appearance: "none", WebkitAppearance: "none", cursor: "pointer", paddingRight: 42 }}
              onFocus={focusField}
              onBlur={blurField}
            >
              <option value="" style={{ color: "#333" }}>Select domain</option>
              <option value="Web Development" style={{ color: "#333" }}>Web Development</option>
              <option value="Data Science" style={{ color: "#333" }}>Data Science</option>
              <option value="UI/UX Design" style={{ color: "#333" }}>UI/UX Design</option>
              <option value="Digital Marketing" style={{ color: "#333" }}>Digital Marketing</option>
              <option value="Content Writing" style={{ color: "#333" }}>Content Writing</option>
              <option value="SEO" style={{ color: "#333" }}>SEO</option>
              <option value="PHP Developer" style={{ color: "#333" }}>PHP Developer</option>
            </select>
            <Chevron />
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <label style={label}>
            <FiClock style={icon} /> Internship Tenure <span style={{ color: "#F87171" }}>*</span>
          </label>
          <div style={{ position: "relative" }}>
            <select
              name="tenure"
              required
              value={formData.tenure}
              onChange={handleChange}
              style={{ ...field, appearance: "none", WebkitAppearance: "none", cursor: "pointer", paddingRight: 42 }}
              onFocus={focusField}
              onBlur={blurField}
            >
              <option value="" style={{ color: "#333" }}>Select tenure</option>
              <option value="1 Month" style={{ color: "#333" }}>1 Month</option>
              <option value="2 Months" style={{ color: "#333" }}>2 Months</option>
              <option value="3 Months" style={{ color: "#333" }}>3 Months</option>
              <option value="6 Months" style={{ color: "#333" }}>6 Months</option>
            </select>
            <Chevron />
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <label style={label}>
            <FiEdit3 style={icon} /> Why do you want to join this internship?
          </label>
          <textarea
            name="whyJoin"
            placeholder="Tell us about your motivation..."
            value={formData.whyJoin}
            onChange={handleChange}
            rows={4}
            style={{ ...field, resize: "vertical", lineHeight: 1.6 }}
            onFocus={focusField}
            onBlur={blurField}
          />
        </div>

        <div style={{ marginTop: 18 }}>
          <label style={label}>
            <FiBriefcase style={icon} /> Prior Experience in this Domain{" "}
            <span style={{ color: "#F87171" }}>*</span>
          </label>
          <div style={{ display: "grid", gap: 12 }}>
            {[
              "Yes (Beginner)",
              "Yes (Intermediate)",
              "No, I am a complete fresher looking to learn",
            ].map((option) => {
              const selected = formData.priorExperience === option;
              return (
                <label
                  key={option}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    cursor: "pointer",
                    padding: "13px 16px",
                    borderRadius: 10,
                    border: selected
                      ? "1.5px solid rgba(34,197,94,0.6)"
                      : "1.5px solid rgba(255,255,255,0.12)",
                    background: selected ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.04)",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={(e) => {
                    if (!selected) e.currentTarget.style.borderColor = "rgba(34,197,94,0.4)";
                  }}
                  onMouseOut={(e) => {
                    if (!selected) e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  }}
                >
                  <input
                    type="radio"
                    name="priorExperience"
                    value={option}
                    required
                    checked={selected}
                    onChange={handleChange}
                    style={{ accentColor: "#22C55E", marginTop: 3, width: 15, height: 15, flexShrink: 0 }}
                  />
                  <span style={{ fontSize: 14, color: "#E2E8F0", fontWeight: 500, lineHeight: 1.5 }}>
                    {option}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <label style={label}>
            <FiWifi style={icon} /> Comfortable with a flexible remote schedule?{" "}
            <span style={{ color: "#F87171" }}>*</span>
          </label>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["Yes", "No"].map((option) => {
              const selected = formData.flexibleSchedule === option;
              return (
                <label
                  key={option}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    cursor: "pointer",
                    padding: "12px 20px",
                    borderRadius: 10,
                    border: selected
                      ? "1.5px solid rgba(34,197,94,0.6)"
                      : "1.5px solid rgba(255,255,255,0.12)",
                    background: selected ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.04)",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={(e) => {
                    if (!selected) e.currentTarget.style.borderColor = "rgba(34,197,94,0.4)";
                  }}
                  onMouseOut={(e) => {
                    if (!selected) e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  }}
                >
                  <input
                    type="radio"
                    name="flexibleSchedule"
                    value={option}
                    required
                    checked={selected}
                    onChange={handleChange}
                    style={{ accentColor: "#22C55E", width: 15, height: 15 }}
                  />
                  <span style={{ fontSize: 14, color: "#E2E8F0", fontWeight: 500 }}>{option}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <label style={label}>
            <FiFileText style={icon} /> Resume / CV <span style={{ color: "#F87171" }}>*</span>
          </label>
          <p style={{ fontSize: 12, color: "#64748B", marginBottom: 12 }}>
            Upload your resume (PDF, DOC, DOCX — max 5MB).
          </p>

          <label
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              border: "1.5px dashed rgba(34,197,94,0.45)",
              borderRadius: 12,
              padding: "28px 20px",
              fontSize: 14,
              color: "#94A3B8",
              fontWeight: 500,
              background: "rgba(34,197,94,0.05)",
              cursor: "pointer",
              transition: "all 0.2s",
              textAlign: "center",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(34,197,94,0.1)";
              e.currentTarget.style.borderColor = "rgba(34,197,94,0.7)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "rgba(34,197,94,0.05)";
              e.currentTarget.style.borderColor = "rgba(34,197,94,0.45)";
            }}
          >
            <FiUploadCloud size={26} color="#4ADE80" />
            <span style={{ color: "#4ADE80", fontWeight: 600 }}>Click to upload file</span>
            <span style={{ fontSize: 12, color: "#64748B" }}>PDF, DOC or DOCX — Max 5MB</span>

            <input
              type="file"
              name="file"
              required
              accept=".pdf,.doc,.docx"
              style={{ display: "none" }}
              onChange={(e) => {
                const selected = e.target.files[0];

                if (selected && selected.size > 5 * 1024 * 1024) {
                  setError("File size must be under 5MB.");
                  e.target.value = "";
                  setFormData((prev) => ({ ...prev, file: null }));
                  return;
                }

                setError("");
                setFormData((prev) => ({ ...prev, file: selected }));
              }}
            />
          </label>

          {formData.file && (
            <div
              style={{
                marginTop: 12,
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 14,
                color: "#4ADE80",
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.35)",
                borderRadius: 10,
                padding: "10px 14px",
              }}
            >
              <FiFileText size={15} color="#4ADE80" style={{ flexShrink: 0 }} />
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {formData.file.name}
              </span>
            </div>
          )}
        </div>

        {error && (
          <p style={{ color: "#F87171", fontSize: 13, marginTop: 16 }}>{error}</p>
        )}

        <div style={{ paddingTop: 8 }}>
          <button
            type="submit"
            disabled={submitting}
            style={{
              width: "100%",
              marginTop: 16,
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
            {submitting ? (
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="animate-spin">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
                  <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor" opacity="0.75" />
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit Application →"
            )}
          </button>

          <p style={{ fontSize: 12, color: "#64748B", textAlign: "center", marginTop: 14 }}>
            By submitting, you agree to our Terms and Privacy Policy. Questions?{" "}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4ADE80", textDecoration: "none" }}
            >
              Talk to us
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
