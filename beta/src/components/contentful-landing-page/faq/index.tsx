'use client'

import React from 'react'

/* Contentful Rich Text */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

/* Generated Contentful */
import type { ContentfulFaqComponentContentFragment } from '@/generated/contentful'

/* MUI */
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

/* MUI Icons */
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

/* Shared Styles */
import {
  Container,
  Content,
  SectionName,
  SectionParagraph,
  getAnswerOptions,
  getHeadingOptions,
} from '@/components/shared/styles'

const FaqComponent: React.FC<ContentfulFaqComponentContentFragment> = ({
  __typename: id,
  description,
  heading,
  name,
  questionsCollection,
}) => {
  const [currentExpandedAccordion, setCurrentExpandedAccordion] =
    React.useState<number | false>(false)

  const handleChange = React.useCallback(
    (index: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setCurrentExpandedAccordion(isExpanded ? index : false)
    },
    [],
  )

  return (
    <Container id={id}>
      <Content>
        <Content maxWidth="md">
          {!!name && <SectionName>{name}</SectionName>}
          {!!heading &&
            documentToReactComponents(heading.json, getHeadingOptions('h2'))}
          {!!description && <SectionParagraph>{description}</SectionParagraph>}
        </Content>
        {!!questionsCollection?.items.length && (
          <Box width="100%">
            {questionsCollection.items.map((question, index) => (
              <Accordion
                key={index}
                disableGutters
                elevation={0}
                expanded={currentExpandedAccordion === index}
                sx={{
                  background: 'transparent',
                  borderLeft: 'none',
                  borderRight: 'none',
                  '::before': {
                    display: 'none',
                  },
                  ':not(:first-of-type)': {
                    borderTop: 'none',
                  },
                }}
                onChange={handleChange(index)}
                variant="outlined"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={theme => ({
                    color:
                      currentExpandedAccordion === index
                        ? theme.palette.secondary.main
                        : theme.palette.primary.main,
                    px: 0,
                    ':hover': {
                      color: theme.palette.secondary.main,
                    },
                  })}
                >
                  <Typography
                    component="p"
                    fontWeight={500}
                    py={1}
                    pr={2}
                    textAlign="start"
                    variant="subtitle1"
                  >
                    {question?.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: 'start' }}>
                  {question?.answer &&
                    documentToReactComponents(
                      question.answer.json,
                      getAnswerOptions(),
                    )}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        )}
      </Content>
    </Container>
  )
}

export default FaqComponent
