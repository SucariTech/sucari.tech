import React from 'react'

/* Components */
import Logo from '@components/logo'

/* Config */
import config from '@config'

/* Gatsby */
import { graphql } from 'gatsby'

/* Head */
import { getDomainName } from '@head'

/* MUI */
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

/* MUI Icons */
import Email from '@mui/icons-material/Email'
import FacebookOutlined from '@mui/icons-material/FacebookOutlined'
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Phone from '@mui/icons-material/Phone'
import Translate from '@mui/icons-material/Translate'
import Twitter from '@mui/icons-material/Twitter'

/* Shared Styles */
import { Content } from '@components/shared/styles'

export const contentfulFooterMenuContent = graphql`
  fragment ContentfulFooterMenuContent on ContentfulFooterMenu {
    facebookLink
    gitHubLink
    linkedInLink
    twitterLink
    contactGroupName
    contactPhoneNumber
    contactEmailAddress
    languageGroupName
  }
`

export interface FooterProps {
  footerMenuContent?: Queries.ContentfulFooterMenuContentFragment | null
}

const Footer: React.FC<FooterProps> = ({ footerMenuContent }) => {
  return (
    <Paper
      component="footer"
      sx={{
        borderBottom: 'none',
        borderLeft: 'none',
        borderRight: 'none',
      }}
      variant="outlined"
    >
      <Box p={3}>
        <Content>
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <Stack spacing={2}>
                <Stack direction="row" alignItems="center" spacing={1.6}>
                  <Logo fontSize="large" sx={{ p: 0.3 }} />
                  <Typography
                    component="span"
                    fontWeight={600}
                    variant="subtitle1"
                  >
                    {config.name}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    '.MuiLink-root:hover': {
                      color: 'secondary.main',
                    },
                  }}
                >
                  {!!footerMenuContent?.facebookLink && (
                    <Link
                      aria-label="Facebook Link"
                      href={footerMenuContent.facebookLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FacebookOutlined fontSize="medium" />
                    </Link>
                  )}
                  {!!footerMenuContent?.gitHubLink && (
                    <Link
                      aria-label="GitHub Link"
                      href={footerMenuContent.gitHubLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <GitHub fontSize="medium" />
                    </Link>
                  )}
                  {!!footerMenuContent?.linkedInLink && (
                    <Link
                      aria-label="LinkedIn Link"
                      href={footerMenuContent.linkedInLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <LinkedIn fontSize="medium" />
                    </Link>
                  )}
                  {!!footerMenuContent?.twitterLink && (
                    <Link
                      aria-label="Twitter Link"
                      href={footerMenuContent.twitterLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Twitter fontSize="medium" />
                    </Link>
                  )}
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={4} xs={12}>
              <Stack
                spacing={1.25}
                sx={{
                  '.MuiLink-root:hover': {
                    color: 'secondary.main',
                  },
                }}
              >
                <Typography
                  component="p"
                  fontWeight={500}
                  textAlign="start"
                  textTransform="uppercase"
                  variant="subtitle1"
                >
                  {footerMenuContent?.contactGroupName}
                </Typography>
                <Stack
                  component={Link}
                  direction="row"
                  href={`mailto:${footerMenuContent?.contactEmailAddress}`}
                  spacing={2}
                  variant="subtitle1"
                >
                  <Email />
                  <span>{footerMenuContent?.contactEmailAddress}</span>
                </Stack>
                <Stack
                  component={Link}
                  direction="row"
                  href={`tel:${footerMenuContent?.contactPhoneNumber}`}
                  spacing={2}
                  variant="subtitle1"
                >
                  <Phone />
                  <span>{footerMenuContent?.contactPhoneNumber}</span>
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={4} xs={12}>
              <Autocomplete
                defaultValue={config.deployedTranslations.find(
                  ({ code }) => code === config.languageCode,
                )}
                disableClearable
                filterSelectedOptions
                getOptionLabel={option => option.name}
                onChange={(_, language) => {
                  window.location.href = `https://${getDomainName(
                    language.code,
                  )}${window.location.pathname}`
                }}
                options={config.deployedTranslations}
                renderInput={params => (
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <Translate color="primary" />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                    label={footerMenuContent?.languageGroupName}
                    name="language"
                    variant="standard"
                  />
                )}
              />
            </Grid>
          </Grid>
        </Content>
      </Box>
      <Paper
        sx={{
          borderBottom: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          px: 3,
          py: 2,
        }}
        variant="outlined"
      >
        <Content>
          <Typography component="p" color="text.secondary" variant="subtitle1">
            © {new Date().getFullYear()} {config.name}
          </Typography>
        </Content>
      </Paper>
    </Paper>
  )
}

export default Footer
