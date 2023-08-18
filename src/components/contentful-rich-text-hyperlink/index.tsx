import React from 'react'

/* Config */
import config from '@config'

/* Contentful */
import type { Block, Inline } from '@contentful/rich-text-types'

/* Gatsby */
import { Link as GatsbyLink } from 'gatsby'

/* Head */
import { getDomainName } from '@head'

/* MUI */
import Link from '@mui/material/Link'
import type { LinkProps } from '@mui/material/Link'

export interface ContentfulRichTextHyperlinkProps
  extends React.PropsWithChildren,
    LinkProps {
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
      component={GatsbyLink}
      to={new URL(node.data.uri).pathname}
      {...props}
    />
  ) : (
    <Link href={node.data.uri} {...props} />
  )
}

export default ContentfulRichTextHyperlink
