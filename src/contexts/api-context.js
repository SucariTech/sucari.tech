import React from 'react';

/* Config */
import config from '@config';

/* Hooks */
import { useContent } from '@contexts';

/* Setup */
const apiHost = config.apiHost;

/* Context */
const APIContext = React.createContext();

/* Hooks */
export const useAPI = () => React.useContext(APIContext);

/* Setup */
const defaultHeaders = {
  'Accept-Language': config.language,
  'Content-Type': 'application/json'
};

export const APIProvider = ({ children }) => {
  const { api: apiContent } = useContent();

  const prepareBody = React.useCallback(data => JSON.stringify({
    ...data,
    language: config.language,
    hyperlink: config.url,
    logoSrc: config.logoSrc
  }), []);

  const fetchData = React.useCallback((URI, PARAMS, callback) => {
    fetch(URI, PARAMS)
      .then(response => response.json())
      .then(result => callback(result))
      .catch(reason => {
        console.error(reason);
        callback({ errorMessage: apiContent.errorMessage });
      });
  }, [ apiContent ]);

  const sendContactEmail = React.useCallback((data, callback) => {
    const URI = `${apiHost}/contacts/get-in-touch`;
    const PARAMS = {
      method: 'POST',
      headers: defaultHeaders,
      body: prepareBody(data)
    };
    return fetchData(URI, PARAMS, callback);
  }, []);

  const sendToSubscribe = React.useCallback((data, callback) => {
    const URI = `${apiHost}/contacts/subscribe`;
    const PARAMS = {
      method: 'POST',
      headers: defaultHeaders,
      body: prepareBody(data)
    };
    return fetchData(URI, PARAMS, callback);
  }, []);
  
  const value = React.useMemo(() => ({
    sendContactEmail,
    sendToSubscribe
  }), [ prepareBody, fetchData ]);

  return (
    <APIContext.Provider value={ value }>
      { children }
    </APIContext.Provider>
  );
}