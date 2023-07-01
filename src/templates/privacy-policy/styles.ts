import styled, { css } from 'styled-components'

/* Gatsby */
import { Link as GatsbyLink } from 'gatsby'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background: var(--main-dark);
  border-bottom: 4px double var(--second-dark);
  @media screen and (max-width: 520px){
    padding: 30px 20px;
  }
`

export const Label = styled.p`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
`

export const Link = styled(GatsbyLink)`
  text-decoration: underline;
  font-style: italic;
`

export const Container = styled.main`
  position: relative;
  width: 100%;
  max-width: 1366px;
  height: 100%;
  margin: 0 auto;
  padding: 20px 40px;
  scrollbar-width: none;
  ::-webkit-scrollbar{
    display: none;
  }
  a{
    text-decoration: underline;
    color: var(--third-light);
  }
  @media screen and (max-width: 520px){
    padding: 20px;
  }
`

const textBase = css`
  letter-spacing: 1px;
  color: var(--second-light);
`

const titleBase = css`
  ${textBase}
  margin: 20px 0;
  font-family: secondFont;
  line-height: 2rem;
`

const lineBase = css`
  ${textBase}
  margin: 10px 0;
  line-height: 1.8rem;
`

export const P = styled.p`
  ${lineBase}
`

export const H1 = styled.h1`
  ${titleBase}
`

export const H2 = styled.h2`
  ${titleBase}
`

export const H3 = styled.h3`
  ${titleBase}
`

export const Ul = styled.ul`
  list-style: disc;
  margin: 15px 0 15px 10px;
  padding: 0 0 0 30px;
`

export const Li = styled.li`
  ${lineBase}
`
