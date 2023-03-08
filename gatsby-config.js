/**
 * @type {import('gatsby').GatsbyConfig}
 */

const fs = require("fs");
const dotenv = require("dotenv");
const envConfig = dotenv.parse(fs.readFileSync(".env"));
for (var k in envConfig) {
  process.env[k] = envConfig[k];
}

module.exports = {
  siteMetadata: {
    title: `Sebastian Gertz`,
    siteUrl: `https://www.sebastiangertz.com`,
    description: "Personal blog and portfolio site",
    image: "👨🏻‍💻",
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: "vb0h3gv8lx2b",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-layout",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
