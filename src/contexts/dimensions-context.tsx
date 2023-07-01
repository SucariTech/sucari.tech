import React from 'react'

/* Theme */
import { ThemeProvider } from 'styled-components'

interface UseDimensionsReturnType {
  innerWidth: number
  innerHeight: number
}

const useDimensions = (): UseDimensionsReturnType => {
  const [dimensions, setDimensions] = React.useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  })

  const resize = React.useCallback(() => {
    setDimensions({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    })
  }, [])

  React.useLayoutEffect(() => {
    resize()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return dimensions
}

export const DimensionsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  if (typeof window === 'undefined') return null

  /* eslint-disable-next-line react-hooks/rules-of-hooks */
  const dimensions = useDimensions()

  return (
    <ThemeProvider theme={{ dimensions }}>
      { children }
    </ThemeProvider>
  )
}
