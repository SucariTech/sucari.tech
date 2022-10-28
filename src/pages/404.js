import React from 'react';

/* Gatsby */
import { Link } from 'gatsby';

/* Styled Components */
import styled, { css } from 'styled-components';

/* Config */
import config from '@config';

/* Styles */
const lineBase = css`
  margin: 10px 0;
  letter-spacing: 1px;
`;

const Container = styled.main`
  padding: 20px;
  margin: 5%;
  p, a{
    ${lineBase}
    font-size: 18px;
  }
  a{
    text-decoration: underline;
    font-style: italic;
    color: var(--third-light);
  }
`;

const Wrapper = styled.div`
  margin: 40px 0;
`;

const Title = styled.h1`
  ${lineBase}
  font-size: 30px;
`;

const Subtitle = styled.h2`
  ${lineBase}
  font-size: 22px;
  font-weight: lighter;
  font-style: italic;
`;

export const Head = () => {
  return (
    <>
      <title>Sucari Tech - Page Not Found</title>

      { /* Fonts */
        config.fonts.map((src, index) => (
          <link
            key={ index }
            href={ src }
            rel="preload"
            as="font"
            crossOrigin=""
          />
        ))
      }
    </>
  );
}

const PageNotFound = () => {
  return (
    <Container>
      <Title>Page Not Found</Title>
      <Subtitle>Sorry, we couldn't find what you were looking for</Subtitle>
      <Wrapper>
        <p><strong>Need help finding something?</strong></p>
        <p>Email info@sucari.tech and we’ll help you.</p>
      </Wrapper>
      <Link to="/">— Back to home</Link>
    </Container>
  );
}

export default PageNotFound;