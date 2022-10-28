/* Config */
import config from '@config';

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    lang: config.language,
    translate: 'no'
  });
}