import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  padding: 15px 10px;
  margin-bottom: 40px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  width: 350px;
  flex-wrap: wrap;
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  + label {
    display: inline-block;
    cursor: pointer;
    height: 32px;
    min-width: 66px;
    width: auto;
    border: none;
    line-height: 32px;
    text-align: center;
    font-size: var(--font-size-sm);
    background-color: transparent;
    color: #fff;
    border-radius: 16px;
    border: 1px solid #fff;
    margin-right: 10px;
    margin-top: 14px;
    padding: 0px 10px;
  }
  &:checked + label {
    background-color: var(--color-primary);
    color: #000;
  }
`;

const OnboardTitle = styled.h2`
  font-size: var(--font-size-xl);
  color: #fff;
`;

const Label = styled.label``;

export default function ChipsOnboarding({ id, items }) {
  return (
    <SelectWrapper>
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
