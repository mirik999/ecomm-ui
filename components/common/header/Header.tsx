import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
//assets
import logo from '../../../assets/images/Logo.svg';
//components
import Flex from '../../layout/Flex';
import SearchBar from '../searchbar/SearchBar';
import NavList from './NavList';
import Language from './Language';
import Orders from './Orders';
import Wishlist from './Wishlist';
import CategoryList from './CategoryList';
import { useMedia } from 'use-media';

function BottomSide() {
  return (
    <Flex cls="header--control-bar" flex="column" items="end">
      <Flex cls="buttons-wrap gap" justify="end" items="center">
        <Language />
        <Orders />
        <Wishlist />
      </Flex>
      <CategoryList />
    </Flex>
  );
}

interface Props {}

const Header: React.FC<Props> = (props) => {
  const isSmall = useMedia({ maxWidth: 850, minWidth: 581 });

  return (
    <Container>
      <Flex cls="header--left-side" col="0" wrap="no-wrap">
        <Flex cls="logo-wrapper">
          <Link href="/" as="/">
            <a>
              <Image src={logo} alt="E-comm shopping logo" width={207} height={73} />
            </a>
          </Link>
        </Flex>
        <Flex cls="header--content-wrap gap0" flex="column">
          <NavList />
          <SearchBar />
          {isSmall && <BottomSide />}
        </Flex>
      </Flex>
      {!isSmall && <BottomSide />}
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 1328px;
  max-width: 100%;
  height: 100px;
  margin: 0 auto 15px auto;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.section};

  .logo-wrapper {
    width: 100%;
    min-width: 207px;
    max-width: 207px;
    a {
      img {
        object-fit: contain;
      }
    }
  }

  .header--content-wrap {
    max-height: 100px;
  }

  .header--control-bar {
    width: auto;
  }

  @media (max-width: 1300px) {
    height: 100%;
    flex-direction: column;

    .header--control-bar {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .buttons-wrap {
        order: 1;
        justify-content: flex-end;
      }
    }
  }

  @media (max-width: 850px) {
    height: 100%;

    .header--content-wrap {
      max-height: 100%;
    }

    .buttons-wrap {
      min-width: 230px;
    }

    .logo-wrapper {
      //min-width: 100px;
      //max-width: 100px;
      //height: auto;
    }
  }

  @media (max-width: 580px) {
    .logo-wrapper {
      min-width: 110px;
      max-width: 110px;
    }
  }
`;
