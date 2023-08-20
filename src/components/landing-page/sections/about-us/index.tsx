import React from 'react'

/* Gatsby */
import { graphql } from 'gatsby'

/* Gatsby Source Contentful */
import { renderRichText } from 'gatsby-source-contentful/rich-text'

/* Hooks */
import useMenu from '@hooks/use-menu'

/* MUI */
import Stack from '@mui/material/Stack'

/* Shared Styles */
import {
  Container,
  Content,
  CustomizedButton,
  SectionName,
  SectionParagraph,
  getHeadingOptions,
} from '@components/shared/styles'

export const contentfulAboutUsComponentContent = graphql`
  fragment ContentfulAboutUsComponentContent on ContentfulAboutUsComponent {
    __typename
    name
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
  }
`

const AboutUsSection: React.FC<
  Queries.ContentfulAboutUsComponentContentFragment
> = ({
  __typename: id,
  name,
  heading,
  description,
  subheading,
  body,
  buttons,
}) => {
  const { scrollToSection } = useMenu()
  return (
    <Container id={id}>
      <Content>
        <Content maxWidth="md">
          {!!name && <SectionName>{name}</SectionName>}
          {!!heading && renderRichText(heading, getHeadingOptions('h2'))}
          {!!description && <SectionParagraph>{description}</SectionParagraph>}
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
    </Container>
  )
}

export default AboutUsSection
