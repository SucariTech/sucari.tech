/* Dependencies */
import dotenv from 'dotenv'
import type { IGraphQLConfig } from 'graphql-config'

dotenv.config()

const config: IGraphQLConfig = {
  projects: {
    contentful: {
      schema: {
        [`${process.env.CONTENTFUL_HOST}/spaces/${process.env.CONTENTFUL_SPACE_ID}`]:
          {
            headers: {
              Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
            },
          },
      },
      documents: ['src/**/**.graphql'],
    },
  },
}

export default config
