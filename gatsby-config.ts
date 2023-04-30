/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://build-34005263-9485-42d2-9fe3-b08381db5474.gatsbyjs.io/`,
    title: "Welcome to my first Gatsby Site!",
    description: "My Blog of cute cat posts.",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-transformer-sharp",
  ],
};
