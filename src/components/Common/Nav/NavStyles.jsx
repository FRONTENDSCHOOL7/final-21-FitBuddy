import backIcon from '../../../assets/icons/icon-back.svg';
import styled from 'styled-components';

/* NavBottom */
export const StyledNavIcons = styled.img`
  width: 28px;
  height: 28px;
`;
export const Nav = styled.nav`
  overflow: hidden;
  background-color: var(--color-bg);
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  border-top: 0.5px solid var(--color-secondary);
`;

export const NavDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  float: left;
  width: 25%;
  height: 45px;
  padding-top: 30px;
  gap: 5px;
  cursor: pointer;
`;

export const NavText = styled.span`
  color: ${({ isActive }) => (isActive ? 'var(--color-primary)' : 'var(--color-secondary)')};
`;

/* Nav */

export const BackIcon = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${backIcon});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  left: 30px;
  cursor: pointer;
`;

/* NavTop */

export const NavTop = styled.div`
  background-color: var(--color-bg);
  height: 70px;
  display: flex;
  justify-content: center;

  flex-direction: ${(props) => (props.direction === 'column' ? 'column' : 'row')};
  align-items: ${(props) => (props.alignItems === 'center' ? 'center' : '')};
`;

export const NavTopTitle = styled.h1`
  color: var(--color-secondary);
  font-family: 'Pretendard-Semibold', sans-serif;
  float: ${(props) => (props.float === 'left' ? 'left' : '')};
  font-size: ${(props) => (props.fontSize === 'title' ? 'var(--font-size-title)' : '')};
  padding-left: ${(props) => (props.paddingLeft === '30px' ? '30px' : '')};
`;
