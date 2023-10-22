import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  padding: 15px 10px;
`;

const RadioInput = styled.input.attrs({ type: 'radio' })`
  display: none;
  + label {
    display: inline-block;
    cursor: pointer;
    height: 32px;
    min-width: 66px;
    width: auto;
    border: none;
    line-height: 24px;
    text-align: center;
    font-weight: bold;
    font-size: var(--font-size-sm);
    background-color: transparent;
    color: #fff;
    border-radius: 16px;
    border: 1px solid #fff;
    margin-right: 10px;
    padding: 0px 10px;
  }
  &:checked + label {
    background-color: var(--color-primary);
    color: #000;
  }
`;

const Label = styled.label``;

export default function chipsHome() {
  return (
    <SelectWrapper>
      <RadioInput id='select' name='shop' />
      <Label htmlFor='select'>전체</Label>
      <RadioInput id='select2' name='shop' />
      <Label htmlFor='select2'>🏃🏻‍♀️러닝</Label>
      <RadioInput id='select3' name='shop' />
      <Label htmlFor='select3'>🏃🏻‍♀️러닝</Label>
      <RadioInput id='select4' name='shop' />
      <Label htmlFor='select4'>🏃🏻‍♀️러닝</Label>
    </SelectWrapper>
  );
}
