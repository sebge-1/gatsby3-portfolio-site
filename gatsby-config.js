/**
 * @type {import('gatsby').GatsbyConfig}
 */

 const fs = require('fs');
 const dotenv = require('dotenv');
 const envConfig = 
 dotenv.parse(fs.readFileSync('.env'));
 for (var k in envConfig) {
   process.env[k] = envConfig[k];
 }

module.exports = {
  siteMetadata: {
    title: `gatsby3-portfolio-site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
      "spaceId": "vb0h3gv8lx2b"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-VWSTSMGH7S"
    }
  }, "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};