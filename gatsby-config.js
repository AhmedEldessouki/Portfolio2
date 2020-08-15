module.exports = {
  siteMetadata: {
    title: `Ahmed ElDessouki Portfolio `,
    description: `This website is for showing my work as a React Front End Developer`,
    author: `Ahmed ElDessouki`,
    social: [
      {
        name: `Email`,
        link: `nemoahmed@hotmail.co.uk`,
        location: `footer`, // Options are "all", "header", "footer"
      },
      {
        name: `linkedin`,
        url: `https://linkedin.com/ahmedeldessouki`,
      },
      {
        name: `github`,
        url: `https://github.com/ahmedeldessouki`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 85,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ahmed elDessouki portfolio`,
        short_name: `nemz`,
        start_url: `/`,
        lang: `en`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['src/images/gatsby-icon.png'], // my goes logo
        },
      },
    },
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: '@theme-ui/preset-funk',
      },
    },
  ],
}
