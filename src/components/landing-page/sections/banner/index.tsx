import React from 'react'

/* Components */
import Card from '@components/card'

/* Gatsby */
import { graphql } from 'gatsby'

/* Gatsby Source Contentful */
import { renderRichText } from 'gatsby-source-contentful/rich-text'

/* Hooks */
import useMenu from '@hooks/use-menu'

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
  getHeadingOptions,
} from '@components/shared/styles'

export const contentfulBannerComponentContent = graphql`
  fragment ContentfulBannerComponentContent on ContentfulBannerComponent {
    __typename
    heading {
      raw
    }
    description
    subheading {
      raw
    }
    body
    buttons {
      text
      reference {
        __typename
      }
    }
    cards {
      ...ContentfulCardContent
    }
  }
`

const BannerSection: React.FC<
  Queries.ContentfulBannerComponentContentFragment
> = ({
  __typename: id,
  heading,
  description,
  subheading,
  body,
  buttons,
  cards,
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
              {!!heading && renderRichText(heading, getHeadingOptions('h1'))}
              {!!description && (
                <SectionParagraph>{description}</SectionParagraph>
              )}
            </Content>
            {!!subheading &&
              renderRichText(subheading, getHeadingOptions('p', 'h4'))}
            {!!body && <SectionParagraph>{body}</SectionParagraph>}
            {!!buttons?.length && (
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
                {buttons.map((button, index) => (
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
        {!!cards?.length && (
          <Box width="100%">
            <Grid container spacing={3}>
              {cards.map(
                (card, index) =>
                  card && (
                    <Grid key={index} item md={6} xs={12} textAlign="start">
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

export default BannerSection
