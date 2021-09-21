import React from 'react';
import styled from 'styled-components';
import useMedia from 'use-media';
import { useRecoilState } from 'recoil';
import { leftSidebarAtom, rightSidebar } from '../../../recoil/sidebar.atom';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {}

const Overlay: React.FC<Props> = (props) => {
  const isWide = useMedia({ minWidth: 1920 });
  const [lSidebar, setLSidebar] = useRecoilState(leftSidebarAtom);
  const [rSidebar, setRSidebar] = useRecoilState(rightSidebar);

  function _onCloseSidebars() {
    setLSidebar({ isOpen: false });
    setRSidebar({ isOpen: false });
  }

  const isOverlayVisible = isWide ? false : lSidebar.isOpen || rSidebar.isOpen;

  return (
    <AnimatePresence>
      {isOverlayVisible && (
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="button"
          onClick={_onCloseSidebars}
        />
      )}
    </AnimatePresence>
  );
};

export default Overlay;

const Container = styled(motion.div)`
  width: 100%;
  max-width: 1328px;
  height: 100%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
