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
        path: `${__dirname}/static/images/`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ahmed ElDessouki portfolio`,
        short_name: `Nemz`,
        start_url: `/`,
        lang: `en`,
        background_color: `#3A405A`,
        theme_color: `#282c34`,
        display: `minimal-ui`,
        icon: `static/images/me.png`, // This path is relative to the root of the site.
      },
    },
    // 'gatsby-plugin-manifest',
    `gatsby-plugin-emotion`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['static/images/'], // my goes logo
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 85,
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
