import React from 'react'

/* Config */
import config from '@config'

/* Hooks */
import { useContent } from '@contexts'

/* Setup */
const apiHost = config.apiHost

/* Context */
const APIContext = React.createContext({})

/* Hooks */
export interface APIContextType {
  sendContactEmail?: (data: any, callback: (data: any) => void) => void
  sendToSubscribe?: (data: any, callback: (data: any) => void) => void
}

export const useAPI = (): APIContextType =>
  React.useContext<APIContextType>(APIContext)

/* Setup */
const defaultHeaders = {
  'Accept-Language': config.language,
  'Content-Type': 'application/json',
}

export const APIProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const content = useContent()

  const prepareBody = React.useCallback(
    (data: any) =>
      JSON.stringify({
        ...data,
        language: config.language,
        hyperlink: config.url,
        logoSrc: config.logoSrc,
      }),
    [],
  )

  const fetchData = React.useCallback(
    (URI: string, PARAMS: object, fn: (data: any) => void) => {
      fetch(URI, PARAMS)
        .then(async response => await response.json())
        .then(result => {
          fn(result)
        })
        .catch(reason => {
          console.error(reason)
          fn({ errorMessage: content.api.errorMessage })
        })
    },
    [content.api],
  )

  const sendContactEmail = React.useCallback(
    (data: any, callback: (data: any) => void) => {
      const URI = `${apiHost}/contacts/get-in-touch`
      const PARAMS = {
        method: 'POST',
        headers: defaultHeaders,
        body: prepareBody(data),
      }
      fetchData(URI, PARAMS, callback)
    },
    [fetchData, prepareBody],
  )

  const sendToSubscribe = React.useCallback(
    (data: any, callback: (data: any) => void) => {
      const URI = `${apiHost}/contacts/subscribe`
      const PARAMS = {
        method: 'POST',
        headers: defaultHeaders,
        body: prepareBody(data),
      }
      fetchData(URI, PARAMS, callback)
    },
    [fetchData, prepareBody],
  )

  const value = React.useMemo(
    () => ({
      sendContactEmail,
      sendToSubscribe,
    }),
    [sendContactEmail, sendToSubscribe],
  )

  return <APIContext.Provider value={value}>{children}</APIContext.Provider>
}
