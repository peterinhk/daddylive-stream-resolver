import { HTML_TIMEOUT_MS } from "./config.js";

export const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

export function htmlHeaders(referer: string): Record<string, string> {
  return { "User-Agent": UA, Referer: referer, Accept: "text/html,application/xhtml+xml" };
}

export async function fetchHtml(url: string, referer: string): Promise<string> {
  const res = await fetch(url, {
    headers: htmlHeaders(referer),
    signal: AbortSignal.timeout(HTML_TIMEOUT_MS),
  });
  if (!res.ok) {
    throw new Error(`fetch failed (HTTP ${res.status}): ${url}`);
  }
  return res.text();
}
