import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Link from "./Link";

export default function Logo() {
  return (
    <Link to="/">
      <StaticImage
        src="../images/icon.png"
        alt="KRYPTOLITE Logo"
        width={50}
        placeholder="blurred"
      />
    </Link>
  );
}
