import React from 'react';
import { SelectWrapper, RadioInput, Label } from './ChipsStyles';

export default function ChipsHome({ selectedCategory, onCategoryChange }) {
  const handleCategoryChange = (event) => {
    // 넘겨진 onCategoryChange 함수에 새로운 값을 전달
    onCategoryChange(event.target.id);
  };

  return (
    <SelectWrapper>
      <RadioInput
        id='all'
        name='shop'
        onChange={handleCategoryChange}
        checked={selectedCategory === 'all'}
      />
      <Label htmlFor='all'>전체</Label>
      <RadioInput
        id='meet'
        name='shop'
        onChange={handleCategoryChange}
        checked={selectedCategory === 'meet'}
      />
      <Label htmlFor='meet'>모임</Label>
      <RadioInput
        id='today'
        name='shop'
        onChange={handleCategoryChange}
        checked={selectedCategory === 'today'}
      />
      <Label htmlFor='today'>오운완</Label>
      <RadioInput
        id='QA'
        name='shop'
        onChange={handleCategoryChange}
        checked={selectedCategory === 'QA'}
      />
      <Label htmlFor='QA'>질문</Label>
      <RadioInput
        id='shop'
        name='shop'
        onChange={handleCategoryChange}
        checked={selectedCategory === 'shop'}
      />
      <Label htmlFor='shop'>장터</Label>
    </SelectWrapper>
  );
}
