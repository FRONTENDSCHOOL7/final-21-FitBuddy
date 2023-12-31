import backIcon from '../../../assets/icons/icon-back.svg';
import styled from 'styled-components';

/* NavBottom */
export const StyledNavIcons = styled.img`
  width: 23px;
  height: 23px;
`;
export const Nav = styled.nav`
  overflow: hidden;
  background-color: var(--color-bg);
  color: white;
  position: fixed;
  bottom: 0;
  /* left: 0; */
  /* right: 0; */
  height: 70px;
  margin-top: 70px;
  border-top: 0.5px solid var(--color-secondary);
  width: 414px;
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
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export const NavText = styled.span`
  color: ${({ isActive }) => (isActive ? 'var(--color-primary)' : 'var(--color-secondary)')};
`;

/* Nav */

export const BackIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: auto;
  cursor: pointer;
  background-image: url(${backIcon});
  background-repeat: no-repeat;
  background-size: contain;
  left: 30px;
  cursor: pointer;
`;

/* NavTop */

export const NavTop = styled.div`
  background-color: var(--color-bg);
  width: 414px;
  height: 83px;
  margin: 10px 0px -10px 0;
  display: flex;
  align-items: center;
  /* border: 1px solid red; */

  /* flex-direction: ${(props) => (props.direction === 'column' ? 'column' : 'row')}; */
  /* align-items: ${(props) => (props.alignItems === 'center' ? 'center' : '')}; */
`;

export const NavTopTitle = styled.div`
  color: var(--color-secondary);
  font-size: ${(props) => (props.type === 'basic' ? `var(--font-size-title)` : '')};
  font-weight: var(--font-weight-bold);
  padding-left: ${(props) => (props.paddingLeft === '30px' ? '30px' : '')};
  padding-right: ${(props) => props.paddingRight};
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .empty {
    width: 16px;
  }
`;

export const CustomNavTopTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xl);
  flex: 1;
  text-align: center;
  color: var(--color-secondary);
`;
