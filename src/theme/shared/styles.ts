'use client'

/* MUI */
import { createTheme as createMUITheme } from '@mui/material/styles'
import type { PaletteOptions } from '@mui/material/styles'

/* MUI Locale */
import { enUS } from '@mui/material/locale'

/* Next.js */
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const createTheme = (
  palette: PaletteOptions,
): ReturnType<typeof createMUITheme> =>
  createMUITheme(
    {
      components: {
        MuiFilledInput: {
          styleOverrides: {
            root: ({ theme, ownerState }) => ({
              borderRadius: theme.shape.borderRadius,
              '&, &.Mui-focused, &:hover': {
                background: ownerState.error
                  ? theme.palette.error.light
                  : theme.palette.secondary.light,
              },
              '::after': {
                content: 'normal',
              },
              '::before': {
                content: 'normal',
              },
            }),
          },
        },
        MuiTypography: {
          styleOverrides: {
            h2: ({ theme }) => ({
              [theme.breakpoints.down('xl')]: {
                fontSize: theme.typography.h3.fontSize,
              },
              [theme.breakpoints.down('lg')]: {
                fontSize: theme.typography.h4.fontSize,
              },
            }),
            h4: ({ theme }) => ({
              [theme.breakpoints.down('lg')]: {
                fontSize: theme.typography.h5.fontSize,
              },
            }),
            h6: ({ theme }) => ({
              [theme.breakpoints.down('lg')]: {
                fontSize: theme.typography.subtitle1.fontSize,
              },
            }),
          },
        },
      },
      palette,
      shape: {
        borderRadius: 4,
      },
      typography: {
        fontFamily: inter.style.fontFamily,
      },
    },
    enUS,
  )
