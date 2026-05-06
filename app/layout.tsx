import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";

const roboto = Roboto({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jobli",
  description: "Jobli is a web-based recruitment management system that centralizes and simplifies the hiring process by allowing administrators to manage job postings, track applicant submissions, and oversee the entire recruitment workflow within a single platform. It provides an organized environment for reviewing candidates, updating application statuses, and making informed hiring decisions through structured data and basic analytics. Designed to reduce manual processes and improve efficiency, Jobli helps organizations handle recruitment in a more streamlined, consistent, and accessible way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", roboto.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
