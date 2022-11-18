const { resolve } = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_URL_ROOT
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: 'Json'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: resolve(__dirname, './content')
      }
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sucari Tech',
        short_name: 'sucari.tech',
        crossOrigin: 'use-credentials',
        icon: resolve(__dirname, './static/images/logo.png')
      }
    },
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [ process.env.GOOGLE_ANALYTICS_ID ]
      }
    }
  ].filter(Boolean)
};