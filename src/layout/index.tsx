import React from 'react'

/* Contexts */
import { MenuProvider } from '@contexts/menu-context'

/* Footer */
import Footer from './footer'
import type { FooterProps } from './footer'

/* Header */
import Header, { HEADER_TOOLBAR_HEIGHT } from './header'
import type { HeaderProps } from './header'

/* MUI */
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

/* Theme */
import lightTheme from '@theme/light'

export type LayoutProps = React.PropsWithChildren & HeaderProps & FooterProps

const Layout: React.FC<LayoutProps> = ({
  children,
  footerMenuContent,
  navigationMenuContent,
}) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={lightTheme}>
        <MenuProvider offset={HEADER_TOOLBAR_HEIGHT}>
          <CssBaseline />
          <Header navigationMenuContent={navigationMenuContent} />
          {children}
          <Footer footerMenuContent={footerMenuContent} />
        </MenuProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default Layout
