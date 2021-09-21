import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface Props {}

const NavList: React.FC<Props> = (props) => {
  return (
    <Container role="navigation" aria-label="Primary Navigation">
      <ul>
        <li>
          <Link href="/" as="/">
            <a>Who We Are</a>
          </Link>
        </li>
        <li>
          <Link href="/" as="/">
            <a>How We Work</a>
          </Link>
        </li>
        <li>
          <Link href="/" as="/">
            <a>Get In Touch</a>
          </Link>
        </li>
        <li>
          <Link href="/" as="/">
            <a>FAQ</a>
          </Link>
        </li>
        <li>
          <Link href="/" as="/">
            <a>Terms & Conditions</a>
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
