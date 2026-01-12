'use client'

import React from 'react'

/* Components */
import Logo from '@/components/logo'

/* Config */
import config from '@/config'

/* Generated Contentful */
import type { ContentfulFooterMenuContentFragment } from '@/generated/contentful'

/* MUI */
import Autocomplete from '@mui/material/Autocomplete'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

/* MUI Icons */
import EmailIcon from '@mui/icons-material/Email'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIcon from '@mui/icons-material/Phone'
import TranslateIcon from '@mui/icons-material/Translate'
import TwitterIcon from '@mui/icons-material/Twitter'

/* Next.js */
import { usePathname } from 'next/navigation'

/* Shared Styles */
import { Content } from '@/components/shared/styles'

/* Utils */
import { getDomainName } from '@/utils'

export interface FooterProps {
  footerMenuContent?: ContentfulFooterMenuContentFragment | null
}

const Footer: React.FC<FooterProps> = ({ footerMenuContent }) => {
  const pathname = usePathname()
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
      <Toolbar>
        <Content py={1.75}>
          <Grid container spacing={2} width="100%">
            <Grid size={{ md: 4, sm: 6, xs: 12 }}>
              <Stack spacing={2}>
                <Stack direction="row" alignItems="center" spacing={1.6}>
                  <Logo sx={{ fontSize: 30 }} />
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
                      <FacebookOutlinedIcon fontSize="medium" />
                    </Link>
                  )}
                  {!!footerMenuContent?.gitHubLink && (
                    <Link
                      aria-label="GitHub Link"
                      href={footerMenuContent.gitHubLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <GitHubIcon fontSize="medium" />
                    </Link>
                  )}
                  {!!footerMenuContent?.linkedInLink && (
                    <Link
                      aria-label="LinkedIn Link"
                      href={footerMenuContent.linkedInLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <LinkedInIcon fontSize="medium" />
                    </Link>
                  )}
                  {!!footerMenuContent?.twitterLink && (
                    <Link
                      aria-label="Twitter Link"
                      href={footerMenuContent.twitterLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <TwitterIcon fontSize="medium" />
                    </Link>
                  )}
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ md: 4, sm: 6, xs: 12 }}>
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
                  <EmailIcon />
                  <span>{footerMenuContent?.contactEmailAddress}</span>
                </Stack>
                <Stack
                  component={Link}
                  direction="row"
                  href={`tel:${footerMenuContent?.contactPhoneNumber}`}
                  spacing={2}
                  variant="subtitle1"
                >
                  <PhoneIcon />
                  <span>{footerMenuContent?.contactPhoneNumber}</span>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ md: 4, sm: 6, xs: 12 }}>
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
                  )}${pathname}`
                }}
                options={config.deployedTranslations}
                renderInput={params => (
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <TranslateIcon color="primary" />
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
      </Toolbar>
      <Paper
        sx={{
          borderBottom: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          py: 1.75,
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
