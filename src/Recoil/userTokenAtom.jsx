import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const userTokenAtom = atom({
  key: 'userTokenAtom',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export default userTokenAtom;
