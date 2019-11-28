module.exports = {
  siteMetadata: {
    title: 'Mateo Pérez Salazar - Portafolio',
    siteUrl: 'https://mateo-perez-salazar.netlify.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#f6f1ed',
        theme_color: '#f6f1ed',
        display: 'minimal-ui',
        icon: 'src/images/favicon.webp' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://mateo-perez-salazar.netlify.com',
        sitemap: 'https://mateo-perez-salazar.netlify.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
    // 'gatsby-plugin-offline',
  ]
};
