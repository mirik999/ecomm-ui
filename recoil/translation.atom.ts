import { atom } from 'recoil';
import { localStorageEffect } from '../utils/recoil-persist.utils';
import { ITranslations } from '../types/translations.type';

export const translationsAtom = atom<{ messages: ITranslations[] }>({
  key: 'translations',
  default: {
    messages: [],
  },
  effects_UNSTABLE: [localStorageEffect('translations')],
});

export const languageAtom = atom<{ language: 'EN' | 'RU' | 'TR' }>({
  key: 'language',
  default: {
    language: 'EN',
  },
  effects_UNSTABLE: [localStorageEffect('language')],
});
