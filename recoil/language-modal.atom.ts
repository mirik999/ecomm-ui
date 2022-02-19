import { atom } from 'recoil';

export const languageModalAtom = atom<{ isOpen: boolean }>({
  key: 'language-modal',
  default: {
    isOpen: false,
  },
});
