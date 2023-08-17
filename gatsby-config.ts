import path from 'path'

/* Dependencies */
import dotenv from 'dotenv'
import type { GatsbyConfig } from 'gatsby'

dotenv.config()

const languageCode = process.env.GATSBY_LANGUAGE_CODE ?? 'en'
const domainName = process.env.GATSBY_DOMAIN_NAME ?? 'sucari.tech'

const config: GatsbyConfig = {
  graphqlTypegen: {
    typesOutputPath: 'src/generated/gatsby-types.d.ts',
  },
  siteMetadata: {
    siteUrl: `https://${
      languageCode === 'en' ? '' : languageCode + '.'
    }${domainName}`,
  },
  plugins: [
    'gatsby-plugin-emotion',
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
            'eslint-rules',
          ),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_ID].filter(Boolean),
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: process.env.GATSBY_APP_NAME,
        short_name: domainName,
        crossOrigin: 'use-credentials',
        icon: path.resolve(
          __dirname,
          'static',
          'images',
          'logo',
          '400x400.png',
        ),
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
  ],
}

export default config
