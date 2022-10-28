import React from 'react';

/* Config */
import config from '@config';

const Head = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  children
}) => {
  return (
    <>
      <title>{ title }</title>
      <meta name="description" content={ description }/>
      <meta name="google" content="notranslate"/>

      {/* Canonical URL */}
      { canonicalUrl && <link rel="canonical" href={ canonicalUrl }/> }
      { canonicalUrl && <meta property="og:url" content={ canonicalUrl }/> }
            
      { /* Keywords */
        keywords.length && (
          <meta
            name="keywords"
            content={ keywords.join(', ') }
          />
        )
      }

      {/* Open Graph */}
      <meta name="og:description"  content={ description }/>
      <meta property="og:site_name" content={ config.name }/>
      <meta property="og:title" content={ title }/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content={ config.ogImageSrc }/>
      
      { /* Fonts */
        config.fonts.map((src, index) => (
          <link
            key={ index }
            href={ src }
            rel="preload"
            as="font"
            crossOrigin=""
          />
        ))
      }
      { children }
    </>
  );
}

export default Head;