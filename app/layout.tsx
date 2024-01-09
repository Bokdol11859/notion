import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";

import GlobalProviders from "./global-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion",
  description: "The connected workspace where better, faster work happens.",
  icons: {
    icon: [
      {
        url: "/logo-dark.png",
        href: "/logo-dark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  );
}
