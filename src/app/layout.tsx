import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Portfolio IDE",
  description: "Madhan Kumar S, AI/ML Engineer building practical AI-powered applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
