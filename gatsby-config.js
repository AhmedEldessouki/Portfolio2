/* eslint-disable prettier/prettier */
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
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-mdx`,
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
        icon: `static/images/`, // This path is relative to the root of the site.
      },
    },
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
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'sx9h9cxs',
        dataset: 'production',
        // Live Editing
        overlayDrafts: true,
        watchMode: true,
        token:
          'skmuy0HGowBYIE04BzBUibyzotZxfS3dQW41RErtCaYcUZjntsAjlIx2DD3MEieZbTLnJ8baaIzVUYqnRESqTz3wpnErWpR7pzW4WHF3RWTeEvd6erX5qX8u05hTZ6bWkqvkeXwlLRV0KbZi0lJ6yAtyucMVrrcmNWue5sCJWZhugvmz569o',
      },
    },
  ],
};
