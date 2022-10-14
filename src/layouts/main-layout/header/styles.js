import styled, { css } from 'styled-components';

/* Header */
export const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 20px 30px;
  z-index: 1000;
  @media screen and (max-width: 1024px){
    padding: 20px;
  }
`;

/* Nav */
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 6px;
  user-select: none;
  @media screen and (max-width: 1366px){
    font-size: 25px;
    letter-spacing: 4px;
  }
  @media screen and (max-width: 1024px){
    font-size: 22px;
    letter-spacing: 2px;
  }
`;

/* Button */
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 40px;
  height: 40px;
  margin: 4px;
  cursor: pointer;
`;

const buttonBase = css`
  width: 40px;
  height: 3px;
  background: var(--main-light);
  border-radius: 10px;
`;

const toClose = css`
  background: transparent;
  ::before{
    transform: rotate3d(0, 0, 1, 40deg);
  }
  ::after{
    transform: rotate3d(0, 0, 1, -40deg);
  }
`;
const toOpen = css`
  ::before{
    transform: translate3d(0, calc(45px / 3.5), 0);
  }
  ::after{
    transform: translate3d(0, calc(-45px / 3.5), 0);
  }
`;

export const Button = styled.div`
  ${buttonBase}
  ::before, ::after{
    content: '';
    position: absolute;
  }
  ::before, ::after{
    ${buttonBase}
  }
  ${({ isOpen = false }) => isOpen ? toClose : toOpen}
`;

/* Menu */
export const MenuWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: ${({ open = false }) => open ? '0' : '-100%'};
  max-width: 1920px;
  width: 100%;
  height: ${({ theme }) => `${theme.dimensions.innerHeight}px`};
  padding: 20px 30px 0 30px;
  background: var(--second-dark);
  background-size: 3px 3px;
  background-image:  repeating-linear-gradient(0deg, var(--main-dark), var(--main-dark) 2.2px, transparent 2.2px, transparent);
  transition: right 0.5s ease-in-out;
`;

/* Menu Header */
export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Logo = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  @media screen and (max-width: 1366px){
    width: 50px;
    height: 50px;
  }
`;

/* Menu Footer */
export const MenuFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 30px 0;
  margin: 10px auto 0;
  width: 100%;
  border-top: 2px solid var(--main-light);
`;

/* Menu Content */
export const MenuContent = styled.div`
  display: flex;
  flex: 1;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  flex: 1;
  width: 100%;
`;

const activeOption = css`
  ::before{
    width: 100%;
  }
`;

export const MenuOption = styled.li`
  position: relative;
  max-width: max-content;
  text-transform: uppercase;
  font-size: 35px;
  letter-spacing: 2px;
  cursor: pointer;
  ::before{
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 2px;
    top: 100%;
    left: 0;
    background: var(--main-light);
    transition: width 0.3s ease-out;
  }
  :hover{
    ${activeOption}
  }
  ${({ active = false }) => active ? activeOption : ''}
  @media screen and (max-width: 1550px){
    font-size: 30px;
  }
  @media screen and (max-width: 1366px){
    font-size: 24px;
    letter-spacing: 0;
  }
`;