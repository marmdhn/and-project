export const themeMap: Record<string, string> = {
  "/preview/invitation/premium-b-em-1": "premiumB",
  "/": "andtheme",
};

export function getThemeFromPath(pathname: string): string {
  return (
    Object.entries(themeMap).find(([prefix]) =>
      pathname.startsWith(prefix),
    )?.[1] ?? "andtheme"
  );
}
