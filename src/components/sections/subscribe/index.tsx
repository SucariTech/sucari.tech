import React from 'react'

/* Hooks */
import {
  useContent,
  useAlert,
  useAPI
} from '@contexts'
import { useForm } from '@hooks'

/* Validations */
import { isEmailValid } from '@utils/validations'

/* Loader */
import { SimpleLoader as Loader } from '@components/loaders'

/* Layout Footer */
import { Footer } from '@layouts/main-layout'

/* Styles */
import * as SC from './styles'

const getInitialFieldValues = (): any => ({
  email: {
    value: '',
    valid: null,
    validator: (value: any) => isEmailValid(value)
  }
})

const Subscribe: React.FC = () => {
  const { sections: { subscribe } } = useContent()
  const [onChange, onSubmit, fields, resetFields] = useForm(getInitialFieldValues())
  const { openAlert } = useAlert()
  const { sendToSubscribe } = useAPI()
  const [submitting, setSubmitting] = React.useState(false)
  return (
    <SC.Section>
      <SC.ContentWrapper>
        <SC.Content>
          <SC.Description data-effect="fade-in">{ subscribe.description }</SC.Description>
          <SC.Form
            onSubmit={ onSubmit({
              onSuccess: React.useCallback((fieldValues: any) => {
                setSubmitting(true)
                sendToSubscribe?.(fieldValues, (data: any) => {
                  setSubmitting(false)
                  if (data.errorMessage) {
                    openAlert?.(data.errorMessage)
                  } else {
                    openAlert?.(data.successMessage)
                    resetFields(getInitialFieldValues())
                  }
                })
              }, [openAlert, sendToSubscribe, resetFields])
            }) }
          >
            <SC.Input
              data-effect="fade-in"
              name="email"
              onChange={ onChange }
              aria-label={ subscribe.form.fields.email.label }
              placeholder={ subscribe.form.fields.email.placeholder }
              value={ fields.email.value }
              $valid={ fields.email.valid }
            />
            <SC.Button
              data-effect="fade-in"
              type="submit"
              disabled={ submitting }
            >
              {
                submitting
                  ? <Loader/>
                  : subscribe.form.buttonText
              }
            </SC.Button>
          </SC.Form>
        </SC.Content>
      </SC.ContentWrapper>
      <Footer/>
    </SC.Section>
  )
}

export default Subscribe
