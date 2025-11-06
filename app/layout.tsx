import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingButtons from "@/components/floating-buttons";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Santori Solar Solutions | Expert Solar Panel Installation",
  description: "Santori Solar Solutions offers expert solar panel installation services in Uttar Pradesh, Madhya Pradesh, Uttarakhand, Bihar, and Maharashtra. Go solar today!",
  keywords: ["Santori Solar", "Santori Solar Solutions", "Best Solar Company", "solar installation", "solar panels", "solar energy", "renewable energy", "Uttar Pradesh", "Madhya Pradesh", "Uttarakhand", "Bihar", "Maharashtra"],
  openGraph: {
    title: "Santori Solar Solutions | Trusted Solar Installations in India",
    description: "We provide top-quality solar installation services in UP, MP, Uttarakhand, Bihar, and Maharashtra. Residential, commercial, and industrial solar power solutions.",
    url: "https://www.santorisolarsolutions.com",
    type: "website",
    images: [
      {
        url: "/img/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Santori Solar Solutions",
      },
    ],
  },
  verification: {
    google: "maLWDRU8EXob5w7GPnGsSZ-gdV1ePmgFNzk9Uvzaylw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${roboto.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
