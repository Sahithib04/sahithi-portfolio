import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahithi Bethi | Full Stack Developer",
  description: "Full Stack Developer.",
  metadataBase: new URL("https://achyutkatiyar.com"),
  
  // Basic metadata
  applicationName: "Sahithi Bethi Portfolio",
  authors: [{ name: "Sahithi Bethi" }],
  keywords: ["Full Stack Developer",  "React"],
  
  openGraph: {
    type: "website",
    url: "https://achyutkatiyar.com",
    title: "Sahithi Bethi | Full Stack Developer",
    description: "Full Stack Developer Enthusiast with expertise in Java, React, and Springboot.",
    siteName: "Sahithi Bethi",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sahithi Bethi - Portfolio",
      },
    ],
  },
  
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  
  alternates: {
    canonical: "https://achyutkatiyar.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}