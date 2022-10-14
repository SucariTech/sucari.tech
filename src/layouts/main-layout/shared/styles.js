import styled from 'styled-components';

/* Components */
import FadeInEffect from '@components/fade-in-effect';

/* Common */
export const Container = styled(FadeInEffect)``;

export const NetworkList = styled.ul`
  display: flex;
`;

export const Network = styled.li`
  margin: 0 20px 0 0;
  :last-child{
    margin: 0;
  }
  svg{
    width: 28px;
    height: 28px;
    fill: var(--main-light);
  }
  @media screen and (max-width: 1024px){
    svg{
      width: 24px;
      height: 24px;
    }
  }
`;

export const NetworkLink = styled.a`
  display: flex;
`;