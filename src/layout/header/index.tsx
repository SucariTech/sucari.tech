import React from 'react'

/* Components */
import Logo from '@components/logo'
import HamburgerButton from '@components/hamburger-button'

/* Config */
import config from '@config'

/* Gatsby */
import { Link as LinkGatsby, graphql } from 'gatsby'

/* Hooks */
import useMenu from '@hooks/use-menu'

/* MUI */
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

export const contentfulNavigationMenuItemContent = graphql`
  fragment ContentfulNavigationMenuItemContent on ContentfulNavigationMenuItem {
    name
    reference {
      __typename
      ... on ContentfulPage {
        slug
      }
    }
  }
`

export const contentfulNavigationMenuContent = graphql`
  fragment ContentfulNavigationMenuContent on ContentfulNavigationMenu {
    items {
      ...ContentfulNavigationMenuItemContent
    }
    rootItem {
      ...ContentfulNavigationMenuItemContent
    }
  }
`

export interface HeaderProps {
  navigationMenuContent?: Queries.ContentfulNavigationMenuContentFragment | null
}

export const HEADER_TOOLBAR_HEIGHT = 64

export const HeaderToolbar = styled(Toolbar)(() => ({
  '@media all': {
    height: HEADER_TOOLBAR_HEIGHT,
    minHeight: HEADER_TOOLBAR_HEIGHT,
  },
}))

export const getMenuItemTarget = (
  navigationMenuItem: Queries.ContentfulNavigationMenuItemContentFragment,
): string => {
  if (navigationMenuItem.reference?.__typename === 'ContentfulPage') {
    if (navigationMenuItem.reference.slug === 'home') {
      return '/'
    }
    return `/${navigationMenuItem.reference.slug}`
  }
  return '#'
}

interface NavigationMenuItemTextProps {
  navigationMenuItemContent: Queries.ContentfulNavigationMenuItemContentFragment
}

const NavigationMenuItemText: React.FC<NavigationMenuItemTextProps> = ({
  navigationMenuItemContent,
}) => {
  const { currentSectionId, scrollToSection } = useMenu()
  return (
    <ListItemText
      primary={navigationMenuItemContent.name}
      primaryTypographyProps={{
        component:
          navigationMenuItemContent.reference?.__typename === 'ContentfulPage'
            ? LinkGatsby
            : 'p',
        to:
          navigationMenuItemContent.reference?.__typename === 'ContentfulPage'
            ? getMenuItemTarget(navigationMenuItemContent)
            : undefined,
        color:
          currentSectionId === navigationMenuItemContent.reference?.__typename
            ? 'secondary'
            : 'inherit',
        fontWeight: 600,
        onClick: () => {
          scrollToSection(navigationMenuItemContent.reference?.__typename)
        },
        sx: theme => ({
          cursor: 'pointer',
          textDecoration: 'none',
          ':hover': {
            color: theme.palette.secondary.main,
          },
        }),
        textAlign: 'center',
        variant: 'subtitle1',
      }}
    />
  )
}

const Header: React.FC<HeaderProps> = ({ navigationMenuContent }) => {
  const { isMenuOpen, closeMenu, openMenu, scrollToSection } = useMenu()
  return (
    <React.Fragment>
      <AppBar
        component="header"
        color="inherit"
        elevation={0}
        sx={theme => ({
          borderLeft: 'none',
          borderRight: 'none',
          borderTop: 'none',
          top: 0,
          zIndex: theme.zIndex.drawer + 1,
        })}
        variant="outlined"
      >
        <HeaderToolbar
          sx={{
            '@media all': {
              height: HEADER_TOOLBAR_HEIGHT - 1,
              minHeight: HEADER_TOOLBAR_HEIGHT - 1,
            },
          }}
        >
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            maxWidth="lg"
            mx="auto"
            spacing={2}
            width="100%"
          >
            <Box
              component={
                navigationMenuContent?.rootItem?.reference?.__typename ===
                'ContentfulPage'
                  ? LinkGatsby
                  : 'div'
              }
              to={
                navigationMenuContent?.rootItem?.reference?.__typename ===
                'ContentfulPage'
                  ? getMenuItemTarget(navigationMenuContent.rootItem)
                  : undefined
              }
              sx={{
                color: 'currentColor',
                textDecoration: 'none',
              }}
            >
              <Stack
                alignItems="center"
                direction="row"
                onClick={() => {
                  scrollToSection(
                    navigationMenuContent?.rootItem?.reference?.__typename,
                  )
                }}
                spacing={1.6}
                sx={{ cursor: 'pointer' }}
              >
                <Logo fontSize="large" sx={{ p: 0.3 }} />
                <Typography
                  component="span"
                  fontWeight={600}
                  variant="subtitle1"
                >
                  {config.name}
                </Typography>
              </Stack>
            </Box>
            <Box
              component="nav"
              display={{
                sm: 'block',
                xs: 'none',
              }}
            >
              <Stack
                component={List}
                direction="row"
                disablePadding
                spacing={4}
              >
                {navigationMenuContent?.items?.map(
                  (navigationMenuItem, index) =>
                    navigationMenuItem && (
                      <ListItem
                        key={index}
                        disablePadding
                        dense
                        sx={{ width: 'auto' }}
                      >
                        <NavigationMenuItemText
                          navigationMenuItemContent={navigationMenuItem}
                        />
                      </ListItem>
                    ),
                )}
              </Stack>
            </Box>
            <IconButton
              color="inherit"
              sx={{
                display: {
                  sm: 'none',
                  xs: 'flex',
                },
              }}
              onClick={isMenuOpen ? closeMenu : openMenu}
            >
              <HamburgerButton open={isMenuOpen} />
            </IconButton>
          </Stack>
        </HeaderToolbar>
      </AppBar>
      <Drawer
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            width: '100%',
          },
          variant: 'outlined',
        }}
        anchor="top"
        variant="temporary"
        open={isMenuOpen}
        onClose={closeMenu}
        sx={{
          display: {
            sm: 'none',
            xs: 'block',
          },
        }}
      >
        <HeaderToolbar />
        <Box component="nav">
          <List>
            {navigationMenuContent?.items?.map(
              (navigationMenuItem, index) =>
                navigationMenuItem && (
                  <ListItem key={index} dense>
                    <NavigationMenuItemText
                      navigationMenuItemContent={navigationMenuItem}
                    />
                  </ListItem>
                ),
            )}
          </List>
        </Box>
      </Drawer>
      <HeaderToolbar />
    </React.Fragment>
  )
}

export default Header
