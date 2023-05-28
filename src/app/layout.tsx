import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

// Initialize Inter font with latin subset
const inter = Inter({ subsets: ["latin"] });

// Define metadata for any page where it isn't overridden
export const metadata = {
  title: "Git",
  description: "Main page for Git",
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
