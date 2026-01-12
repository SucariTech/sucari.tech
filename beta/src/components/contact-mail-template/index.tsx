/* Config */
import config from '@/config'

/* React Email */
import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Tailwind,
  Text,
  pixelBasedPreset,
} from '@react-email/components'

/* Utils */
import { getDomainName } from '@/utils'

export interface ContactUserData {
  companyName: string
  emailAddress: string
  firstName: string
  lastName: string
  message: string
  phoneNumber: string
}

export interface ContactMailTemplateProps extends ContactUserData {
  siteLogoSource: string
}

export const ContactMailTemplate = ({
  companyName,
  emailAddress,
  firstName,
  lastName,
  message,
  phoneNumber,
  siteLogoSource,
}: ContactMailTemplateProps): React.JSX.Element => (
  <Html lang={config.languageCode}>
    <Head>
      <Font
        webFont={{
          url: 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiA.woff2',
          format: 'woff2',
        }}
        fallbackFontFamily="Helvetica"
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight={400}
      />
    </Head>
    <Tailwind
      config={{
        presets: [pixelBasedPreset],
      }}
    >
      <Body className="bg-[#F7F9FC] font-[Inter]">
        <Preview>{message}</Preview>
        <Container className="bg-white border border-solid border-[#E0E0E0] rounded m-6 mx-auto px-6">
          <Heading className="text-[#040d21]">
            {firstName} {lastName}
          </Heading>
          <Text className="text-[#040d21] text-sm">{message}</Text>
          <Text className="text-[#444444] text-sm">
            <Link
              href={`mailto:${emailAddress}`}
              target="_blank"
              className="text-[#1D65C1] underline"
            >
              {emailAddress}
            </Link>
            <br />
            {phoneNumber}
          </Text>
          <Text className="text-[#040d21] text-sm">— {companyName}</Text>
          <Img src={siteLogoSource} width={32} height={32} alt={config.name} />
          <Text className="text-[#444444] text-xs leading-6">
            <Link
              href={`https://${getDomainName(config.languageCode)}`}
              target="_blank"
              className="text-[#444444] underline"
            >
              {`https://${getDomainName(config.languageCode)}`}
            </Link>
            <br />© {new Date().getFullYear()} {config.name}
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default ContactMailTemplate
