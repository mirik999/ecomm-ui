import { atom } from 'recoil';
import { localStorageEffect } from '../utils/recoil-persist.utils';

export const translationsAtom = atom<{ messages: Record<string, string> }>({
  key: 'translations',
  default: {
    messages: {},
  },
  effects_UNSTABLE: [localStorageEffect('translations')],
});

export const languageAtom = atom<{ language: 'EN' | 'RU' | 'AZ' }>({
  key: 'language',
  default: {
    language: 'EN',
  },
  effects_UNSTABLE: [localStorageEffect('language')],
});
