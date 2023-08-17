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
  domainName: process.env.GATSBY_DOMAIN_NAME ?? 'sucari.tech',
  name: process.env.GATSBY_APP_NAME,
  apiHost: process.env.GATSBY_API_HOST,
  languageCode: process.env.GATSBY_LANGUAGE_CODE ?? 'en',
}

export default siteConfig
