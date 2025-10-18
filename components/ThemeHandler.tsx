"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getThemeFromPath } from "@/utils/theme.config";

export function ThemeHandler({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const matchedTheme = getThemeFromPath(pathname);

    document.documentElement.setAttribute("data-theme", matchedTheme);
  }, [pathname]);

  return <>{children}</>;
}
