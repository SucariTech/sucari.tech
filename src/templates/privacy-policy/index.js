import React from 'react';

/* Gatsby */
import { graphql } from 'gatsby';

/* Config */
import config from '@config';

/* Head */
import Head from '@head';

/* MDX */
import { MDXProvider } from '@mdx-js/react';

/* Styles */
import * as SC from './styles';

const PrivacyPolicyPageTemplate = ({
  data: {
    content
  },
  children
}) => {
  return (
    <>
      {/* Head */}
      <Head
        title={ content.frontmatter.title }
        description={ content.frontmatter.description }
        keywords={ content.frontmatter.keywords }
        canonicalUrl={ `${config.url}${content.fields.slug}` }
      />

      {/* Body */}
      <SC.Header>
        <SC.Label>{ config.name }</SC.Label>
        <SC.Link to="/">{ content.frontmatter.header.link.label }</SC.Link>
      </SC.Header>
      <MDXProvider components={{
        p: SC.P,
        h1: SC.H1,
        h2: SC.H2,
        h3: SC.H3,
        ul: SC.Ul,
        li: SC.Li
      }}>
        <SC.Container>
          { children }
        </SC.Container>
      </MDXProvider>
    </>
  );
}

export const query = graphql`
  query($id: String){
    content: mdx(id: { eq: $id }){
      fields{
        slug
      }
      frontmatter{
        title
        description
        keywords
        header{
          link{
            label
            to
          }
        }
      }
    }
  }
`;

export default PrivacyPolicyPageTemplate;