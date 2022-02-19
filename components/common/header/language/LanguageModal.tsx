import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
//rest
import Flex from '../../../layout/Flex';
import { languageAtom, translationsAtom } from '../../../../recoil/translation.atom';
import api from '../../../../api-requests/rest/api';
import useLazyQuery from '../../../../hooks/useLazyQuery';
//images
import UK from '../../../../assets/icons/united-kingdom.png';
import RU from '../../../../assets/icons/russia.png';
import AZ from '../../../../assets/icons/azerbaijan.png';

interface Props {}

const LanguageModal: React.FC<Props> = (props) => {
  const setTranslations = useSetRecoilState(translationsAtom);
  const [{ language }, setLanguage] = useRecoilState(languageAtom);
  const query = useLazyQuery(['translations', language], () => api.translation.getAll(language));

  async function _onChangeLang(lang: 'EN' | 'RU' | 'AZ') {
    setLanguage({ language: lang });
    try {
      await query.refetch();
    } catch (err) {
      console.log('error', error);
    }
  }

  return (
    <Container>
      <LangWrap
        selected={language === 'EN'}
        role="button"
        flex="column"
        justify="center"
        items="center"
        onClick={() => _onChangeLang('EN')}
      >
        <Image src={UK} alt="United Kingdoms Flag" width={70} height={70} />
        <span>English</span>
      </LangWrap>
      <LangWrap
        selected={language === 'RU'}
        role="button"
        flex="column"
        justify="center"
        items="center"
        onClick={() => _onChangeLang('RU')}
      >
        <Image src={RU} alt="Russian Flag" width={70} height={70} />
        <span>Russian</span>
      </LangWrap>
      <LangWrap
        selected={language === 'AZ'}
        role="button"
        flex="column"
        justify="center"
        items="center"
        onClick={() => _onChangeLang('AZ')}
      >
        <Image src={AZ} alt="Azerbaijani Flag" width={70} height={70} />
        <span>Azeri</span>
      </LangWrap>
    </Container>
  );
};

export default LanguageModal;

const Container = styled.div`
  width: 330px;
  height: 130px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const LangWrap = styled(Flex)<{ selected: boolean }>`
  cursor: pointer;
  transition: all 0.3s ease;

  span {
    color: ${({ selected, theme }) => selected && theme.colors.main};
    font-weight: ${({ selected }) => selected && 'bold'};
  }

  &:hover span {
    color: ${({ theme }) => theme.colors.main};
    font-weight: bold;
  }
`;
