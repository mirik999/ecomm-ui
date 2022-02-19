import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
//hooks
import usePortal from '../../../hooks/usePortal';
import { languageModalAtom } from '../../../recoil/language-modal.atom';

interface Props {
  modalId: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<Props> = ({ modalId, children }) => {
  const [modal, setModal] = useRecoilState(languageModalAtom);
  const target = usePortal(modalId);
  const modalRoot = useRef<HTMLDivElement>();

  useEffect(() => {
    modalRoot.current = document.createElement('div');
    modalRoot.current?.setAttribute('id', modalId);
  }, []);

  return createPortal(
    <Container>
      <AnimatePresence>
        {modal.isOpen && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="button"
            onClick={() => setModal({ isOpen: false })}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {modal.isOpen && (
          <ModalContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {children}
          </ModalContainer>
        )}
      </AnimatePresence>
    </Container>,
    target
  );
};

export default CustomModal;

const Container = styled.div``;

const Overlay = styled(motion.div)`
  width: 100%;
  max-width: 1328px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const ModalContainer = styled(motion.div)`
  background-color: white;
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
