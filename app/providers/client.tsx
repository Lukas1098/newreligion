"use client"

import { CryptoLoading, useLoadingStore } from "@/components/crypto";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoading = useLoadingStore((state) => state.isLoading);

  return (
    <>
      <CryptoLoading />
      <div
        className={cn(
          "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100"
        )}
      >
        <Logo />
      </div>
      <div
        className={cn(
          "transition-all duration-500",
          isLoading ? "blur-md opacity-30" : "blur-0 opacity-100"
        )}
      >
        {children}
        <Footer />
      </div>
    </>
  );
}