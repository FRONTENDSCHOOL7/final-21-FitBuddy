import React from 'react';
import {
  SelectWrapper,
  CheckboxInput,
  Label,
  CheckboxContainer,
  OnboardTitle,
} from './ChipsStyles';

export default function ChipsOnboarding({ id, items }) {
  return (
    <SelectWrapper marginBottom='40px'>
      <OnboardTitle>아웃도어</OnboardTitle>
      <CheckboxContainer>
        {items.map((item, index) => (
          <>
            <CheckboxInput id={`${id}${index}`} name={`${id}Shop${index}`} />
            <Label htmlFor={`${id}${index}`}>{item}</Label>
          </>
        ))}
      </CheckboxContainer>
    </SelectWrapper>
  );
}
