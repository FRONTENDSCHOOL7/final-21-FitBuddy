import { atom } from 'recoil';

export const commentCount = atom({
  key: 'commentCount',
  default: 0,
});
