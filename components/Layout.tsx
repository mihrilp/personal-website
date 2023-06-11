import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
  children: React.ReactNode;
};

function Layout({ title, description, keywords, children }: Props) {
  return (
    <div className="box-border flex flex-col items-center h-screen bg-darkblue">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className="w-5/6 lg:w-4/6 text-white h-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
