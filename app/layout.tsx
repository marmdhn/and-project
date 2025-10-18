import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";
import { ThemeHandler } from "@/components/ThemeHandler";

export const metadata: Metadata = {
  title: "AND Project",
  description: "AND Project build for you from our heart",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers();
  const theme = headerList.get("x-theme") ?? "andtheme";

  return (
    <html lang="en" data-theme={theme} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeHandler>{children}</ThemeHandler>
      </body>
    </html>
  );
}
