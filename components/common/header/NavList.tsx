import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Text from '../text/Text';

interface Props {}

const NavList: React.FC<Props> = (props) => {
  return (
    <Container role="navigation" aria-label="Primary Navigation">
      <ul>
        <li>
          <Link href="/" as="/">
            <a>
              <Text tag="span" keyword="who_we_are" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/" as="/">
            <a>
              <Text tag="span" keyword="how_we_work" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/" as="/">
            <a>
              <Text tag="span" keyword="get_in_touch" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/" as="/">
            <a>
              <Text tag="span" keyword="faq" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/" as="/">
            <a>
              <Text tag="span" keyword="terms_conditions" />
            </a>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default NavList;

const Container = styled.nav`
  ul {
    display: flex;
    gap: 10px;
    li {
      a {
        display: block;
        font-weight: 500;
        padding: 10px 10px 10px 0;
        font-size: 14px;
        white-space: nowrap;
        transition: all 0.3s ease;
        text-transform: capitalize;

        &:hover {
          color: ${({ theme }) => theme.colors.main};
        }
      }
    }
  }

  @media (max-width: 850px) {
    display: none;
  }
`;
