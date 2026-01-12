'use client'

import React from 'react'

/* Components */
import ContentfulRichTextHyperlink from '@/components/contentful-rich-text-hyperlink'

/* Contentful */
import { INLINES } from '@contentful/rich-text-types'

/* Contentful Rich Text */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

/* Generated Contentful */
import type { ContentfulRichTextComponentContentFragment } from '@/generated/contentful'

/* MUI */
import Box from '@mui/material/Box'

/* Shared Styles */
import { Container } from '@/components/shared/styles'

const RichTextComponent: React.FC<
  ContentfulRichTextComponentContentFragment
> = ({ __typename: id, body }) => {
  return (
    <Container id={id} py={1}>
      <Box maxWidth="lg" mx="auto" width="100%">
        {!!body &&
          documentToReactComponents(body.json, {
            renderNode: {
              [INLINES.HYPERLINK]: (node, children) => (
                <ContentfulRichTextHyperlink color="secondary" node={node}>
                  {children}
                </ContentfulRichTextHyperlink>
              ),
            },
          })}
      </Box>
    </Container>
  )
}

export default RichTextComponent
