import React from 'react';

/* Contexts */
import { MenuProvider } from './contexts';
import { AlertProvider } from '@contexts';

/* Dimensions */
import { DimensionsProvider } from '@contexts';

/* Alerts */
import { SimpleAlert } from '@components/alerts';

/* Head */
import Head from '@head';

/* Header */
import Header from './header';

const Layout = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  children
}) => {
  return (
    <>
      {/* Helmet */}
      <Head
        title={ title }
        description={ description }
        keywords={ keywords }
        canonicalUrl={ canonicalUrl }
      />

      {/* Body */}
      <DimensionsProvider>
        <MenuProvider>
          <AlertProvider component={ SimpleAlert }>
            <Header/>
            { children }
          </AlertProvider>
        </MenuProvider>
      </DimensionsProvider>
    </>
  );
}

export default Layout;