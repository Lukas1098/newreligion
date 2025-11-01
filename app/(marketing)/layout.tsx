import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ClientLayout from "@/app/providers/client";
import { SanityLive } from "@/sanity/lib/live";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Religion",
  description: "New Religion",
  openGraph: {
    title: "New Religion",
    description: "New Religion Studio",
    url: "https://nwrl.vercel.app",
    siteName: "New Religion",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "New Religion",
        type: "image/png",
      },
    ],
    locale: "en",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <ClientLayout>
            {children}
            <Analytics />
            <SanityLive />
          </ClientLayout>
      </body>
    </html>
  );
}
