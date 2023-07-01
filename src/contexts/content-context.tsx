import React from 'react'
import PropTypes from 'prop-types'

const ContentContext = React.createContext()

export const useContent = () => React.useContext(ContentContext)

export const ContentProvider = ({
  content = {},
  children
}) => {
  const value = React.useMemo(() => content, [content])

  return (
    <ContentContext.Provider
      value={ value }
    >
      { children }
    </ContentContext.Provider>
  )
}

ContentProvider.propTypes = {
  content: PropTypes.object,
  children: PropTypes.node
}
