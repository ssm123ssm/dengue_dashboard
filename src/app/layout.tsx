import "./globals.scss";
import "react-tooltip/dist/react-tooltip.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ReduxProvider } from "@/store/providers";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dengue Dashboard",
  description: "Dengue",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer theme="light" />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
