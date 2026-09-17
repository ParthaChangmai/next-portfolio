import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Manrope } from "next/font/google";

import Social from "@/components/Social";
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
        className={`${manrope.className} relative min-h-screen bg-[#f7f8f5] pt-28 text-slate-950 antialiased selection:bg-lime-300 selection:text-slate-950 sm:pt-36 dark:bg-[#080b0a] dark:text-[#f3f5ef]`}
      >
        <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(190,242,100,0.22),transparent_35%),radial-gradient(circle_at_15%_35%,rgba(56,189,248,0.12),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(132,204,22,0.12),transparent_32%),radial-gradient(circle_at_15%_35%,rgba(14,116,144,0.12),transparent_30%)]" />
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.025] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:48px_48px] dark:opacity-[0.05]" />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Social />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
