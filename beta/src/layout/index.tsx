'use client'

import React from 'react'

/* Components */
import CustomSnackbarContent from '@/components/custom-snackbar-content'

/* Contexts */
import { MenuProvider } from '@/contexts/menu-context'

/* Footer */
import Footer from './footer'
import type { FooterProps } from './footer'

/* Header */
import Header, { HEADER_TOOLBAR_HEIGHT } from './header'
import type { HeaderProps } from './header'

/* MUI */
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

/* Notistack */
import { SnackbarProvider } from 'notistack'

/* Theme */
import lightTheme from '@/theme/light'

export type LayoutProps = React.PropsWithChildren<HeaderProps & FooterProps>

const Layout: React.FC<LayoutProps> = ({
  children,
  footerMenuContent,
  navigationMenuContent,
}) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <MenuProvider offset={HEADER_TOOLBAR_HEIGHT}>
        <CssBaseline />
        <SnackbarProvider
          Components={{
            default: CustomSnackbarContent,
            error: CustomSnackbarContent,
            info: CustomSnackbarContent,
            success: CustomSnackbarContent,
            warning: CustomSnackbarContent,
          }}
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'top',
          }}
        >
          <Header navigationMenuContent={navigationMenuContent} />
          {children}
          <Footer footerMenuContent={footerMenuContent} />
        </SnackbarProvider>
      </MenuProvider>
    </ThemeProvider>
  )
}

export default Layout
