import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  overflow: hidden scroll;
  width: 100%;
  max-width: 1920px;
  height: ${({ theme }) => `${theme.dimensions.innerHeight}px`};
  box-shadow: 0px 4px 20px var(--second-dark);
  margin: 0 auto;
  scrollbar-width: none;
  ::-webkit-scrollbar{
    display: none;
  }
  :focus-visible{
    outline: none;
  }
`
