import type { Metadata } from "next";
import {  Source_Code_Pro } from "next/font/google";
import "./globals.css";

//Geist, Geist_Mono,
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: ["200", "400", "700"] });
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={sourceCodePro.className}
      >
        {children}
      </body>
    </html>
  );
}
