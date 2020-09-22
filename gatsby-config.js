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
        icons: [
          {
            src: 'static/logo/a48x48.png',
            sizes: '48x48',
            type: 'png',
          },
          {
            src: 'static/logo/a72x72.png',
            sizes: '72x72',
            type: 'png',
          },
          {
            src: 'static/logo/a96x96.png',
            sizes: '96x96',
            type: 'png',
          },
          {
            src: 'static/logo/a144x144.png',
            sizes: '144x144',
            type: 'png',
          },
          {
            src: 'static/logo/a256x256.png',
            sizes: '256x256',
            type: 'png',
          },
          {
            src: 'static/logo/a512x512.png',
            sizes: '512x512',
            type: 'png',
          },
        ], // This path is relative to the root of the site.
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
          globPatterns: ['images/'], // my goes logo
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
    `gatsby-plugin-netlify-cms`,
  ],
}
