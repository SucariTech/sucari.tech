import styled from 'styled-components'

/* Shared */
import { sectionBase } from '@components/sections/shared/styles'

export const Section = styled.section`
  ${sectionBase}
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const Title = styled.h2`
  margin: 15px 0;
  text-transform: uppercase;
  font-size: 84px;
  font-weight: bold;
  font-family: secondFont;
  letter-spacing: 8px;
  @media screen and (max-width: 1620px) {
    font-size: 70px;
  }
  @media screen and (max-width: 1366px) {
    font-size: 60px;
    letter-spacing: 5px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 50px;
  }
  @media screen and (max-width: 920px) {
    font-size: 40px;
  }
  @media screen and (max-width: 580px) {
    font-size: 32px;
  }
  @media screen and (max-width: 380px) {
    font-size: 26px;
  }
`

export const Founder = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: max-content;
  margin: 15px 0 15px auto;
  font-size: 35px;
  font-family: secondFont;
  letter-spacing: 4px;
  span:last-child {
    color: var(--third-light);
  }
  @media screen and (max-width: 1550px) {
    font-size: 30px;
  }
  @media screen and (max-width: 1366px) {
    font-size: 24px;
    letter-spacing: 2px;
  }
`

export const Line = styled.hr`
  margin: 15px 0;
  height: 0;
  border-top: none;
  border-right: none;
  border-bottom: 4px double var(--fourth-dark);
  border-left: none;
`

export const Paragraph = styled.p`
  margin: 15px 0;
  text-align: right;
  font-size: 26px;
  line-height: 40px;
  letter-spacing: 4px;
  ::before,
  ::after {
    content: '"';
  }
  @media screen and (max-width: 1550px) {
    line-height: 35px;
    font-size: 22px;
  }
  @media screen and (max-width: 1366px) {
    line-height: 30px;
    font-size: 20px;
    letter-spacing: 1.5px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 18px;
    letter-spacing: 0;
  }
`
