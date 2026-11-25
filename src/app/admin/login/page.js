"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Lock, Terminal } from "lucide-react";
import { publicRequest, setToken } from "@/lib/blog-api";
import {
  pageStyle,
  panelStyle,
  inputStyle,
  labelStyle,
  primaryButton,
} from "@/lib/admin-styles";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await publicRequest("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      setToken(data.token);
      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ ...pageStyle, display: "grid", placeItems: "center" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');`}</style>
      <div style={{ width: "100%", maxWidth: 440 }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "#94A3B8",
            fontSize: 13,
            textDecoration: "none",
            marginBottom: 28,
          }}
        >
          <ArrowLeft size={15} /> Back to site
        </Link>

        <div style={panelStyle}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#4ADE80",
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              marginBottom: 16,
            }}
          >
            <Terminal size={13} /> {"// admin_console"}
          </span>
          <h1 style={{ fontSize: 28, fontWeight: 900, margin: "0 0 8px" }}>Admin Login</h1>
          <p style={{ color: "#94A3B8", fontSize: 14, margin: "0 0 28px" }}>
            Enter your credentials to manage the blog.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 18 }}>
              <label style={labelStyle} htmlFor="admin-email">Email</label>
              <input
                id="admin-email"
                type="email"
                autoComplete="username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                placeholder="admin@thinklyedu.com"
              />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle} htmlFor="admin-password">Password</label>
              <input
                id="admin-password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p
                style={{
                  color: "#FCA5A5",
                  background: "rgba(248,113,113,0.08)",
                  border: "1px solid rgba(248,113,113,0.25)",
                  borderRadius: 10,
                  padding: "10px 14px",
                  fontSize: 13,
                  marginBottom: 18,
                }}
              >
                {error}
              </p>
            )}

            <button type="submit" disabled={loading} style={{ ...primaryButton, width: "100%" }}>
              <Lock size={15} /> {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
