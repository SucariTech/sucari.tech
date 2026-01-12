'use client'

import React from 'react'

/* Actions */
import { submitContactFormData } from '@/components/contentful-landing-page/contact/actions'

/* Components */
import type { ContactUserData } from '@/components/contact-mail-template'

/* Contentful Rich Text */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

/* Formik */
import { useFormik } from 'formik'

/* Generated Contentful */
import type { ContentfulContactComponentContentFragment } from '@/generated/contentful'

/* MUI */
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'

/* MUI Icons */
import ReportProblemIcon from '@mui/icons-material/ReportProblem'

/* Notistack */
import { useSnackbar } from 'notistack'

/* Shared Styles */
import {
  Container,
  Content,
  CustomizedButton,
  SectionName,
  SectionParagraph,
  getHeadingOptions,
  getNoticeOptions,
} from '@/components/shared/styles'

/* Yup */
import * as Yup from 'yup'

const ContactComponent: React.FC<ContentfulContactComponentContentFragment> = ({
  __typename: id,
  description,
  errorMessage,
  formButtonText,
  formFieldsCollection,
  heading,
  name,
  notice,
  siteLogo,
  successMessage,
}) => {
  const { enqueueSnackbar } = useSnackbar()

  const formik = useFormik<ContactUserData>({
    initialValues: {
      companyName: '',
      emailAddress: '',
      firstName: '',
      lastName: '',
      message: '',
      phoneNumber: '',
    },
    async onSubmit(values, { resetForm }) {
      try {
        const response = await submitContactFormData({
          ...values,
          siteLogoSource: siteLogo?.url ?? '',
        })

        if (response?.error) {
          enqueueSnackbar(errorMessage, {
            variant: 'error',
          })
          console.error(response.error.message)
          return
        }

        enqueueSnackbar(successMessage, {
          variant: 'success',
        })

        resetForm()
      } catch (error) {
        console.error(error)
      }
    },
    validationSchema: Yup.object({
      companyName: Yup.string().max(50).required().trim(),
      emailAddress: Yup.string().email().max(255).required().trim(),
      firstName: Yup.string().max(100).required().trim(),
      lastName: Yup.string().max(100).required().trim(),
      message: Yup.string().max(3000).required().trim(),
      phoneNumber: Yup.string().max(50).required().trim(),
    }),
  })

  return (
    <Container id={id}>
      <Backdrop
        open={formik.isSubmitting}
        sx={theme => ({
          zIndex: theme.zIndex.drawer + 1,
        })}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
      <Content>
        <Content maxWidth="md">
          {!!name && <SectionName>{name}</SectionName>}
          {!!heading &&
            documentToReactComponents(heading.json, getHeadingOptions('h2'))}
          {!!description && <SectionParagraph>{description}</SectionParagraph>}
        </Content>
        <Box width="100%">
          <Grid
            autoComplete="off"
            container
            component="form"
            spacing={3}
            onSubmit={formik.handleSubmit}
          >
            {!!formFieldsCollection?.items.length &&
              formFieldsCollection.items.map(
                (formField, index) =>
                  (formField?.key ?? '') in formik.values && (
                    <Grid
                      key={index}
                      size={{
                        sm: ['firstName', 'lastName'].includes(
                          formField?.key ?? '',
                        )
                          ? 6
                          : false,
                        xs: 12,
                      }}
                    >
                      <TextField
                        slotProps={{
                          input: {
                            endAdornment: formik.touched[
                              formField?.key as keyof ContactUserData
                            ] &&
                              !!formik.errors[
                                formField?.key as keyof ContactUserData
                              ] && (
                                <InputAdornment position="end">
                                  <ReportProblemIcon color="error" />
                                </InputAdornment>
                              ),
                          },
                        }}
                        error={
                          formik.touched[
                            formField?.key as keyof ContactUserData
                          ] &&
                          !!formik.errors[
                            formField?.key as keyof ContactUserData
                          ]
                        }
                        fullWidth
                        label={formField?.label}
                        maxRows={4}
                        minRows={4}
                        multiline={formField?.key === 'message'}
                        name={formField?.key ?? ''}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={
                          formik.values[formField?.key as keyof ContactUserData]
                        }
                        variant="filled"
                      />
                    </Grid>
                  ),
              )}
            <Grid size={{ xs: 12 }} textAlign="start">
              {!!notice &&
                documentToReactComponents(notice.json, getNoticeOptions())}
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CustomizedButton
                disabled={formik.isSubmitting}
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

export default ContactComponent
