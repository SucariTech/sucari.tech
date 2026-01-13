'use client'

import React from 'react'

/* Contentful Rich Text */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

/* Generated Contentful */
import type { ContentfulAboutUsComponentContentFragment } from '@/generated/contentful'

/* Hooks */
import useMenu from '@/hooks/use-menu'

/* MUI */
import Stack from '@mui/material/Stack'

/* Shared Styles */
import {
  Container,
  Content,
  CustomizedButton,
  SectionName,
  SectionParagraph,
  getBodyOptions,
  getHeadingOptions,
} from '@/components/shared/styles'

const AboutUsComponent: React.FC<ContentfulAboutUsComponentContentFragment> = ({
  __typename: id,
  body,
  buttonsCollection,
  description,
  heading,
  name,
  subheading,
}) => {
  const { scrollToSection } = useMenu()
  return (
    <Container id={id}>
      <Content>
        <Content maxWidth="md">
          {!!name && <SectionName>{name}</SectionName>}
          {!!heading &&
            documentToReactComponents(heading.json, getHeadingOptions('h2'))}
          {!!description && <SectionParagraph>{description}</SectionParagraph>}
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
    </Container>
  )
}

export default AboutUsComponent
