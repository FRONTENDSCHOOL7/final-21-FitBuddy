import styled from 'styled-components';

export const CommentWrapper = styled.div`
  width: 420px;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  gap: 10px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  text-align: left;
`;

export const StyledP = styled.p`
  &.name {
    margin-bottom: 8px;
    font-size: var(--font-size-md);
  }
  &.email {
    font-size: var(--font-size-sm);
  }
  &.text {
    font-size: var(--font-size-sm);
  }
  &.time {
    font-size: var(--font-size-sm);
    margin-bottom: 10px;
  }
`;
export const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  margin-top: 5px;
  color: var(--color-secondary);
`;
