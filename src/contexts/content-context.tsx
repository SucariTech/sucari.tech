import React from 'react'

const ContentContext = React.createContext({})

export const useContent = (): any => React.useContext<any>(ContentContext)

export interface ContentProviderProps extends React.PropsWithChildren {
  content: any
}

export const ContentProvider: React.FC<ContentProviderProps> = ({
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
