import React from "react";
import SocialList from "./SocialList";

export default function Footer() {
  return (
    <footer className="bg-gray-50 shadow-lg border shadow-black py-8 flex flex-col items-center">
      <div className="font-light textbase sm:text-lg text-center">
        &copy; Copyright {new Date().getFullYear()} KRYPTOLITE.
      </div>
      <div>
        <SocialList />
      </div>
    </footer>
  );
}
