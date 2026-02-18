import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import BackToTop from "../components/BackToTop";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "ONORGHO UNIS - Batch of 2019",
  description: "Shibganj Government Model High School alumni list",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white antialiased animated-bg transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="theme">
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <BackToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
