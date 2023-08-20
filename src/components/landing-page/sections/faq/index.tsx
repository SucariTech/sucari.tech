import React from 'react'

/* Gatsby */
import { graphql } from 'gatsby'

/* Gatsby Source Contentful */
import { renderRichText } from 'gatsby-source-contentful/rich-text'

/* MUI */
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

/* MUI Icons */
import ExpandMore from '@mui/icons-material/ExpandMore'

/* Shared Styles */
import {
  Container,
  Content,
  SectionName,
  SectionParagraph,
  getAnswerOptions,
  getHeadingOptions,
} from '@components/shared/styles'

export const contentfulFAQComponentContent = graphql`
  fragment ContentfulFAQComponentContent on ContentfulFAQComponent {
    __typename
    name
    heading {
      raw
    }
    description
    questions {
      question
      answer {
        raw
      }
    }
  }
`

const FAQSection: React.FC<Queries.ContentfulFAQComponentContentFragment> = ({
  __typename: id,
  name,
  heading,
  description,
  questions,
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
          {!!heading && renderRichText(heading, getHeadingOptions('h2'))}
          {!!description && <SectionParagraph>{description}</SectionParagraph>}
        </Content>
        {!!questions?.length && (
          <Box width="100%">
            {questions.map((question, index) => (
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
                  expandIcon={<ExpandMore />}
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
                    renderRichText(question.answer, getAnswerOptions())}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        )}
      </Content>
    </Container>
  )
}

export default FAQSection
