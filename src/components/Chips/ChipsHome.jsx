import React from 'react';
import { SelectWrapper, RadioInput, Label } from './ChipsStyles';

export default function chipsHome() {
  return (
    <SelectWrapper>
      <RadioInput id='all' name='shop' />
      <Label htmlFor='all'>전체</Label>
      <RadioInput id='meet' name='shop' />
      <Label htmlFor='meet'>모임</Label>
      <RadioInput id='today' name='shop' />
      <Label htmlFor='today'>오운완</Label>
      <RadioInput id='QA' name='shop' />
      <Label htmlFor='QA'>질문</Label>
      <RadioInput id='shop' name='shop' />
      <Label htmlFor='shop'>장터</Label>
    </SelectWrapper>
  );
}
