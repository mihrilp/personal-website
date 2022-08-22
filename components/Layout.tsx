import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="bg-dark-blue h-screen px-80 box-border font-roboto text-primary leading-7">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
