import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getThemeFromPath } from "@/utils/theme.config";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const matchedTheme = getThemeFromPath(path);

  const response = NextResponse.next();
  response.headers.set("x-theme", matchedTheme);
  return response;
}
