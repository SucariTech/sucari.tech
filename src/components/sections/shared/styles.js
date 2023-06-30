import { css } from 'styled-components'

export const titleBase = css`
  font-style: italic;
  font-weight: lighter;
  font-size: 30px;
  letter-spacing: 2px;
  @media screen and (max-width: 1550px){
    font-size: 25px;
  }
  @media screen and (max-width: 1366px){
    font-size: 20px;
  }
  @media screen and (max-width: 768px){
    font-size: 18px;
  }
`

export const sectionBase = css`
  width: 100%;
  max-width: 1920px;
  min-height: ${({ theme }) => `${theme.dimensions.innerHeight > 1080 ? 1080 : theme.dimensions.innerHeight}px`};
  margin: 0 auto;
  padding: 60px 80px;
  @media screen and (max-width: 1366px){
    padding: 60px;
  }
  @media screen and (max-width: 1024px){
    padding: 60px 40px;
  }
  @media screen and (max-width: 768px){
    :not(:last-child){
      border-bottom: 4px double var(--second-dark);
    }
  }
  @media screen and (max-width: 380px){
    padding: 40px 20px;
  }
`
