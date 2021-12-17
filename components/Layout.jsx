import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
