import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SectionColorProvider } from "@/components/section-color-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Knox Permanent Lighting | Permanent Christmas Lights in Utah",
  description:
    "Professional permanent LED lighting for Utah homes. Custom colors for every holiday and season, installed once and controlled from your phone. Serving the Wasatch Front.",
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
        <SectionColorProvider>{children}</SectionColorProvider>
      </body>
    </html>
  );
}
