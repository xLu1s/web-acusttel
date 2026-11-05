/** Base path with trailing slash, e.g. `/web-acusttel/`. */
export const base = import.meta.env.BASE_URL;

export function href(path = "/"): string {
  const root = base.endsWith("/") ? base : `${base}/`;
  if (!path || path === "/") return root;
  const clean = path.replace(/^\/+/, "").replace(/\/+$/, "");
  return `${root}${clean}/`;
}

export function asset(path: string): string {
  const root = base.endsWith("/") ? base : `${base}/`;
  return `${root}${path.replace(/^\/+/, "")}`;
}

export function abs(path = "/"): string {
  const site = "https://xlu1s.github.io";
  return new URL(href(path), site).toString();
}
