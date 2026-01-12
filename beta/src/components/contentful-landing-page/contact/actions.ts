'use server'

/* Components */
import ContactMailTemplate from '@/components/contact-mail-template'
import type { ContactMailTemplateProps } from '@/components/contact-mail-template'

/* Config */
import config from '@/config'

/* Resend */
import { Resend } from 'resend'
import type { CreateEmailResponse } from 'resend'

export const submitContactFormData = async ({
  ...data
}: ContactMailTemplateProps): Promise<CreateEmailResponse | null> => {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const response = await resend.emails.send({
      from: String(process.env.SENDER_EMAIL_ADDRESS),
      to: [String(process.env.RECIPIENT_EMAIL_ADDRESS)],
      subject: `${config.languageCode}: [${config.name}] ${data.firstName} ${data.lastName} (${data.emailAddress})`,
      react: ContactMailTemplate(data),
    })

    return response
  } catch (error) {
    console.error(error)
    return null
  }
}
