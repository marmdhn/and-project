import type { Metadata } from "next";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "AND Project",
  description: "Main section of AND Project",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen antialiased">
      <ClientLayout>{children}</ClientLayout>
    </div>
  );
}
