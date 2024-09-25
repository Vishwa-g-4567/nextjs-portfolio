import "./globals.css";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "Portfolio | Vishwa",
  description:
    "Explore my portfolio built with Next.js, showcasing modern web development skills, responsive design, and seamless user experiences. Discover projects demonstrating expertise in React, server-side rendering (SSR), API integration, and optimized performance.",
  icons: {
    icon: "/images/profile/developer-pic-1.png",
    apple: "/images/profile/developer-pic-1.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans bg-light dark:bg-dark w-full min-h-screen antialiased`}
      >
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) { document.documentElement.classList.add('dark') } else { document.documentElement.classList.remove('dark') }`}
        </Script>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
