import { POSTS } from "./blog-data";

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const TOKEN_KEY = "thinkly_admin_token";

export function getToken() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  if (!token) throw new Error("Token nahi mila");
  window.localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  window.localStorage.removeItem(TOKEN_KEY);
}

export function isAuthError(error) {
  return /login|session/i.test(String(error?.message || ""));
}

async function parseResponse(res) {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || `Request failed (${res.status})`);
  return data;
}

export async function publicRequest(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    cache: "no-store",
    ...options,
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
  });
  return parseResponse(res);
}

export async function adminRequest(path, options = {}) {
  const token = getToken();
  return publicRequest(path, {
    ...options,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });
}

export async function uploadImage(file) {
  const token = getToken();
  const payload = new FormData();
  payload.append("file", file);

  const res = await fetch(`${API_URL}/api/uploads`, {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: payload,
  });
  return parseResponse(res);
}

export async function fetchPosts() {
  try {
    return await publicRequest("/api/posts");
  } catch {
    return POSTS;
  }
}

export async function fetchPostBySlug(slug) {
  try {
    return await publicRequest(`/api/posts/${encodeURIComponent(slug)}`);
  } catch {
    return POSTS.find((post) => post.slug === slug) || null;
  }
}
