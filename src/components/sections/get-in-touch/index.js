import React from 'react';

/* Hooks */
import {
  useContent,
  useAlert,
  useAPI
} from '@contexts';
import { useForm } from '@hooks';

/* Validations */
import {
  isStringValid,
  isEmailValid
} from '@utils/validations';

/* Loaders */
import { SimpleLoader as Loader } from '@components/loaders';

/* Styles */
import * as SC from './styles';

const getInitialFieldValues = () => ({
  firstName: {
    value: '',
    valid: null,
    validator: value => isStringValid(value, 100, 1)
  },
  lastName: {
    value: '',
    valid: null,
    validator: value => isStringValid(value, 100, 1)
  },
  email: {
    value: '',
    valid: null,
    validator: value => isEmailValid(value)
  },
  phone: {
    value: '',
    valid: null,
    validator: value => isStringValid(value, 50, 1)
  },
  company: {
    value: '',
    valid: null,
    validator: value => isStringValid(value, 50, 1)
  },
  message: {
    value: '',
    valid: null,
    validator: value => isStringValid(value, 3000, 1)
  }
});

const GetInTouch = () => {
  const {
    contacts,
    sections: { getInTouch }
  } = useContent();
  const [ onChange, onSubmit, fields, resetFields ] = useForm(getInitialFieldValues());
  const { openAlert } = useAlert();
  const { sendContactEmail } = useAPI();
  const [ submitting, setSubmitting ] = React.useState(false);
  return (
    <SC.Section data-section-name="getInTouch">
      <SC.Title data-effect="fade-in">
        { getInTouch.title }
      </SC.Title>
      <SC.Content>
        <SC.Left data-effect="fade-in">
          <SC.Form
            onSubmit={ onSubmit({
              onSuccess: React.useCallback(fieldValues => {
                setSubmitting(true);
                sendContactEmail(fieldValues, data => {
                  setSubmitting(false);
                  if(data.errorMessage){
                    openAlert(data.errorMessage);
                  }else{
                    openAlert(data.successMessage);
                    resetFields(getInitialFieldValues());
                  }
                });
              }, [ submitting ])
            }) }
          >
            <SC.Input
              data-effect="fade-in"
              name="firstName"
              onChange={ onChange }
              aria-label={ getInTouch.form.fields.firstName.label }
              placeholder={ getInTouch.form.fields.firstName.placeholder }
              value={ fields.firstName.value }
              valid={ fields.firstName.valid }
            />
            <SC.Input
              data-effect="fade-in"
              name="lastName"
              onChange={ onChange }
              aria-label={ getInTouch.form.fields.lastName.label }
              placeholder={ getInTouch.form.fields.lastName.placeholder }
              value={ fields.lastName.value }
              valid={ fields.lastName.valid }
            />
            <SC.Input
              data-effect="fade-in"
              name="email"
              onChange={ onChange }
              aria-label={ getInTouch.form.fields.email.label }
              placeholder={ getInTouch.form.fields.email.placeholder }
              value={ fields.email.value }
              valid={ fields.email.valid }
            />
            <SC.Input
              data-effect="fade-in"
              name="phone"
              onChange={ onChange }
              aria-label={ getInTouch.form.fields.phone.label }
              placeholder={ getInTouch.form.fields.phone.placeholder }
              value={ fields.phone.value }
              valid={ fields.phone.valid }
            />
            <SC.Input
              data-effect="fade-in"
              name="company"
              onChange={ onChange }
              aria-label={ getInTouch.form.fields.company.label }
              placeholder={ getInTouch.form.fields.company.placeholder }
              value={ fields.company.value }
              valid={ fields.company.valid }
            />
            <SC.Textarea
              data-effect="fade-in"
              name="message"
              onChange={ onChange }
              aria-label={ getInTouch.form.fields.message.label }
              placeholder={ getInTouch.form.fields.message.placeholder }
              value={ fields.message.value }
              valid={ fields.message.valid }
            />
            <SC.Notice data-effect="fade-in">
              {
                getInTouch.notice.map((part, index) => part.to ? (
                  <SC.NoticeLink
                    key={ index }
                    to={ part.to }
                  >
                    { part.label }
                  </SC.NoticeLink>
                ) : part.label)
              }
            </SC.Notice>
            <SC.Button
              data-effect="fade-in"
              type="submit"
              disabled={ submitting }
            >
              {
                submitting
                  ? <Loader/>
                  : getInTouch.form.buttonText
              }
            </SC.Button>
          </SC.Form>
        </SC.Left>
        <SC.Right>
          <SC.Information>
            <SC.InformationTitle data-effect="fade-in">{ getInTouch.information.title }</SC.InformationTitle>
            <SC.StepContainer>
              {
                getInTouch.information.steps.map((step, index) => (
                  <li
                    key={ index }
                    data-effect="fade-in"
                  >
                    { step }
                  </li>
                ))
              }
            </SC.StepContainer>
            <SC.InformationContacts>
              {
                contacts.map((contact, index) => (
                  <li
                    key={ index }
                    data-effect="fade-in"
                  >
                    { contact }
                  </li>
                ))
              }
            </SC.InformationContacts>
          </SC.Information>
        </SC.Right>
      </SC.Content>
    </SC.Section>
  );
}

export default GetInTouch;