import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chart Demo",
  description: "CandleBar chart demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="light" lang="en">
      <body className={`dark:bg-gray-900 {inter.className}`}>{children}</body>
    </html>
  );
}
