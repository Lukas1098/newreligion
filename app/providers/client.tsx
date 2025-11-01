"use client"

import Footer from "@/components/footer";
import { MainNav } from "@/components/navigation/main-nav";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="overflow-x-hidden max-w-full">
      {children}
      <MainNav />
      <Footer />
    </div>
  );
}