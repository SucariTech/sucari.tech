import React from 'react'
import PropTypes from 'prop-types'

/* Context */
const AlertContext = React.createContext()

/* Hooks */
export const useAlert = () => React.useContext(AlertContext)

export const AlertProvider = ({
  children,
  component: Alert
}) => {
  const [visible, setVisible] = React.useState(false)
  const [content, setContent] = React.useState(null)

  const openAlert = React.useCallback(content => {
    setContent(content)
    setVisible(true)
  }, [visible])

  const closeAlert = React.useCallback(() => {
    setContent(null)
    setVisible(false)
  }, [])

  React.useEffect(() => {
    const keydown = e => e.key === 'Escape' && closeAlert()
    addEventListener('keydown', keydown)
    return () => {
      setVisible(false)
      setContent(null)
      removeEventListener('keydown', keydown)
    }
  }, [])

  const value = React.useMemo(() => ({
    openAlert,
    closeAlert
  }), [openAlert, closeAlert])

  return (
    <AlertContext.Provider value={ value }>
      { children }
      <Alert
        visible={ visible }
        callback={ closeAlert }
      >
        { content }
      </Alert>
    </AlertContext.Provider>
  )
}

AlertProvider.propTypes = {
  children: PropTypes.node,
  component: PropTypes.elementType.isRequired
}
