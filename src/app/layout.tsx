import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Muhammad Saqib | Data Analyst & Business Intelligence Specialist",
  description: "Portfolio of Muhammad Saqib, Data Analyst & Business Intelligence Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} bg-[#0d0d0d] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
