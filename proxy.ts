import { NextRequest, NextResponse } from "next/server"

const LOCALES = ["en", "fr"] as const
type Locale = (typeof LOCALES)[number]

function detectLocale(req: NextRequest): Locale {
  const header = req.headers.get("accept-language") ?? ""
  const lower = header.toLowerCase()
  if (lower.includes("fr")) return "fr"
  return "en"
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Skip next internals and assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.startsWith("/images")
  ) {
    return NextResponse.next()
  }

  const segments = pathname.split("/").filter(Boolean)
  const first = segments[0]

  // If path already starts with a locale, continue.
  if (first && LOCALES.includes(first as Locale)) {
    return NextResponse.next()
  }

  // Redirect root and non-locale paths to detected locale.
  const locale = detectLocale(req)
  const url = req.nextUrl.clone()
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map)$).*)"],
}

