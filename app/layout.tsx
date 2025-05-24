import type { Metadata } from "next";
// import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/layout/nav";
import Footer from "@/components/Footer";

// const poppins = Poppins({
//   variable: "--font-poppins",
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin"],
// });

// const montserrat = Montserrat({
//   variable: "--font-montserrat",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Mighty Finance | Financing Your Goals",
  description: "Your go-to solution for quick business and personal loans. Get approved within minutes, hassle-free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <NavMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
