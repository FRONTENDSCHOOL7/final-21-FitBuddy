import { atom } from 'recoil';

export const commentCount = atom({
  key: 'commentCount',
  default: 0,
});

export const commentPreview = atom({
  key: 'commentPreview',
  default: {},
});
