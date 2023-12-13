import styled from 'styled-components';
export const StyledInput = styled.input`
  background: none;
  border: none;
  color: #fff;
  margin-left: 15px;
  width: 290px;

  &:focus {
    outline: none;
  }
`;
export const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  background-color: #141414;
  padding: 10px;
  justify-content: center;
  left: 0;
  /* bottom: 80px; */
  position: fixed;
  /* min-height: 60px; */
  border-radius: 10px;
  bottom: 0;
  margin-top: 60px;
  z-index: 10;
`;
export const StyledButton = styled.button`
  background-color: #141414;
  border: none;
  color: #fff;
  &:hover {
    color: var(--color-primary);
  }
`;
