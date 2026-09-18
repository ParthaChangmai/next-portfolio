import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Manrope } from "next/font/google";

import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Partha Pratim Changmai | Frontend & Full Stack Engineer",
  description:
    "Portfolio of Partha Pratim Changmai, a frontend and full stack engineer working with React, Next.js, TypeScript, Node.js, REST APIs, and PostgreSQL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${manrope.className} relative min-h-screen bg-[#f4f1e9] pt-24 text-[#10110f] antialiased selection:bg-[#c7ff35] selection:text-[#10110f] sm:pt-32 dark:bg-[#090a08] dark:text-[#f4f1e9]`}
      >
        <div className="ambient-bg" />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
