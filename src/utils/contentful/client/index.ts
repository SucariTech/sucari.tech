/* Generated Contentful */
import { getSdk } from '@/generated/contentful'

/* GraphQL Request */
import { GraphQLClient } from 'graphql-request'

const graphQLClient = new GraphQLClient(
  `${process.env.CONTENTFUL_HOST}/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  {
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  },
)

const client = getSdk(graphQLClient)

export default client
