import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nirob Paul | Software Engineer",
  description:
    "Portfolio of Nirob Paul, a full-stack developer building with React, Next.js, Node.js and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}