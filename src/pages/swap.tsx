import React from "react";
import SEO from "../components/SEO";
import Swap from "../views/Swap";
import previewOgImags from "../../static/images/kryptolite-swap-og-image.jpg";
import previewTwitterImags from "../../static/images/kryptolite-swap-twitter-preview-image.jpg";
import Layout from "../components/Layouts";
import { HeadFC } from "gatsby";

export default function SwapPage() {
  return (
    <Layout>
      <Swap />
    </Layout>
  );
}

export const Head: HeadFC = () => (
  <SEO
    title="Swap"
    description="Trade tokens in an instant"
    image={{ og: previewOgImags, twitter: previewTwitterImags }}
  />
);
