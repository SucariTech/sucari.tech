/* Font Sources */
import InterLight from '@assets/fonts/inter/inter-light.ttf'
import InterRegular from '@assets/fonts/inter/inter-regular.ttf'
import InterMedium from '@assets/fonts/inter/inter-medium.ttf'
import InterBold from '@assets/fonts/inter/inter-bold.ttf'

export interface ThemeFontSource {
  location: string
  weight: number
}

export interface ThemeFont {
  fontFamily: string
  sources: Array<ThemeFontSource>
  unicodeRanges: Array<string>
}

export type ThemeTypography = Record<'primary', ThemeFont>

export const fontFaceDeclarations = (themeFont: ThemeFont): string => {
  const declarations: Array<string> = []

  themeFont.unicodeRanges.forEach(unicodeRange => {
    themeFont.sources.forEach(source => {
      const declaration: Array<string> = [
        '@font-face {',
        `\tfont-family: ${themeFont.fontFamily};`,
        '\tfont-style: normal;',
        `\tfont-weight: ${source.weight};`,
        '\tfont-display: swap;',
        `\tsrc: url(${source.location});`,
        `\tunicode-range: ${unicodeRange};`,
        '}',
      ]
      declarations.push(declaration.join('\n'))
    })
  })

  return declarations.join('\n')
}

const themeTypography: ThemeTypography = {
  primary: {
    fontFamily: 'Inter',
    sources: [
      {
        location: InterLight,
        weight: 300,
      },
      {
        location: InterRegular,
        weight: 400,
      },
      {
        location: InterMedium,
        weight: 500,
      },
      {
        location: InterBold,
        weight: 700,
      },
    ],
    unicodeRanges: [
      'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      'U+1F00-1FFF',
      'U+0370-03FF',
      'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
      'U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    ],
  },
}

export default themeTypography
