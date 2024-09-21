import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";
import "./globals.css";
import "animate.css";
import BtnWspMobile from "@/components/home/BtnWspMobile";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: `Grupo Comfisa SAC`,
  description:
    "Empresa de venta de materiales de construcción a por mayor y menor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-orange-100/30 antialiased`}
      >
        <Header />
        {children}
        <Footer />

        <BtnWspMobile />
      </body>
    </html>
  );
}
