'use client'

import React from 'react'

/* Config */
import config from '@/config'

/* MUI */
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang={config.languageCode}>
      <head>
        {/* See https://developers.google.com/tag-platform/gtagjs#add_the_google_tag_to_your_website for more about Google Tag. */}
        {!!config.googleAnalyticsId && (
          <React.Fragment>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${config.googleAnalyticsId}');`,
              }}
            />
          </React.Fragment>
        )}
      </head>
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
