/* Icons */
import FacebookIcon from '@icons/facebook.svg';
import GitHubIcon from '@icons/github.svg';
import LinkedInIcon from '@icons/linkedin.svg';
import TwitterIcon from '@icons/twitter.svg';

/* Fonts */
import MontserratSemiBold from '@fonts/montserrat/montserrat-semi-bold.ttf';
import MontserratRegular from '@fonts/montserrat/montserrat-regular.ttf';

export default {
  domain: process.env.GATSBY_DOMAIN,
  name: process.env.GATSBY_APP_NAME,
  language: process.env.GATSBY_LANGUAGE,
  url: process.env.GATSBY_URL_ROOT,
  logoSrc: `${process.env.GATSBY_URL_ROOT}/images/logo.png`,
  ogImageSrc: `${process.env.GATSBY_URL_ROOT}/images/og-image.png`,
  year: new Date().getFullYear(),
  apiHost: process.env.GATSBY_API_HOST,
  fonts: [
    MontserratSemiBold,
    MontserratRegular
  ],
  networks: [
    {
      label: 'Facebook link',
      alt: 'Facebook',
      to: 'https://www.facebook.com/SucariTech',
      icon: FacebookIcon
    },
    {
      label: 'GitHub link',
      alt: 'GitHub',
      to: 'https://github.com/SucariTech',
      icon: GitHubIcon
    },
    {
      label: 'LinkedIn link',
      alt: 'LinkedIn',
      to: 'https://www.linkedin.com/company/sucari-tech',
      icon: LinkedInIcon
    },
    {
      label: 'Twitter link',
      alt: 'Twitter',
      to: 'https://twitter.com/SucariTech',
      icon: TwitterIcon
    }
  ]
};