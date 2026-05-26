/**
 * Strips any HTML tags that are not in the explicit allowlist.
 *
 * This is NOT a general-purpose sanitiser — it is intentionally narrow and is
 * only for use with our own portfolio.ts data (which we fully control).
 * Never use this with untrusted user input.
 */
const ALLOWED_TAG_RE = /^\/?(strong|em|b|i|mark|code|br|ul|li)(\s|\/|>|$)/i;

export function sanitizeOwnHtml(html: string): string {
  return html.replace(/<([^>]+)>/g, (match, inner) => {
    return ALLOWED_TAG_RE.test(inner.trim()) ? match : '';
  });
}
