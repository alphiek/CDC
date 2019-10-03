module.exports = {
  siteMetadata: {
    siteUrl: "https://capedesigns.co",
    title: "Cape Designs Web Development & Graphic Design",
    description: "Professional web design, development and graphic design services",
    author: "Cape Designs",
    email: "hi@capedesigns.co",
    social: {
      twitter: 'https://twitter.com/rkkcreative/',
      insta: 'https://www.instagram.com/rkkcreative/',
      pin: 'https://www.pinterest.com/rkkcreative/',
      linked: 'https://www.linkedin.com/in/capedesigns/',
      facebook: 'https://www.facebook.com/RKKCreative/',
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.capedesigns.co',
        sitemap: 'https://www.capedesigns.co/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        host: 'capedesigns.co',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.capedesigns.co`,
      },
    },

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
        name: `Cape Designs`,
        short_name: `Cape Designs`,
        start_url: `/`,
        background_color: `#252527`,
        theme_color: `#252527`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
