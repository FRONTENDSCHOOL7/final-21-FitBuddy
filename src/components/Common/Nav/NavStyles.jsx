import styled from 'styled-components';

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
  border-top: 0.5px solid #fff;
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
