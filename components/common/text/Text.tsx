import React, { memo, useMemo } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { languageAtom, translationsAtom } from '../../../recoil/translation.atom';
import { ITranslationMessages } from '../../../types/translations.type';
import { useTranslation } from '../../../hooks/useTranslation';

interface Props {
  tag: 'span' | 'p' | 'h1' | 'h3' | 'del';
  keyword: ITranslationMessages;
  [key: string]: any;
}

// eslint-disable-next-line react/display-name
const Text: React.FC<Props> = memo(
  ({ tag, keyword, ...props }) => {
    const text = useTranslation(keyword);
    return (
      <Container as={tag} {...props}>
        {text}
      </Container>
    );
  },
  (prev, next) => {
    return prev.keyword !== next.keyword;
  }
);

export default Text;

const Container = styled.span``;
