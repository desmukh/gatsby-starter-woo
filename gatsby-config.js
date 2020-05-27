/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Woo - Free Responsive HTML5/CSS3 Template`,
    author: {
      name: `Joe Bloggs`,
    },
    description: `Woo is a clean, modern, landing page site template.`,
    social: {
      twitter: `styleshout`,
      facebook: `styleshout`,
      google: `styleshout`,
    },
    favicon: `favicon.png`,
    logo: `images/logo.png`
  },
  plugins: [ `gatsby-plugin-anchor-links`, `gatsby-plugin-smoothscroll`, `react-scrollspy` ],
}
