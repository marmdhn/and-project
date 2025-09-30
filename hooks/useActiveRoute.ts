"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function useActiveRoute(sections: string[] = []) {
  const pathname = usePathname();
  const [active, setActive] = useState<string>(pathname);

  useEffect(() => {
    // kalau bukan di home, langsung set active = path
    if (pathname !== "/") {
      setActive(pathname);
      return;
    }

    // kalau di home, pakai observer buat track section
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(`#${id}`);
            }
          });
        },
        { threshold: 0.6 }, // 60% keliatan baru dianggap aktif
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [pathname, sections]);

  return active;
}
