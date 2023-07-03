import styled, { css } from 'styled-components'

/* Gatsby Plugin Image */
import { GatsbyImage } from 'gatsby-plugin-image'

/* Shared */
import {
  titleBase,
  sectionBase
} from '@components/sections/shared/styles'

const getDistributedDistance = (partIndex: number, numberOfParts: number): string => {
  const percentage = 100 / numberOfParts
  const value = `${Math.floor(percentage * (partIndex + 1) - percentage * 0.5)}%`
  return value
}

export const Section = styled.section`
  ${sectionBase}
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 4px double var(--second-dark);
`

export const Title = styled.h4`
  ${titleBase}
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 680px){
    flex-direction: column;
  }
`

const container = css`
  flex: 1;
  @media screen and (max-width: 1024px){
    padding: 0 20px;
  }
  @media screen and (max-width: 680px){
    padding: 0;
  }
`

export const Left = styled.div`
  ${container}
  display: flex;
`

export const Right = styled.aside`
  ${container}
  @media screen and (max-width: 1024px){
    flex: 2;
  }
  @media screen and (max-width: 680px){
    align-self: flex-end;
  }
`

export const PhaseList = styled.ul`
  counter-reset: code 0;
`

export interface PhaseProps {
  $partIndex: number
  $numberOfParts: number
}

export const Phase = styled.li<PhaseProps>`
  display: flex;
  align-items: center;
  margin: 30px 0;
  transform: translate3d(${({ $partIndex, $numberOfParts }) => getDistributedDistance($partIndex, $numberOfParts)}, 0, 0);
  @media screen and (max-width: 1024px){
    transform: translate3d(0, 0, 0);
  }
`

export const PhaseImage = styled(GatsbyImage)`
  width: 50px;
  height: 50px;
  @media screen and (max-width: 1550px){
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 1366px){
    width: 30px;
    height: 30px;
  }
`

export const PhaseName = styled.div`
  position: relative;
  font-weight: bold;
  font-size: 24px;
  ::before{
    position: relative;
    counter-increment: code;
    content: counter(code) '.';
    margin: 0 25px;
    color: var(--third-light);
  }
  @media screen and (max-width: 1550px){
    font-weight: lighter;
    font-size: 20px;
    ::before{
      margin: 0 20px;
    }
  }
  @media screen and (max-width: 1366px){
    font-weight: lighter;
    font-size: 18px;
    ::before{
      margin: 0 15px;
    }
  }
`

export const RightList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0;
  border-bottom: 4px solid var(--fourth-dark);
  @media screen and (max-width: 1366px){
    padding: 20px 0;
  }
  @media screen and (max-width: 1024px){
    padding: 0;
    border-bottom: none;
  }
`

export const RightItem = styled.li`
  margin: 20px 0;
  font-family: secondFont;
  font-size: 30px;
  :nth-child(2n + 1){
    font-size: 40px;
  }
  :last-child{
    position: relative;
    align-self: flex-end;
    font-size: 40px;
    letter-spacing: 2px;
    cursor: pointer;
    ::after{
      content: '';
      position: absolute;
      top: 110%;
      right: 0;
      height: 4px;
      width: 100%;
      background: var(--main-light);
      transition: all 0.2s ease-in-out;
    }
    :hover::after{
      width: 80%;
    }
  }
  @media screen and (max-width: 1550px){
    font-size: 25px;
    font-family: mainFont;
    :nth-child(2n + 1){
      font-family: mainFont;
      font-size: 34px;
    }
    :last-child{
      font-family: secondFont;
      font-size: 34px;
      ::after{
        height: 3px;
      }
    }
  }
  @media screen and (max-width: 1366px){
    margin: 15px 0;
    font-size: 20px;
    :nth-child(2n + 1){
      font-size: 26px;
    }
    :last-child{
      font-size: 26px;
    }
  }
  @media screen and (max-width: 768px){
    margin: 10px 0;
    text-align: right;
    &, :nth-child(2n + 1){
      font-size: 18px;
    }
    :last-child{
      font-size: 22px;
    }
  }
`
