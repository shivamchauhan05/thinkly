"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { adminRequest, clearToken, getToken } from "@/lib/blog-api";
import { pageStyle } from "@/lib/admin-styles";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (pathname === "/admin/login") return;
    if (!getToken()) {
      router.replace("/admin/login");
      return;
    }
    adminRequest("/api/auth/me")
      .then(() => setChecking(false))
      .catch(() => {
        clearToken();
        router.replace("/admin/login");
      });
  }, [pathname, router]);

  if (checking && pathname !== "/admin/login") {
    return (
      <main style={{ ...pageStyle, display: "grid", placeItems: "center" }}>
        <p style={{ color: "#94A3B8", fontFamily: "monospace" }}>
          {"// Verifying session..."}
        </p>
      </main>
    );
  }

  return children;
}
