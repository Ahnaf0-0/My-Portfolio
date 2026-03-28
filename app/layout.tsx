import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import MouseScrollIndicator from "@/components/ui/MouseScrollIndicator";
import ScrollBackground from "@/components/ui/ScrollBackground";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahnaf Hasan - AI Engineer",
  description:
    "Portfolio of Ahnaf Hasan — Computer Science graduate specializing in machine learning, LLM integration, and full-stack development.",
  keywords: [
    "Ahnaf Hasan",
    "AI Engineer",
    "Machine Learning",
    "Portfolio",
    "Next.js",
    "LLM Integration",
    "RAG",
  ],
  authors: [{ name: "Ahnaf Hasan" }],
  creator: "Ahnaf Hasan",
  openGraph: {
    title: "Ahnaf Hasan — AI & Software Engineer",
    description: "Computer Science graduate specializing in machine learning, LLM integration, and full-stack development.",
    url: "https://ahnafhasan.com", // Replace with actual domain
    siteName: "Ahnaf Hasan Portfolio",
    images: [
      {
        url: "/mehedi.png", // Using the profile picture as the OG image
        width: 800,
        height: 600,
        alt: "Ahnaf Hasan Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahnaf Hasan — AI & Software Engineer",
    description: "Computer Science graduate specializing in machine learning, LLM integration, and full-stack development.",
    images: ["/mehedi.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        <ScrollBackground />
        <CustomCursor />
        <MouseScrollIndicator />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
