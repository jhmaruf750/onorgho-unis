import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import BackToTop from "../components/BackToTop";

import { Inter, Noto_Sans_Bengali, Playfair_Display } from "next/font/google";

export const metadata = {
  title: "ONORGHO UNIS - Batch of 2019",
  description: "Shibganj Government Model High School alumni list",
};

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const bengaliFont = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bengali",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          bodyFont.variable,
          headingFont.variable,
          bengaliFont.variable,
          "flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white antialiased transition-colors duration-300",
        ].join(" ")}
      >
      
          <Navbar />

          {/* MAIN CONTENT */}
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>

          <Footer />
          <BackToTop />
      
      </body>
    </html>
  );
}
