import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="h-screen box-border w-4/6 text-primary">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
