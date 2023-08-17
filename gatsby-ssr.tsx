/* Dependencies */
import type { GatsbySSR } from 'gatsby'

/* Config */
import config from '@config'

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHtmlAttributes,
}) => {
  setHtmlAttributes({
    lang: config.languageCode,
    translate: 'no',
  })
}
