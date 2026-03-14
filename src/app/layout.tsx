import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";
import { COMPANY } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} | ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`,
  },
  description: `${COMPANY.tagline}. Professional false ceiling, aluminium partition, glass partition, and interior finishing services across Haryana since ${COMPANY.established}.`,
  keywords: ["false ceiling", "aluminium partition", "glass partition", "interior contractors", "Haryana", "ceiling specialists"],
  openGraph: {
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CallButton />
      </body>
    </html>
  );
}
