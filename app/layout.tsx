import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SectionColorProvider } from "@/components/section-color-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_TITLE = "Knox Lighting | Permanent Christmas Lights in Utah";
const SITE_DESCRIPTION =
  "Professional permanent LED lighting for Utah homes. Custom colors for every holiday and season, installed once and controlled from your phone. Serving the Wasatch Front.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Knox Lighting",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SectionColorProvider>
          <div className="ambient-glow" aria-hidden="true" />
          <SiteHeader />
          <div className="relative z-10 flex flex-1 flex-col">{children}</div>
          <SiteFooter />
        </SectionColorProvider>
      </body>
    </html>
  );
}
