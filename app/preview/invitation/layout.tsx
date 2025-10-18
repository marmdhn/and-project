import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AND Project | Preview",
  description: "Main section of AND Project",
};

export default function InvitationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#EBE1CB] min-h-screen antialiased">{children}</div>
  );
}
