'use client'

import React from 'react'

/* Components */
import ContentfulCard from '@/components/contentful-card'

/* Contentful Rich Text */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

/* Generated Contentful */
import type { ContentfulServicesComponentContentFragment } from '@/generated/contentful'

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
} from '@/components/shared/styles'

const ServicesComponent: React.FC<
  ContentfulServicesComponentContentFragment
> = ({ __typename: id, cardsCollection, description, heading, name }) => {
  return (
    <Container id={id} bgcolor="secondary.light">
      <Content>
        <Content maxWidth="md">
          {!!name && <SectionName>{name}</SectionName>}
          {!!heading &&
            documentToReactComponents(heading.json, getHeadingOptions('h2'))}
          {!!description && <SectionParagraph>{description}</SectionParagraph>}
        </Content>
        {!!cardsCollection?.items.length && (
          <Box width="100%">
            <Grid container spacing={3}>
              {cardsCollection.items.map(
                (card, index) =>
                  card && (
                    <Grid key={index} size={{ md: 6, xs: 12 }}>
                      <ContentfulCard {...card} />
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

export default ServicesComponent
