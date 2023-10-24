import React from 'react';
import { SelectWrapper, RadioInput, Label } from './ChipsStyles';

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
