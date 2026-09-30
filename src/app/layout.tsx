import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Saqib — Software Engineer & Data Analyst",
  description:
    "Portfolio of Muhammad Saqib — Software Engineer, Data Analyst, Business Intelligence expert, and ML & AI Automation specialist. Explore projects, skills, and certifications.",
  keywords: [
    "Muhammad Saqib",
    "Software Engineer",
    "Data Analyst",
    "Business Intelligence",
    "Machine Learning",
    "AI Automation",
    "Power BI",
    "Python",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Saqib" }],
  openGraph: {
    title: "Muhammad Saqib — Software Engineer & Data Analyst",
    description:
      "Full-stack portfolio showcasing expertise in software engineering, data analytics, BI, and AI automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
