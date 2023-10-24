import React, { useState } from 'react';
import styled from 'styled-components';

export const LoginInputBox = styled.input`
  width: 340px;
  height: 43px;
  padding-left: 31px;
  border-radius: 30px;
  border: 1px solid var(--color-primary);
  margin-bottom: ${(props) => `${props.marginBottom}px`};
  font-size: var(--font-size-btn);
  color: var(--color-secondary);
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => (props.hasInput ? 'var(--color-bg)' : 'var(--color-gray)')};
  }
  background-color: transparent;
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
    <LoginInputBox
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
