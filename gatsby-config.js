module.exports = {
  siteMetadata: {
    title: "t4c macro",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
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
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://167.172.228.31',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'this-weeks',
          'macro-weeks',
          'curated-politics',
          'bloomberg-squawks',
          'user'
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
