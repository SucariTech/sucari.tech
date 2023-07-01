import React from 'react'
import PropTypes from 'prop-types'

/* Theme */
import { ThemeProvider } from 'styled-components'

const useDimensions = () => {
  const [dimensions, setDimensions] = React.useState({ innerWidth, innerHeight })

  const resize = React.useCallback(() => setDimensions({ innerWidth, innerHeight }), [])

  React.useLayoutEffect(() => {
    resize()
    addEventListener('resize', resize)
    return () => {
      removeEventListener('resize', resize)
    }
  }, [])

  return dimensions
}

export const DimensionsProvider = ({ children }) => {
  if (typeof window === 'undefined') return null
  const dimensions = useDimensions()
  return (
    <ThemeProvider theme={{ dimensions }}>
      { children }
    </ThemeProvider>
  )
}

DimensionsProvider.propTypes = {
  children: PropTypes.node
}
