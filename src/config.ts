export const DLHD_BASE = process.env.DLHD_BASE ?? "https://dlive.sx";

// Public base URL clients use to reach this app (e.g. "https://dlhd.example.com").
// Overrides X-Forwarded-* / Host when building absolute links behind a reverse proxy.
export const PUBLIC_URL = process.env.PUBLIC_URL?.trim().replace(/\/+$/, "") || undefined;

// Upstream fetch timeouts — a stalled CDN otherwise holds the client connection open forever.
export const HTML_TIMEOUT_MS = 15_000;
export const MEDIA_TIMEOUT_MS = 20_000;
