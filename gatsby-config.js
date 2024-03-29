module.exports = {
  siteMetadata: {
    title: `Wieser Brothers General Contractor, Inc.`,
    description: `Wieser Brothers General Contractor, META DESCRIPTION NEEDED`,
    author: 'mostlyClicks, LLC'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `6iwqaagnp0yo`,
        accessToken: `B7pU2_aB4CM_ABdL5xR0K65uMNzWCHCJL-Gls36sm0s`
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Muli`,
            variants: [`700`, `900`]
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
          {
            family: `IBM Plex Serif`,
            variants: [`400`, '700']
          },
        ],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
