import React from 'react';
import styled from 'styled-components';

const StyledChip = styled.button`
  min-width: 63px;
  height: 33px;
  border: none;
  border-radius: 16px;
  background-color: var(--color-primary);
  font-size: var(--font-size-sm);
  font-style: normal;
  font-weight: var(--font-weight-semibold);
  line-height: 27px;
`;

export default function chip() {
  return <StyledChip type='radio'>🏃🏻‍♀️러닝</StyledChip>;
}
