import styled from 'styled-components';

export const StyledChip = styled.button`
  width: auto;
  padding: 0 12px;
  height: 33px;
  border: ${({ active }) => (active ? 'none' : '1px solid #fff')};
  border-radius: 16px;
  background-color: ${({ active }) => (active ? 'var(--color-primary)' : '#000')};
  color: ${({ active }) => (active ? '#000' : '#fff')};

  font-size: var(--font-size-sm);
  font-style: normal;
  font-weight: var(--font-weight-semibold);
  line-height: 27px;
`;
