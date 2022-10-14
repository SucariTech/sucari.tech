import React from 'react';

/* Gatsby */
import { graphql } from 'gatsby';

/* Config */
import config from '@config';

/* Providers */
import {
  ContentProvider,
  APIProvider
} from '@contexts';

/* Layout */
import Layout from '@layouts/main-layout';

/* Sections */
import {
  Home,
  About,
  Services,
  Cycle,
  GetInTouch,
  Subscribe
} from '@components/sections';

const HomePageTemplate = ({ data: { content } }) => {
  return (
    <ContentProvider content={ content }>
      <APIProvider>
        <Layout
          title={ content.metadata.title }
          description={ content.metadata.description }
          keywords={ content.metadata.keywords }
          canonicalUrl={ `${config.url}/` }
          ogImage={ `${config.url}${config.ogImageSrc}` }
        >
          <main>
            <Home/>
            <About/>
            <Services/>
            <Cycle/>
            <GetInTouch/>
            <Subscribe/>
          </main>
        </Layout>
      </APIProvider>
    </ContentProvider>
  );
}

export const query = graphql`
  query($id: String){
    content: json(id: { eq: $id }){
      metadata{
        title
        description
        keywords
      }
      contacts
      months
      api{
        errorMessage
      }
      footer{
        textLine{
          label
          to
        }
      }
      sections{
        home{
          name
          title{
            label
            decorate
          }
          skippable
          paragraph
          links{
            label
            to
          }
          image{
            childImageSharp{
              gatsbyImageData
            }
          }
        }
        about{
          name
          title
          skippable
          founder{
            fullNames
            rol
            message
          }
        }
        services{
          name
          title
          skippable
          services{
            name
            image{
              childImageSharp{
                gatsbyImageData
              }
            }
          }
        }
        cycle{
          name
          title
          skippable
          phases{
            name
            image{
              childImageSharp{
                gatsbyImageData
              }
            }
          }
          aside{
            label
            message
            link{
              label
              to
            }
          }
        }
        getInTouch{
          name
          title
          skippable
          form{
            fields{
              firstName{
                label
                placeholder
              }
              lastName{
                label
                placeholder
              }
              email{
                label
                placeholder
              }
              phone{
                label
                placeholder
              }
              company{
                label
                placeholder
              }
              message{
                label
                placeholder
              }
            }
            buttonText
          }
          notice{
            label
            to
          }
          information{
            title
            steps
          }
        }
        subscribe{
          name
          skippable
          description
          form{
            fields{
              email{
                label
                placeholder
              }
            }
            buttonText
          }
        }
      }
    }
  }
`;

export default HomePageTemplate;