'use client'

import React from 'react'

/* Components */
import ContentfulRichTextHyperlink from '@/components/contentful-rich-text-hyperlink'

/* Contentful */
import type { Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'

/* MUI */
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { BoxProps } from '@mui/material/Box'
import type { ButtonProps } from '@mui/material/Button'
import type { StackProps } from '@mui/material/Stack'
import type { TypographyProps } from '@mui/material/Typography'
import type { TypographyVariant } from '@mui/material/styles'

export const Container: React.FC<BoxProps<'section'>> = ({
  children,
  ...props
}) => (
  <Box
    component="section"
    px={3}
    py={{
      sm: 6,
      xs: 4.5,
    }}
    {...props}
  >
    {children}
  </Box>
)

export const Content: React.FC<StackProps> = ({ children, ...props }) => (
  <Stack
    sx={{
      alignItems: 'center',
      position: 'relative',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
      width: '100%',
    }}
    maxWidth="lg"
    spacing={3}
    {...props}
  >
    {children}
  </Stack>
)

export const CustomizedButton: React.FC<ButtonProps> = ({
  children,
  ...props
}) => (
  <Button
    sx={theme => ({
      padding: theme.spacing(0.75, 2.6),
      ...theme.typography.subtitle1,
      fontWeight: 500,
      textTransform: 'none',
      [theme.breakpoints.down('xl')]: {
        padding: theme.spacing(0.75, 2),
        fontSize: theme.typography.subtitle2.fontSize,
      },
    })}
    disableElevation
    {...props}
  >
    {children}
  </Button>
)

export const SectionName: React.FC<TypographyProps<'p'>> = ({
  children,
  ...props
}) => (
  <Typography
    component="p"
    sx={theme => ({
      position: 'relative',
      paddingBottom: theme.spacing(1.5),
      fontWeight: 700,
      textTransform: 'uppercase',
      width: 'fit-content',
      '::after': {
        content: '""',
        position: 'absolute',
        display: 'block',
        height: 3,
        width: 40,
        bottom: 0,
        left: 'calc(50% - 20px)',
        background: theme.palette.secondary.main,
      },
      '::before': {
        content: '""',
        position: 'absolute',
        display: 'block',
        height: '1px',
        width: 120,
        bottom: 1,
        left: 'calc(50% - 60px)',
        background: theme.palette.text.secondary,
      },
    })}
    variant="h4"
    {...props}
  >
    {children}
  </Typography>
)

export const SectionParagraph: React.FC<TypographyProps<'p'>> = ({
  children,
  ...props
}) => (
  <Typography component="p" sx={{ fontWeight: 400 }} variant="h6" {...props}>
    {children}
  </Typography>
)

export const getAnswerOptions = (): Options => ({
  renderMark: {
    [MARKS.BOLD]: text => (
      <Box component="b" color="primary.main">
        {text}
      </Box>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <Typography
        component="p"
        color="text.secondary"
        fontWeight={400}
        variant="subtitle1"
      >
        {children}
      </Typography>
    ),
    [BLOCKS.UL_LIST]: (_, children) => (
      <Box component="ul" color="text.secondary">
        {children}
      </Box>
    ),
  },
})

export const getBodyOptions = (): Options => ({
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <SectionParagraph>{children}</SectionParagraph>
    ),
  },
})

export const getHeadingOptions = (
  component: React.ElementType = 'p',
  variant: TypographyVariant = 'h2',
): Options => ({
  renderMark: {
    [MARKS.BOLD]: text => (
      <Box component="b" color="secondary.main">
        {text}
      </Box>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <Typography
        component={component}
        color="primary"
        fontWeight={700}
        variant={variant}
      >
        {children}
      </Typography>
    ),
  },
})

export const getNoticeOptions = (): Options => ({
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <Typography
        component="p"
        color="text.secondary"
        fontWeight={400}
        variant="subtitle1"
      >
        {children}
      </Typography>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <ContentfulRichTextHyperlink color="secondary" node={node}>
        {children}
      </ContentfulRichTextHyperlink>
    ),
  },
})
