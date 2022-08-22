import React from "react";
// import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="bg-dark-blue h-screen mx-auto px-80 py-20 box-border text-primary">
      {/* <Navbar /> */}
      {children}
    </div>
  );
}

export default Layout;
