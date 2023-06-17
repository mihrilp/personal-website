"use client";
import "../styles/global.css";
import { Navbar } from "../components";
import { usePathname } from "next/navigation";
import { Roboto_Mono } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";

const paths = ["/", "/about", "/blog", "/projects"];

export const roboto_mono = Roboto_Mono({
  weight: ["100", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en" className={`${roboto_mono.variable}`}>
      <head>
        <title>Mihriban Alp</title>
        <meta
          name="description"
          content="Browse my portfolio to explore my work and skills in software development."
        />
      </head>
      <body className="box-border flex flex-col items-center h-screen bg-darkblue text-white overflow-auto">
        <div className="w-11/12 md:w-5/6 lg:w-4/6 h-full">
          {(paths.includes(pathname) || pathname.startsWith("/blog/")) && (
            <Navbar />
          )}
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </body>
    </html>
  );
}
