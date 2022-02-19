import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
//components
import Flex from '../../layout/Flex';
import Text from "../text/Text";

interface Props {}

const AuthLink: React.FC<Props> = (props) => {
  return <Container>
    <Flex cls="gap" items="center">
      <Link href="/" as="/">
        <a>
          <Text tag="span" keyword="sign_in" />
        </a>
      </Link>
    </Flex>
    </Container>;
};

export default AuthLink;

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

  a {
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
