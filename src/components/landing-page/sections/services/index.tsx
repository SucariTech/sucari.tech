import React from 'react'

/* Components */
import Card from '@components/card'

/* Gatsby */
import { graphql } from 'gatsby'

/* Gatsby Source Contentful */
import { renderRichText } from 'gatsby-source-contentful/rich-text'

/* MUI */
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

/* Shared Styles */
import {
  Container,
  Content,
  SectionName,
  SectionParagraph,
  getHeadingOptions,
} from '@components/shared/styles'

export const contentfulServicesComponentContent = graphql`
  fragment ContentfulServicesComponentContent on ContentfulServicesComponent {
    __typename
    name
    heading {
      raw
    }
    description
    cards {
      ...ContentfulCardContent
    }
  }
`

const ServicesSection: React.FC<
  Queries.ContentfulServicesComponentContentFragment
> = ({ __typename: id, name, heading, description, cards }) => {
  return (
    <Container id={id} bgcolor="secondary.light">
      <Content>
        <Content maxWidth="md">
          {!!name && <SectionName>{name}</SectionName>}
          {!!heading && renderRichText(heading, getHeadingOptions('h2'))}
          {!!description && <SectionParagraph>{description}</SectionParagraph>}
        </Content>
        {!!cards?.length && (
          <Box width="100%">
            <Grid container spacing={3}>
              {cards.map(
                (card, index) =>
                  card && (
                    <Grid key={index} item md={6} xs={12}>
                      <Card {...card} />
                    </Grid>
                  ),
              )}
            </Grid>
          </Box>
        )}
      </Content>
    </Container>
  )
}

export default ServicesSection
