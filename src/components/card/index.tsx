import React from 'react'

/* Gatsby */
import { graphql } from 'gatsby'

/* Gatsby Plugin Image */
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

/* MUI */
import Box from '@mui/material/Box'
import MUICard from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export const contentfulCardContent = graphql`
  fragment ContentfulCardContent on ContentfulCard {
    media {
      gatsbyImageData(formats: WEBP)
    }
    name
    description
  }
`

const Card: React.FC<Queries.ContentfulCardContentFragment> = ({
  media,
  name,
  description,
}) => {
  const image = media ? getImage(media) : null
  return (
    <MUICard sx={{ height: '100%' }} variant="outlined">
      <Stack spacing={1} p={3}>
        {image && (
          <Box>
            <Box
              component={GatsbyImage}
              alt={name ?? ''}
              image={image}
              maxWidth={80}
              m={1}
            />
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
    </MUICard>
  )
}

export default Card
