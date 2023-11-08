import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

export const StyledPost = styled.div`
  display: flex;
  width: 366px;
  padding: 0px 0px;
  gap: 12px;
  color: var(--color-secondary);

  p.username {
    color: var(--color-secondary);
    font-size: var(--font-size-xl);
    padding-top: 3px;
  }
  p.accountname {
    color: var(--color-gray);
    font-size: var(--font-size-xs);
    padding-top: 3px;
  }
`;

export const StyledPostEdit = styled.button`
  display: flex;
  cursor: pointer;
  margin-left: auto;
  background-color: transparent;
  border: none;
  margin-top: 16px;
`;

export const StyledUsername = styled.p`
  color: var(--color-secondary);
  font-size: var(--font-size-xl);
  padding-top: 3px;
`;

export const StyledAccountname = styled.p`
  color: var(--color-secondary);
  font-size: var(--font-size-xs);
  padding-top: 3px;
`;
