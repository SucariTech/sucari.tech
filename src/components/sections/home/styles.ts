import styled, { css } from 'styled-components'

/* Gatsby Plugin Image */
import { GatsbyImage } from 'gatsby-plugin-image'

/* Shared */
import { sectionBase } from '@components/sections/shared/styles'

export const Section = styled.section`
  ${sectionBase}
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    align-items: stretch;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 80px 0;
  border-top: 4px double var(--fourth-dark);
  border-bottom: 4px double var(--fourth-dark);
  @media screen and (max-width: 1550px) {
    padding: 40px 0;
    border: none;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    flex: 1;
    padding: 0;
    border: none;
  }
`

const container = css`
  width: 100%;
  max-width: 768px;
  @media screen and (max-width: 768px) {
    max-width: 420px;
    padding: 20px 0;
  }
  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`

export const Left = styled.div`
  ${container}
  display: flex;
  justify-content: center;
`

export const Right = styled.div`
  ${container}
`

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 40px;
  line-height: 62px;
  letter-spacing: 8px;
  @media screen and (max-width: 1550px) {
    line-height: 52px;
    font-size: 34px;
  }
  @media screen and (max-width: 1366px) {
    line-height: 45px;
    font-size: 28px;
    letter-spacing: 3.5px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 24px;
    letter-spacing: 2px;
  }
  @media screen and (max-width: 768px) {
    line-height: 40px;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 22px;
    letter-spacing: px;
  }
  @media screen and (max-width: 380px) {
    font-size: 18px;
  }
`

export interface WordProps {
  $decorate: boolean
}

export const Word = styled.span<WordProps>`
  ${({ $decorate = false }) => ($decorate ? 'color: var(--third-light);' : '')}
`

export const Paragraph = styled.p`
  margin: 60px 0;
  text-align: center;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 1px;
  @media screen and (max-width: 1550px) {
    margin: 40px 0;
    font-size: 20px;
  }
  @media screen and (max-width: 1366px) {
    letter-spacing: 0.5px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 18px;
    letter-spacing: 0;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (max-width: 380px) {
    font-size: 16px;
  }
`

export const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  li {
    margin: 0 7%;
    color: var(--third-light);
    text-transform: uppercase;
    text-decoration: underline;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    @media screen and (max-width: 1550px) {
      font-size: 20px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 18px;
    }
    @media screen and (max-width: 380px) {
      font-size: 16px;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    li {
      margin: 0 auto;
    }
  }
`

export const Image = styled(GatsbyImage)`
  width: 100%;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
