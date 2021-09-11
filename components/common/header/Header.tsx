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

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <Container>
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
      </Flex>
      <Flex cls="header--control-bar" flex="column" items="end">
        <Flex cls="gap" justify="end" items="center">
          <Language />
          <Orders />
          <Wishlist />
        </Flex>
        <CategoryList />
      </Flex>
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
    max-width: 207px;
    height: 73px;
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
`;
