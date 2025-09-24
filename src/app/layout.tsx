import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '@/components/Language/LanguageProvider';
import { DynamicLayout } from '@/components/Layout/DynamicLayout';

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
    <html lang="el">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <DynamicLayout>
            {children}
          </DynamicLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
