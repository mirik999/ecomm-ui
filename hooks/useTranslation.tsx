import { useRecoilValue } from "recoil";
import { ITranslationMessages } from '../types/translations.type';
import { translationsAtom } from '../recoil/translation.atom';

export function useTranslation(keyword: ITranslationMessages) {
  const { messages } = useRecoilValue(translationsAtom);
  return messages[keyword] || '';
}
