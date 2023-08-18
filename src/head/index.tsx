import React from 'react'

/* Config */
import config from '@config'

/* Gatsby */
import type { HeadProps } from 'gatsby'

/* Normalize URL */
import normalizeURL from 'normalize-url'

/* Theme */
import typography from '@theme/shared/typography'
import type { ThemeFont } from '@theme/shared/typography'

export interface SiteHeadProps
  extends React.PropsWithChildren,
    Pick<HeadProps, 'location'> {
  canonicalURL?: string
  description?: string | null
  openGraphImageSource?: string | null
  title?: string | null
  twitterUsername?: string | null
}

export const getDomainName = (languageCode: string): string =>
  `${languageCode === 'en' ? '' : languageCode + '.'}${config.domainName}`

const SiteHead: React.FC<SiteHeadProps> = props => {
  const siteDomainName = getDomainName(config.languageCode)
  const canonicalURL =
    normalizeURL(
      props.canonicalURL?.length
        ? props.canonicalURL
        : `https://${siteDomainName}${props.location.pathname}`,
    ) + '/'
  const shouldPreventIndexing =
    !config.languageCode ||
    (config.languageCode !== 'en' &&
      !config.deployedTranslations.find(
        ({ code }) => code === config.languageCode,
      ))
  const title = props.title?.length
    ? `${props.title} | ${config.name}`
    : config.name
  return (
    <React.Fragment>
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalURL} />
      <meta property="og:url" content={canonicalURL} />

      <link
        rel="alternate"
        href={canonicalURL.replace(siteDomainName, getDomainName('en'))}
        hrefLang="x-default"
      />

      {config.deployedTranslations.map((language, index) => (
        <link
          key={index}
          rel="alternate"
          hrefLang={language.code}
          href={canonicalURL.replace(
            siteDomainName,
            getDomainName(language.code),
          )}
        />
      ))}

      {/* Description */}
      {!!props.description && (
        <React.Fragment>
          <meta name="description" content={props.description} />
          <meta property="og:description" content={props.description} />
          <meta name="twitter:description" content={props.description} />
        </React.Fragment>
      )}

      {/* Open Graph Image */}
      {!!props.openGraphImageSource && (
        <React.Fragment>
          <meta property="og:image" content={props.openGraphImageSource} />
          <meta name="twitter:image" content={props.openGraphImageSource} />
        </React.Fragment>
      )}

      {/* Should Prevent Indexing */}
      {shouldPreventIndexing && <meta name="robots" content="noindex" />}

      {/* Title */}
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      {/* Twitter Username */}
      {!!props.twitterUsername && (
        <React.Fragment>
          <meta name="twitter:creator" content={props.twitterUsername} />
          <meta name="twitter:site" content={props.twitterUsername} />
        </React.Fragment>
      )}

      {/* Font Sources */}
      {Object.entries<ThemeFont>(typography)
        .map(([, value]) => value.sources)
        .flat()
        .map((source, index) => (
          <link
            key={index}
            href={source.location}
            rel="preload"
            as="font"
            crossOrigin=""
          />
        ))}

      <meta name="google" content="notranslate" />
      <meta property="og:site_name" content={config.name} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      {props.children}
    </React.Fragment>
  )
}

export default SiteHead
