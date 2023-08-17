import React from 'react'

/* Context */
const AlertContext = React.createContext({})

/* Hooks */
export interface AlertContextType {
  openAlert?: (content: any) => void
  closeAlert?: () => void
}

export const useAlert = (): AlertContextType =>
  React.useContext<AlertContextType>(AlertContext)

export interface AlertProviderProps extends React.PropsWithChildren {
  component: React.ElementType
}

export const AlertProvider: React.FC<AlertProviderProps> = ({
  children,
  component: Alert,
}) => {
  const [visible, setVisible] = React.useState(false)
  const [content, setContent] = React.useState(null)

  const openAlert = React.useCallback((content: any) => {
    setContent(content)
    setVisible(true)
  }, [])

  const closeAlert = React.useCallback(() => {
    setContent(null)
    setVisible(false)
  }, [])

  React.useEffect(() => {
    const keydown = (e: KeyboardEvent): void => {
      e.key === 'Escape' && closeAlert()
    }
    window.addEventListener('keydown', keydown)
    return () => {
      setVisible(false)
      setContent(null)
      window.removeEventListener('keydown', keydown)
    }
  }, [closeAlert])

  const value = React.useMemo(
    () => ({
      openAlert,
      closeAlert,
    }),
    [openAlert, closeAlert],
  )

  return (
    <AlertContext.Provider value={value}>
      {children}
      <Alert visible={visible} callback={closeAlert}>
        {content}
      </Alert>
    </AlertContext.Provider>
  )
}
