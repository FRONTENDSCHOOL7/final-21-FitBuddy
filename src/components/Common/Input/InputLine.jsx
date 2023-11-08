import React, { useState } from 'react';
import { LoginInputBox } from './style/StyledInputLine';

export default function InputLine({
  width,
  height,
  borderColor,
  placeholder,
  marginBottom,
  hasInput,
}) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
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
