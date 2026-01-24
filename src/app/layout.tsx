import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Portfolio IDE",
  description: "A developer portfolio built with a Cursor IDE interface.",
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
