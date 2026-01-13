import React from 'react'

/* Config */
import config from '@/config'

/* Components */
import RichTextComponent from '@/components/contentful-landing-page/rich-text'

/* Layout */
import SiteLayout from '@/layout'

/* Utils */
import contentfulClient from '@/utils/contentful/client'

const NotFound: React.FC = async () => {
  const result = await contentfulClient.ContentfulErrorPage({
    code: 404,
    languageCode: config.languageCode,
  })

  const data = result.errorPageCollection?.items[0]

  return (
    <SiteLayout
      footerMenuContent={data?.footerMenu}
      navigationMenuContent={data?.navigationMenu}
    >
      {data?.content && (
        <RichTextComponent
          __typename="RichTextComponent"
          body={data.content.body}
        />
      )}
    </SiteLayout>
  )
}

export default NotFound
