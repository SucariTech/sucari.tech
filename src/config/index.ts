const siteConfig = {
  deployedTranslations: [
    {
      code: 'en',
      name: 'English',
    },
    {
      code: 'es',
      name: 'Español',
    },
  ],
  domainName: process.env.NEXT_PUBLIC_DOMAIN_NAME ?? 'sucari.tech',
  googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  languageCode: process.env.NEXT_PUBLIC_LANGUAGE_CODE ?? 'en',
  name: process.env.NEXT_PUBLIC_APP_NAME ?? 'Sucari Tech',
}

export default siteConfig
