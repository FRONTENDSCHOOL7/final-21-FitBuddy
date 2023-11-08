import styled, { keyframes, css } from 'styled-components';

export const StyledModal = styled.div`
  /* position: relative; */
  background-color: var(--color-neutral);
  border-radius: 10px 10px 0px 0px;
  padding: 20px;
  width: 500px;
  position: fixed;
  left: 50%;
  transform: translate(-50%);

  bottom: ${({ visible }) => (visible ? '65px' : '-500px')};
  animation: ${({ visible }) => (visible ? slideInAnimation : slideOutAnimation)};

  &::before {
    content: '';
    position: absolute;
    left: calc(50%);
    transform: translate(-50%);
    top: 10px;
    width: 50px;
    height: 5px;
    border-radius: 50px;
    background-color: var(--color-secondary);
  }
`;

export const DeleteBtn = styled.button`
  background-color: inherit;
  color: var(--color-secondary);
  padding: 20px 0px;
  border: none;
  cursor: pointer;
  font-size: var(--font-size-md);
  display: flex;
  flex-direction: column;

  &:last-child {
    margin-bottom: 0;
  }
`;
const slideIn = keyframes`
  from{
    bottom: -500px;
  }
  to{
    bottom: 65px;
  }
`;
const slideOut = keyframes`
  from{
    bottom: 65px;
  }
  to{
    bottom: -500px;
  }
`;

const slideInAnimation = css`
  ${slideIn} 0.5s ease-in-out forwards
`;
const slideOutAnimation = css`
  ${slideOut} 0.5s ease-in-out forwards
`;
