import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: ${({ theme }) => `${theme.dimensions.innerWidth}px`};
  height: ${({ theme }) => `${theme.dimensions.innerHeight}px`};
  z-index: 2000;
  padding: 20px;
`

export const Barrier = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2001;
`

export const Modal = styled.div`
  position: relative;
  padding: 25px 25px 0;
  max-width: 580px;
  width: 100%;
  overflow-y: auto;
  font-weight: bold;
  border-radius: 4px;
  background: var(--main-dark);
  color: var(--main-light);
  box-shadow: 0 0 5px var(--main-light);
  z-index: 2002;
`

export const OptionContainer = styled.div`
  padding: 25px 0;
  text-align: right;
`

export const Option = styled.span`
  padding: 8px 14px;
  border-radius: 4px;
  background: var(--third-light);
  color: var(--main-dark);
  cursor: pointer;
`
