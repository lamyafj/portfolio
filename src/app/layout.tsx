import type { Metadata } from "next";
import { Source_Code_Pro, Zain } from "next/font/google";
import "./globals.css";

// Import and configure both fonts
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  // We'll store this font in a CSS variable
  variable: "--font-source-code-pro",
});


const zain = Zain({
  subsets: ["latin"], // or "arabic" if Zain supports it; check the Google Fonts page
  weight: ["400"],
  // We'll store this font in a CSS variable
  variable: "--font-zain",
});

export const metadata: Metadata = {
  title: "Lamya Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.variable} ${zain.variable} `}>
        {children}
      </body>
    </html>
  );
}
