import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const futura = localFont({ src: "./Futura.woff2" });

export const metadata: Metadata = {
  title: "app",
  description: "for me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={futura.className}>{children}</body>
    </html>
  );
}
