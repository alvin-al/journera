import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./../components/section/Navbar";
import Footer from "@/components/section/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans", // Updated variable name
});

export const metadata: Metadata = {
  title: "Journera",
  description: "Your travel companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className={`min-h-screen antialiased ${dmSans.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
