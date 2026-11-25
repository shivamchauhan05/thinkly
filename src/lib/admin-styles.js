export const pageStyle = {
  minHeight: "100vh",
  background: "#050b16",
  color: "#F1F5F9",
  fontFamily: "'Inter', -apple-system, sans-serif",
  padding: "48px 24px 96px",
};

export const panelStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 20,
  padding: 28,
};

export const inputStyle = {
  width: "100%",
  background: "rgba(5,11,22,0.75)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 10,
  color: "#F8FAFC",
  padding: "12px 14px",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
};

export const textareaStyle = { ...inputStyle, minHeight: 110, resize: "vertical", lineHeight: 1.6 };

export const labelStyle = {
  display: "block",
  color: "#94A3B8",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  marginBottom: 8,
};

export const primaryButton = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  background: "#22C55E",
  color: "#06120B",
  border: "none",
  borderRadius: 10,
  padding: "12px 20px",
  fontSize: 14,
  fontWeight: 800,
  cursor: "pointer",
};

export const ghostButton = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  background: "rgba(255,255,255,0.04)",
  color: "#E2E8F0",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 10,
  padding: "12px 20px",
  fontSize: 14,
  fontWeight: 700,
  cursor: "pointer",
};

export const dangerButton = {
  ...ghostButton,
  color: "#FCA5A5",
  border: "1px solid rgba(248,113,113,0.35)",
};

export const tagStyle = {
  display: "inline-flex",
  alignItems: "center",
  borderRadius: 999,
  padding: "4px 10px",
  fontSize: 11,
  fontWeight: 700,
  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
};

export function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

export function today() {
  return new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
