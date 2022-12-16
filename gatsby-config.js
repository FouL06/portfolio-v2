/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Ashton Foulger",
    description: "Ashton Foulger, DevOps Engineer | Fullstack Developer",
    siteUrl: `https://FouL06.github.io`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Ashton Foulger",
        short_name: "Ashton Foulger",
        start_url: "/",
        icon: "src/images/Logo.png",
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
