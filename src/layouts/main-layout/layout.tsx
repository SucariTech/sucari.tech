import React from 'react'
import PropTypes from 'prop-types'

/* Contexts */
import { MenuProvider } from './contexts'
import {
  AlertProvider,
  DimensionsProvider
} from '@contexts'

/* Alerts */
import { SimpleAlert } from '@components/alerts'

/* Header */
import Header from './header'

const Layout = ({ children }) => {
  return (
    <DimensionsProvider>
      <MenuProvider>
        <AlertProvider component={ SimpleAlert }>
          <Header/>
          { children }
        </AlertProvider>
      </MenuProvider>
    </DimensionsProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
