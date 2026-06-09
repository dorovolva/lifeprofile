import type { Metadata } from "next";
import { FormModalProvider } from "../components/ui/FormModalContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Human Direction Engine (HDE) | Human Research Initiative",
  description: "A research and development initiative investigating how students and young adults navigate life decisions, strengths, environmental opportunities, and goals to build a better framework for human direction.",
  keywords: [
    "Human Direction Engine",
    "HDE",
    "Life Direction Research",
    "Life Profile Researcher",
    "Human Navigation Framework",
    "Student Path Analysis",
    "Career Clarity Study",
    "Decision Making Research",
    "Self Understanding Initiative",
    "Young Adult Onboarding Study"
  ],
  authors: [{ name: "Human Direction Engine Research Team" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Human Direction Engine (HDE) | Human Research Initiative",
    description: "A research and development initiative investigating how students and young adults navigate life decisions, strengths, environmental opportunities, and goals.",
    type: "website",
    locale: "en_US",
    siteName: "Human Direction Engine",
  },
  twitter: {
    card: "summary_large_image",
    title: "Human Direction Engine (HDE) | Human Research Initiative",
    description: "A research and development initiative investigating how students and young adults navigate life decisions, strengths, environmental opportunities, and goals.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-[#F8F9FD] text-[#111111] font-sans selection:bg-neutral-200 selection:text-neutral-900">
        <FormModalProvider>
          {children}
        </FormModalProvider>
      </body>
    </html>
  );
}
