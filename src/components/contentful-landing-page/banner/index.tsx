'use client'

import React from 'react'

/* Components */
import ContentfulCard from '@/components/contentful-card'

/* Contentful Rich Text */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

/* Generated Contentful */
import type { ContentfulBannerComponentContentFragment } from '@/generated/contentful'

/* Hooks */
import useMenu from '@/hooks/use-menu'

/* MUI */
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

/* Shared Styles */
import {
  Container,
  Content,
  CustomizedButton,
  SectionParagraph,
  getBodyOptions,
  getHeadingOptions,
} from '@/components/shared/styles'

const BannerComponent: React.FC<ContentfulBannerComponentContentFragment> = ({
  __typename: id,
  body,
  buttonsCollection,
  cardsCollection,
  description,
  heading,
  subheading,
}) => {
  const { scrollToSection } = useMenu()
  return (
    <Container id={id} bgcolor="secondary.light">
      <Content>
        <Content
          sx={theme => ({
            '::after': {
              content: '""',
              position: 'absolute',
              height: '100%',
              width: '34%',
              opacity: 0.2,
              right: 0,
              top: 0,
              backgroundSize: '18px 18px',
              backgroundImage: `radial-gradient(${theme.palette.secondary.main} 20%, transparent 20%)`,
              zIndex: 0,
              [theme.breakpoints.down('sm')]: {
                display: 'none',
              },
            },
          })}
        >
          <Content zIndex={1}>
            <Content maxWidth="md">
              {!!heading &&
                documentToReactComponents(
                  heading.json,
                  getHeadingOptions('h1'),
                )}
              {!!description && (
                <SectionParagraph>{description}</SectionParagraph>
              )}
            </Content>
            {!!subheading &&
              documentToReactComponents(
                subheading.json,
                getHeadingOptions('p', 'h4'),
              )}
            {!!body && documentToReactComponents(body.json, getBodyOptions())}
            {!!buttonsCollection?.items.length && (
              <Stack
                direction={{
                  sm: 'row',
                  xs: 'column',
                }}
                justifyContent="center"
                spacing={{
                  sm: 3,
                  xs: 1,
                }}
                width="100%"
              >
                {buttonsCollection.items.map((button, index) => (
                  <CustomizedButton
                    key={index}
                    color="secondary"
                    onClick={() => {
                      scrollToSection(button?.reference?.__typename)
                    }}
                    variant={!index ? 'contained' : 'outlined'}
                  >
                    {button?.text}
                  </CustomizedButton>
                ))}
              </Stack>
            )}
          </Content>
        </Content>
        {!!cardsCollection?.items.length && (
          <Box width="100%">
            <Grid container spacing={3}>
              {cardsCollection.items.map(
                (card, index) =>
                  card && (
                    <Grid
                      key={index}
                      size={{ md: 6, xs: 12 }}
                      textAlign="start"
                    >
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

export default BannerComponent
