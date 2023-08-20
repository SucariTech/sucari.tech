import React from 'react'

/* Config */
import config from '@config'

/* Gatsby */
import { graphql } from 'gatsby'

/* Gatsby Source Contentful */
import { renderRichText } from 'gatsby-source-contentful/rich-text'

/* Head */
import { getDomainName } from '@head'

/* HotForm */
import { useHotForm } from '@hotform/react'

/* MUI */
import Alert from '@mui/material/Alert'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import Snackbar from '@mui/material/Snackbar'
import TextField from '@mui/material/TextField'
import type { AlertColor } from '@mui/material/Alert'
import type { SnackbarCloseReason } from '@mui/material/Snackbar'

/* MUI Icons */
import ReportProblem from '@mui/icons-material/ReportProblem'

/* Shared Styles */
import {
  Container,
  Content,
  CustomizedButton,
  SectionName,
  SectionParagraph,
  getHeadingOptions,
  getNoticeOptions,
} from '@components/shared/styles'

/* Yup */
import * as Yup from 'yup'

export const contentfulContactComponentContent = graphql`
  fragment ContentfulContactComponentContent on ContentfulContactComponent {
    __typename
    name
    heading {
      raw
    }
    description
    formFields {
      key
      label
    }
    notice {
      raw
    }
    formButtonText
    errorMessage
    siteLogo {
      url
    }
  }
`

export interface ContactUserData {
  company: string
  emailAddress: string
  firstName: string
  lastName: string
  message: string
  phoneNumber: string
}

export interface ContactFormData extends ContactUserData {
  languageCode?: string
  hyperlink?: string
  siteLogoSource: string
}

export const submitContactFormData = async ({
  hyperlink = `https://${getDomainName(config.languageCode)}/`,
  languageCode = config.languageCode,
  ...data
}: ContactFormData): Promise<any> => {
  try {
    const response = await fetch(`${config.apiHost}/contact/get-in-touch`, {
      method: 'POST',
      headers: {
        'Accept-Language': languageCode,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        hyperlink,
      }),
    })
    return await response.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

const ContactSection: React.FC<
  Queries.ContentfulContactComponentContentFragment
> = ({
  __typename: id,
  name,
  heading,
  description,
  formFields,
  notice,
  formButtonText,
  errorMessage,
  siteLogo,
}) => {
  const [openSnackbar, setOpenSnackbar] = React.useState(false)
  const [alertMessage, setAlertMessage] = React.useState<string | null>(null)
  const [alertSeverity, setAlertSeverity] = React.useState<
    AlertColor | undefined
  >(undefined)
  const {
    currentSchema,
    handleBlur,
    handleChange,
    handleSubmit,
    resetSchema,
    submitting,
  } = useHotForm<ContactUserData>({
    initialSchema: {
      firstName: {
        valid: true,
        validator: value =>
          Yup.string().max(100).required().trim().isValidSync(value),
        value: '',
      },
      lastName: {
        valid: true,
        validator: value =>
          Yup.string().max(100).required().trim().isValidSync(value),
        value: '',
      },
      emailAddress: {
        valid: true,
        validator: value =>
          Yup.string().email().max(255).required().trim().isValidSync(value),
        value: '',
      },
      phoneNumber: {
        valid: true,
        validator: value =>
          Yup.string().max(50).required().trim().isValidSync(value),
        value: '',
      },
      company: {
        valid: true,
        validator: value =>
          Yup.string().max(50).required().trim().isValidSync(value),
        value: '',
      },
      message: {
        valid: true,
        validator: value =>
          Yup.string().max(3000).required().trim().isValidSync(value),
        value: '',
      },
    },
    async onValid({ fieldValues, setSubmitting }) {
      const result = await submitContactFormData({
        ...fieldValues,
        siteLogoSource: siteLogo?.url ?? '',
      })
      let severity: AlertColor = 'error'
      let message = result?.errorMessage ?? errorMessage

      if (result?.successMessage) {
        severity = 'success'
        message = result.successMessage
        resetSchema()
      }

      setAlertSeverity(severity)
      setAlertMessage(message)
      setSubmitting(false)
      setOpenSnackbar(true)
    },
  })

  const handleSnackbarClose = React.useCallback(
    (_?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
      if (reason !== 'clickaway') {
        setOpenSnackbar(false)
      }
    },
    [],
  )

  return (
    <Container id={id}>
      <Backdrop
        open={submitting}
        sx={theme => ({
          zIndex: theme.zIndex.drawer + 1,
        })}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
      <Snackbar
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        open={openSnackbar}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={alertSeverity}
          sx={{ width: '100%' }}
          variant="filled"
        >
          {alertMessage}
        </Alert>
      </Snackbar>
      <Content>
        <Content maxWidth="md">
          {!!name && <SectionName>{name}</SectionName>}
          {!!heading && renderRichText(heading, getHeadingOptions('h2'))}
          {!!description && <SectionParagraph>{description}</SectionParagraph>}
        </Content>
        <Box width="100%">
          <Grid
            autoComplete="off"
            container
            component="form"
            spacing={3}
            onSubmit={handleSubmit}
          >
            {!!formFields?.length &&
              formFields.map(
                (formField, index) =>
                  (formField?.key ?? '') in currentSchema && (
                    <Grid
                      item
                      key={index}
                      sm={
                        ['firstName', 'lastName'].includes(formField?.key ?? '')
                          ? 6
                          : false
                      }
                      xs={12}
                    >
                      <TextField
                        InputProps={{
                          endAdornment: !currentSchema[
                            formField?.key as keyof ContactUserData
                          ].valid && (
                            <InputAdornment position="end">
                              <ReportProblem color="error" />
                            </InputAdornment>
                          ),
                        }}
                        error={
                          !currentSchema[
                            formField?.key as keyof ContactUserData
                          ].valid
                        }
                        fullWidth
                        label={formField?.label}
                        maxRows={4}
                        minRows={4}
                        multiline={formField?.key === 'message'}
                        name={formField?.key ?? ''}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={
                          currentSchema[formField?.key as keyof ContactUserData]
                            .value
                        }
                        variant="filled"
                      />
                    </Grid>
                  ),
              )}
            <Grid item xs={12} textAlign="start">
              {!!notice && renderRichText(notice, getNoticeOptions())}
            </Grid>
            <Grid item xs={12}>
              <CustomizedButton
                disabled={submitting}
                fullWidth
                sx={{
                  textTransform: 'uppercase',
                }}
                type="submit"
                variant="contained"
              >
                {formButtonText}
              </CustomizedButton>
            </Grid>
          </Grid>
        </Box>
      </Content>
    </Container>
  )
}

export default ContactSection
