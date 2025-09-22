import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OPUS Consulting - Strategic Excellence in Consulting",
  description: "Empowering organizations with innovative solutions, strategic insights, and transformative expertise across public sector, technology, and investment management domains.",
  keywords: "consulting, strategic planning, public sector, technology consulting, investment management, digital transformation",
  authors: [{ name: "OPUS Consulting" }],
  openGraph: {
    title: "OPUS Consulting - Strategic Excellence in Consulting",
    description: "Empowering organizations with innovative solutions, strategic insights, and transformative expertise across public sector, technology, and investment management domains.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
