import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      {/* Fixed navbar space */}
      <div className="h-[70px] invisible" />
      <main className="min-h-screen">{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}
