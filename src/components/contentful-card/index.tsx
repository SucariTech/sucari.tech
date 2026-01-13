'use client'

import React from 'react'

/* Components */
import ContentfulImage from '@/components/contentful-image'

/* Generated Contentful */
import type { ContentfulCardContentFragment } from '@/generated/contentful'

/* MUI */
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const ContentfulCard: React.FC<ContentfulCardContentFragment> = ({
  description,
  media,
  name,
}) => {
  return (
    <Card sx={{ height: '100%' }} variant="outlined">
      <Stack spacing={1} p={3}>
        {media && (
          <Box>
            <ContentfulImage {...media} />
          </Box>
        )}
        {name && (
          <Typography component="p" fontWeight={500} variant="h6">
            {name}
          </Typography>
        )}
        {description && (
          <Typography
            component="p"
            color="text.secondary"
            fontWeight={400}
            variant="subtitle1"
          >
            {description}
          </Typography>
        )}
      </Stack>
    </Card>
  )
}

export default ContentfulCard
