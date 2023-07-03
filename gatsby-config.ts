import path from 'path'

/* Dependencies */
import dotenv from 'dotenv'
import { GatsbyConfig } from 'gatsby'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
})

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_URL_ROOT
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        cacheLocation: path.resolve(__dirname, '.cache', '.eslintcache'),
        rulePaths: [
          path.resolve(
            __dirname,
            'node_modules',
            'gatsby',
            'dist',
            'utils',
            'eslint-rules'
          )
        ]
      }
    },
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
        path: path.resolve(__dirname, './content')
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
          include: /\.svg$/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sucari Tech',
        short_name: 'sucari.tech',
        crossOrigin: 'use-credentials',
        icon: path.resolve(__dirname, './static/images/logo.png')
      }
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_ID
        ].filter(Boolean)
      }
    }
  ]
}

export default config
