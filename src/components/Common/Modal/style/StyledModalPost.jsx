import styled, { keyframes, css } from 'styled-components';

const slideIn = keyframes`
  from{
    bottom: -500px;
  }
  to{
    bottom: 0px;
  }
`;
const slideOut = keyframes`
  from{
    bottom: 0px;
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

export const StyledModal = styled.div`
  /* position: relative; */
  background-color: var(--color-neutral);
  border-radius: 10px 10px 0px 0px;
  padding: 20px;
  padding-bottom: 60px;
  width: 414px;
  position: fixed;
  z-index: 20;
  left: 50%;
  transform: translate(-50%);

  bottom: 0;

  /* bottom: ${({ visible, isPostorJoin }) =>
    visible ? (isPostorJoin === 'Post' ? '65px' : '0px') : '-500px'}; */
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
  &:hover {
    color: var(--color-primary);
  }
`;
