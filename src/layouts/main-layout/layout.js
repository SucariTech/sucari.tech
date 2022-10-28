import React from 'react';

/* Contexts */
import { MenuProvider } from './contexts';
import { AlertProvider } from '@contexts';

/* Dimensions */
import { DimensionsProvider } from '@contexts';

/* Alerts */
import { SimpleAlert } from '@components/alerts';

/* Header */
import Header from './header';

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
  );
}

export default Layout;