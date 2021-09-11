import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import Flex from '../../layout/Flex';

interface Props {}

const Wishlist: React.FC<Props> = (props) => {
  return <Container>
    <Flex cls="gap" items="center">
      <AiOutlineHeart size={18} />
      <span>Wishlist</span>
    </Flex>
    </Container>;
};

export default Wishlist;

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
