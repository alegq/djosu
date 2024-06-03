import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// const dmSerifDisplay = DM_Serif_Display({ weight: 400, subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Djosu",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
