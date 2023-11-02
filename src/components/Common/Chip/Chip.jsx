import React from 'react';
import styled from 'styled-components';

const StyledChip = styled.button`
  min-width: 63px;
  width: auto;
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

export default function Chip(props) {
  return (
    <StyledChip type='radio' active={props.active} onClick={props.onClick}>
      {props.sport}
    </StyledChip>
  );
}
