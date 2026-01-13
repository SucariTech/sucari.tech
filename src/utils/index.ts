/* Config */
import config from '@/config'

export const getDomainName = (languageCode: string): string =>
  `${languageCode === 'en' ? '' : languageCode + '.'}${config.domainName}`
