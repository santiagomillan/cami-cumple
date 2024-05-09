import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "app/components/organisms/Header/Header";
import Footer from "app/components/organisms/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feliz cumple amor",
  description: "Feliz cumpleaños mi vida",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
