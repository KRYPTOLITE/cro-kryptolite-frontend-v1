import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";
import ogImage from "../images/icon.png";
import twitterImage from "../images/icon.png";

interface SEOProps {
  description: string;
  meta?: any[];
  slug?: string;
  title?: string;
  lang?: string;
  image?: { og: string; twitter: string };
}

const query = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;

function SEO({
  meta = [],
  title = "",
  description,
  slug = "",
  image,
}: SEOProps) {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const { siteMetadata } = data.site;
        const metaDescription = description || siteMetadata.description;
        const metaImages = image
          ? image
          : { og: ogImage, twitter: twitterImage };
        const getMetaImageUrl = (image: string) =>
          `${siteMetadata.siteUrl}${image}`;
        const url = `${siteMetadata.siteUrl}${slug}`;
        const twitterUrl = "@KryptoliteSwap";
        return (
          <Fragment>
            {title ? (
              <title>
                {title} — {siteMetadata.title}
              </title>
            ) : (
              <title>{siteMetadata.title} — Official website</title>
            )}
            {[
              {
                name: "description",
                content: metaDescription,
              },
              {
                property: "og:url",
                content: url,
              },
              {
                property: "og:title",
                content: title || siteMetadata.title,
              },
              {
                property: "og:description",
                content: metaDescription,
              },
              {
                name: "twitter:card",
                content: "summary",
              },
              {
                name: "twitter:creator",
                content: twitterUrl,
              },
              {
                name: "twitter:title",
                content: title || siteMetadata.title,
              },
              {
                name: "twitter:description",
                content: metaDescription,
              },
            ]
              .concat([
                {
                  property: "og:image",
                  content: getMetaImageUrl(metaImages.og),
                },
                {
                  name: "twitter:image",
                  content: getMetaImageUrl(metaImages.twitter),
                },
              ])
              .concat(meta)
              .map(({ name, property, content }, i) => (
                <meta
                  key={i}
                  name={name}
                  property={property}
                  content={content}
                />
              ))}
          </Fragment>
        );
      }}
    />
  );
}

export default SEO;
