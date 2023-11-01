import React from 'react';
import {
  SelectWrapper,
  CheckboxInput,
  Label,
  CheckboxContainer,
  OnboardTitle,
} from './ChipsStyles';

export default function ChipsOnboarding({ id, items, category, onSelect }) {
  const handleSelect = (selectedSport) => {
    onSelect(selectedSport);
  };

  return (
    <SelectWrapper marginBottom='40px'>
      <OnboardTitle>{category}</OnboardTitle>
      <CheckboxContainer>
        {items.map((item, index) => (
          <>
            <CheckboxInput
              id={`${id}${index}`}
              name={`${id}Shop${index}`}
              onClick={() => {
                handleSelect(item);
              }}
            />
            <Label htmlFor={`${id}${index}`}>{item}</Label>
          </>
        ))}
      </CheckboxContainer>
    </SelectWrapper>
  );
}
