/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `goldwin-web-store`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  
plugins: [
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /images/ // See below to configure properly
      }
    }
  }
],
}
