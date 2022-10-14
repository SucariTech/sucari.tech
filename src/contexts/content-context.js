import React from 'react';

const ContentContext = React.createContext();

export const useContent = () => React.useContext(ContentContext);

export const ContentProvider = ({
  content = {},
  children
}) => {
  
  const value = React.useMemo(() => content, [ content ]);

  return (
    <ContentContext.Provider
      value={ value }
      children={ children }
    />
  );
}