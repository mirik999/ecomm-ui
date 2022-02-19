import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
//components
import CustomModal from '../../modal/CustomModal';
import LanguageModal from './LanguageModal';
import Text from '../../text/Text';
//state
import { languageModalAtom } from '../../../../recoil/language-modal.atom';

interface Props {}

const Language: React.FC<Props> = (props) => {
  const setModal = useSetRecoilState(languageModalAtom);

  function _onOpenLanguageSelect() {
    setModal({ isOpen: true });
  }

  return (
    <Container>
      <Text tag="span" keyword="language" role="button" onClick={_onOpenLanguageSelect} />

      <CustomModal modalId="language-modal">
        <LanguageModal />
      </CustomModal>
    </Container>
  );
};

export default Language;

const Container = styled.div`
  padding: 10px 0;
  font-size: 14px;
  white-space: nowrap;
  font-weight: 500;

  span {
    cursor: pointer;
  }
`;
