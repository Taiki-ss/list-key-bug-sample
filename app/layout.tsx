import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "list key bug sample",
  description: "A sample project to demonstrate a list key bug",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
