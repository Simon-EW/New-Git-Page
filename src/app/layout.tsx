import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Git",
  description: "Main page for Git",
  visualViewport: {
    width: "device-width",
    height: "device-height",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
