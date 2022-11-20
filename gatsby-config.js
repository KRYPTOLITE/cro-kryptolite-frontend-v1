/** @type { import('gatsby').GatsbyConfig }*/
module.exports = {
  siteMetadata: {
    title: `KRYPTOLITE - the next 100X DeFi gem you don't want to miss`,
    siteUrl: "https://kryptolite.rocks",
    description: "KRYPTOLITE - the next 100X DeFi gem you don't want to miss",
  },
  trailingSlash: "never",
  graphqlTypegen: false,
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "GTM-MHRZ3C3",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#80CC18",
        showSpinner: true,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -200,
      },
    },
    "gatsby-plugin-no-sourcemaps",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/GlobalAppWrapper.tsx"),
      },
    },
  ],
};
