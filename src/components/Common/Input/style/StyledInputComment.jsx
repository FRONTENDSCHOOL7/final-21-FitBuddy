import styled from 'styled-components';
export const StyledInput = styled.input`
  background: none;
  border: none;
  color: #fff;
  margin-left: 15px;
  padding-right: 120px;

  &:focus {
    outline: none;
  }
`;
export const StyledDiv = styled.div`
  display: flex;
  width: 400px;
  background-color: #141414;
  padding: 10px;
  border: 1px solid #ccc;
  justify-content: center;
  bottom: 69px;
  position: fixed;
  min-height: 60px;
  border-radius: 10px;
`;
export const StyledButton = styled.button`
  background-color: #141414;
  border: none;
  color: #fff;
  &:hover {
    color: var(--color-primary);
  }
`;
