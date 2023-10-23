import React, { useState } from 'react';
import styled from 'styled-components';

export const InputBox = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-left: 31px;
  border-radius: 30px;
  border: 1px solid ${(props) => props.borderColor};
  box-sizing: border-box;
  margin-bottom: 6px;
  font-size: var(--font-size-btn);
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => (props.hasInput ? 'var(--color-bg)' : 'var(--color-gray)')};
  }
`;

export default function InputLine({ width, height, borderColor, placeholder, hasInput }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <InputBox
      width='340px'
      height='43px'
      borderColor='var(--color-primary)'
      placeholder={placeholder}
      hasInput={inputValue.length > 0}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}
