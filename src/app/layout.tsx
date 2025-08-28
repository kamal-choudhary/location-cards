import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Good Clean Dog - Locations",
  description: "Good Clean Dog locations for dog grooming services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} text-work-sans bg-[#F7F5F0] leading-normal antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
