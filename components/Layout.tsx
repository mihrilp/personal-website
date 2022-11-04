import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="box-border w-4/6 text-white">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
