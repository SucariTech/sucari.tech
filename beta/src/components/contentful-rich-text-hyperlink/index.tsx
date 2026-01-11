'use client'

import React from 'react'

/* Config */
import config from '@/config'

/* Contentful */
import type { Block, Inline } from '@contentful/rich-text-types'

/* MUI */
import Link from '@mui/material/Link'
import type { LinkProps } from '@mui/material/Link'

/* Next.js */
import NextLink from 'next/link'

/* Utils */
import { getDomainName } from '@/utils'

export interface ContentfulRichTextHyperlinkProps
  extends React.PropsWithChildren, LinkProps {
  node: Block | Inline
}

const ContentfulRichTextHyperlink: React.FC<
  ContentfulRichTextHyperlinkProps
> = ({ node, ...props }) => {
  const siteDomainName = getDomainName(config.languageCode)
  const urlRoot = `https://${siteDomainName}`
  const internalLink = !!node.data.uri.match(urlRoot)
  return internalLink ? (
    <Link
      component={NextLink}
      href={new URL(node.data.uri).pathname}
      {...props}
    />
  ) : (
    <Link href={node.data.uri} {...props} />
  )
}

export default ContentfulRichTextHyperlink
