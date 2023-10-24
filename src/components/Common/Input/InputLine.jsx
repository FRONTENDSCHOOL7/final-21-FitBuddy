import React, { useState } from 'react';
import styled from 'styled-components';

export const InputBox = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-left: 31px;
  border-radius: 30px;
  border: 1px solid ${(props) => props.borderColor};
  box-sizing: border-box;
  margin-bottom: ${(props) => `${props.marginBottom}px`};
  font-size: var(--font-size-btn);
  background-color: transparent;
  color: var(--color-secondary);
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => (props.hasInput ? 'var(--color-secondary)' : 'var(--color-gray)')};
  }
`;

export default function InputLine({
  width,
  height,
  borderColor,
  placeholder,
  marginBottom,
  hasInput,
  onChange,
}) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event); // 부모 컴포넌트에서 전달된 onChange 함수 호출
    }
  };

  return (
    <InputBox
      width='340px'
      height='43px'
      borderColor='var(--color-primary)'
      placeholder={placeholder}
      marginBottom={marginBottom}
      hasInput={inputValue.length > 0}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}
