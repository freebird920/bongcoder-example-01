import type { Metadata } from "next";
import "./styles/globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Bongcoder 소개",
  description: "여름방학 과제 예시",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
