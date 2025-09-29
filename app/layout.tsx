import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AND Project",
  description: "AND Project build for you from our heart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="andtheme" suppressHydrationWarning>
      <body className={`antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
