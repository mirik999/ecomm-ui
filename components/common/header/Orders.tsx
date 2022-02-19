import React from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import useMedia from 'use-media';
import Text from '../text/Text';
import Flex from '../../layout/Flex';
import { leftSidebarAtom, rightSidebar } from '../../../recoil/sidebar.atom';

interface Props {}

const Orders: React.FC<Props> = (props) => {
  const isMedium = useMedia({ maxWidth: 991 });
  const [rSidebar, setRightSideBar] = useRecoilState(rightSidebar);
  const [lSidebar, setLeftSideBar] = useRecoilState(leftSidebarAtom);

  function _onToggleSidebar() {
    if (isMedium) {
      setRightSideBar({
        isOpen: !rSidebar.isOpen,
      });
      if (lSidebar.isOpen) {
        setLeftSideBar({
          isOpen: false,
        });
      }
    } else {
      setRightSideBar({
        isOpen: !rSidebar.isOpen,
      });
    }
  }

  return (
    <Container>
      <Flex cls="gap" items="center" role="button" onClick={_onToggleSidebar}>
        <AiOutlineShoppingCart size={18} />
        <Text tag="span" keyword="my_basket" />
      </Flex>
    </Container>
  );
};

export default Orders;

const Container = styled.div`
  cursor: pointer;

  &:hover {
    span {
      color: ${({ theme }) => theme.colors.main};
    }
    svg {
      fill: ${({ theme }) => theme.colors.main};
    }
  }

  span {
    display: block;
    font-weight: 500;
    padding: 10px 0;
    font-size: 14px;
    white-space: nowrap;
    transition: all 0.3s ease;
  }

  svg {
    path {
      transition: all 0.3s ease;
    }
  }
`;
