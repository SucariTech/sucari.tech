import styled, { css } from 'styled-components'

/* Gatsby */
import { Link as GatsbyLink } from 'gatsby'

/* Shared */
import {
  titleBase,
  sectionBase
} from '@components/sections/shared/styles'

export const Section = styled.section`
  ${sectionBase}
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const Title = styled.h5`
  ${titleBase}
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1366px;
  width: 100%;
  margin: 24px auto;
  @media screen and (max-width: 1550px){
    max-width: 1100px;
  }
  @media screen and (max-width: 980px){
    flex-direction: column;
    margin: 0;
  }
`

const container = css`
  flex: 1;
  padding: 22px;
  @media screen and (max-width: 980px){
    max-width: 680px;
    width: 100%;
    margin: 24px 24px 0;
  }
`

export const Left = styled.div`
  ${container}
  background: var(--second-light);
  border-radius: 8px;
  z-index: 1;
`

export const Right = styled.div`
  ${container}
  background: var(--second-dark);
  box-shadow: 0px 4px 20px var(--third-dark);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  @media screen and (max-width: 980px){
    border-radius: 8px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const inputDefaultAttributes = {
  spellCheck: 'false',
  autoComplete: 'off'
} as any

const validInput = css`
  border: 1px solid var(--success);
`

const invalidInput = css`
  border: 1px solid var(--danger);
`

export interface InputBaseProps {
  $valid: null | boolean
}

const inputBase = css<InputBaseProps>`
  padding: 10px 12px;
  margin: 0 0 22px;
  width: 100%;
  outline: none;
  border-radius: 3px;
  border: 1px solid var(--fourth-dark);
  color: var(--fourth-dark);
  background: transparent;
  font-style: italic;
  font-size: 16px;
  ${({ $valid = null }) => $valid !== null && ($valid ? validInput : invalidInput)}
  @media screen and (max-width: 1366px){
    padding: 8px 10px;
    font-size: 15px;
  }
`

export const Input = styled.input.attrs(inputDefaultAttributes)<InputBaseProps>`
  ${inputBase}
`

export const Textarea = styled.textarea.attrs(inputDefaultAttributes)<InputBaseProps>`
  ${inputBase}
  resize: none;
  height: 100px;
  @media screen and (max-width: 1550px){
    height: 80px;
  }
`

export const Notice = styled.p`
  margin: 0 0 22px;
  font-size: 14px;
  color: var(--fourth-dark);
`

export const NoticeLink = styled(GatsbyLink)`
  text-decoration: underline;
  color: var(--third-dark);
`

export const Button = styled.button`
  padding: 10px;
  margin: 0 0 0 auto;
  width: 160px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 16px;
  background: var(--third-dark);
  color: var(--second-light);
  cursor: pointer;
  :hover, :disabled{
    background: var(--second-dark);
  }
  :disabled{
    cursor: auto;
  }
  @media screen and (max-width: 1366px){
    padding: 8px;
    height: 35px;
  }
`

export const Information = styled.div`
  padding: 30px;
  @media screen and (max-width: 1550px){
    padding: 20px 10px;
  }
  @media screen and (max-width: 1024px){
    padding: 10px;
  }
`

export const InformationTitle = styled.p`
  text-align: center;
  font-style: italic;
  font-size: 26px;
  @media screen and (max-width: 1550px){
    font-size: 22px;
  }
  @media screen and (max-width: 1024px){
    font-size: 20px;
  }
`

export const StepContainer = styled.ul`
  margin: 50px 0;
  li{
    margin: 22px 0;
    letter-spacing: 2px;
    font-size: 22px;
  }
  @media screen and (max-width: 1550px){
    li{
      letter-spacing: 1px;
      font-size: 18px;
    }
  }
  @media screen and (max-width: 1024px){
    li{
      letter-spacing: 0;
      font-size: 17px;
    }
  }
  @media screen and (max-width: 980px){
    margin: 0;
  }
  @media screen and (max-width: 480px){
    li{
      font-size: 15px;
    }
  }
`

export const InformationContacts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-decoration: underline;
  font-style: italic;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 1px;
  li{
    margin: 0 8px;
  }
  @media screen and (max-width: 1550px){
    font-size: 16px;
  }
`
