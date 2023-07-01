/* Dependencies */
import { GatsbySSR } from 'gatsby'

/* Config */
import config from '@config'

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    lang: config.language,
    translate: 'no'
  })
}
