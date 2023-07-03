import styled, { css } from 'styled-components'

/* Shared */
import { sectionBase } from '@components/sections/shared/styles'

export const Section = styled.section`
  ${sectionBase}
  display: flex;
  flex-direction: column;
  min-height: auto;
  padding-bottom: 0;
  @media screen and (max-width: 1366px),
         screen and (max-width: 1024px),
         screen and (max-width: 768px),
         screen and (max-width: 380px){
    padding-bottom: 0;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  max-width: 900px;
  width: 100%;
  padding: 60px 0;
  margin: 0 auto;
`

export const Content = styled.div``

const lineBase = css`
  margin: 80px 0;
  text-align: center;
  font-size: 26px;
  letter-spacing: 1px;
  :first-child{
    margin: 0 0 80px;
  }
  :last-child{
    margin: 0;
  }
  @media screen and (max-width: 1550px){
    margin: 55px 0;
    font-size: 22px;
    :first-child{
      margin: 0 0 55px;
    }
  }
  @media screen and (max-width: 1366px){
    font-size: 19px;
  }
  @media screen and (max-width: 768px){
    font-size: 17px;
  }
`

export const Description = styled.p`
  ${lineBase}
  font-style: italic;
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
  border-bottom: 2px solid var(--success);
`

const invalidInput = css`
  border-bottom: 2px solid var(--danger);
`

export interface InputProps {
  $valid: null | boolean
}

export const Input = styled.input.attrs(inputDefaultAttributes)<InputProps>`
  ${lineBase}
  padding: 10px 12px;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 2px solid var(--main-light);
  color: var(--main-light);
  background: transparent;
  ${({ $valid = null }) => $valid !== null && ($valid ? validInput : invalidInput)}
  ::placeholder{
    color: var(--main-light);
  }
`

export const Button = styled.button`
  ${lineBase}
  height: 32px;
  border: none;
  outline: none;
  background: transparent;
  text-transform: uppercase;
  text-decoration: underline;
  color: var(--third-light);
  cursor: pointer;
  :disabled{
    cursor: auto;
  }
`
