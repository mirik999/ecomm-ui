import { atom } from 'recoil';

export const leftSidebarAtom = atom<{ isOpen: boolean }>({
  key: 'left-sidebar',
  default: {
    isOpen: false,
  },
});

export const rightSidebar = atom<{ isOpen: boolean }>({
  key: 'right-sidebar',
  default: {
    isOpen: false,
  },
});
