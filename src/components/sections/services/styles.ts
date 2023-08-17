import styled from 'styled-components'

/* Gatsby Plugin Image */
import { GatsbyImage } from 'gatsby-plugin-image'

/* Shared */
import { titleBase, sectionBase } from '@components/sections/shared/styles'

export const Section = styled.section`
  ${sectionBase}
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const Title = styled.h3`
  ${titleBase}
`

export const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 15px 0;
  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;
    flex-direction: column;
    margin: 10px 0;
  }
`

export const Card = styled.li`
  width: 27%;
  padding: 40px 0;
  margin: 20px;
  background: var(--second-dark);
  border: 2px solid var(--third-dark);
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  :hover {
    box-shadow: 0px 4px 20px var(--third-dark);
    background: var(--main-dark);
    transform: scale(1.025);
  }
  @media screen and (max-width: 1550px) {
    margin: 16px;
  }
  @media screen and (max-width: 1366px) {
    padding: 30px 0;
  }
  @media screen and (max-width: 1024px) {
    width: 45%;
    padding: 20px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 420px;
    padding: 10px 25px;
    margin: 10px auto;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 10px;
    :hover {
      transform: scale(1);
    }
  }
`

export const CardImage = styled(GatsbyImage)`
  display: block;
  width: 90px;
  height: 90px;
  margin: 0 auto 30px;
  @media screen and (max-width: 1550px) {
    width: 80px;
    height: 80px;
  }
  @media screen and (max-width: 1366px) {
    width: 60px;
    height: 60px;
  }
  @media screen and (max-width: 1024px) {
    width: 40px;
    height: 40px;
    margin: 0 auto 20px;
  }
  @media screen and (max-width: 768px) {
    margin: 0 25px 0 0;
  }
  @media screen and (max-width: 480px) {
    margin: 0 10px 0 0;
  }
`

export const CardName = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  @media screen and (max-width: 1550px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    letter-spacing: 2px;
  }
  @media screen and (max-width: 480px) {
    letter-spacing: 0;
  }
`
