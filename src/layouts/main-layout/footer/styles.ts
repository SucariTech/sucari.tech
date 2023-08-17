import styled from 'styled-components'

/* Gatsby */
import { Link as GatsbyLink } from 'gatsby'

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const TextLine = styled.p`
  text-align: center;
  font-size: 20px;
  @media screen and (max-width: 1366px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    margin: 0 0 30px;
  }
  @media screen and (max-width: 460px) {
    font-size: 15px;
  }
`

export const FooterLink = styled(GatsbyLink)`
  text-decoration: underline;
`
