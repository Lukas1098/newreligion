import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ClientLayout from "@/app/providers/client";
import { SanityLive } from "@/sanity/lib/live";
import { ThemeProvider } from "@/components/ui/theme-provider"
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
  title: "Santoz Fellas",
  description: "Santoz Fellas",
  openGraph: {
    title: "Santoz Fellas",
    description: "Santoz Fellas",
    url: "https://santozfellas.com",
    siteName: "Santoz Fellas",
    images: [
      { url: "/og-image.png" },
    ],
    locale: "es",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        //disableTransitionOnChange
        >
          <ClientLayout>
            {children}
            <Analytics />
            <SanityLive />
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
