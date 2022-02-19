import React, { useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { useMedia } from 'use-media';
//components
import Header from '../../common/header/Header';
import LeftSidebar from '../../common/left-sidebar/LeftSidebar';
import RightSidebar from '../../common/right-sidebar/RightSidebar';
import Footer from '../../common/footer/Footer';
import Overlay from './Overlay';
import BodyFrame from './BodyFrame';
//rest
import { languageAtom, translationsAtom } from '../../../recoil/translation.atom';
import { leftSidebarAtom, rightSidebar } from '../../../recoil/sidebar.atom';
import api from '../../../api-requests/rest/api';

interface Props {
  children: React.ReactNode;
  translationData?: Record<string, string>;
}

function Layout({ children, translationData }: Props) {
  const isWide = useMedia({ minWidth: 1920 });
  const [rSidebar, setRightSidebar] = useRecoilState(rightSidebar);
  const [lSidebar, setLeftSidebar] = useRecoilState(leftSidebarAtom);

  useEffect(() => {
    console.log('from server', translationData);
  }, []);

  useEffect(() => {
    let timout: NodeJS.Timeout;
    if (isWide) {
      if (!rSidebar.isOpen && !lSidebar.isOpen) {
        timout = setTimeout(() => {
          setRightSidebar({ isOpen: true });
          setLeftSidebar({ isOpen: true });
        }, 1000);
      }
    }

    return () => {
      clearTimeout(timout);
    };
  }, [isWide]);

  return (
    <Container>
      <Head>
        <title>Ecomm shopping platform</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        />
      </Head>
      <BodyFrame />
      <LeftSidebar />
      <RightSidebar />
      <Content>
        <Overlay />
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Content>
    </Container>
  );
}

export default Layout;

export async function getStaticProps() {
  const translationData = await api.translation.getAll();
  return { props: { translationData } };
}

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.container};
  padding: 20px;

  @media (max-width: 580px) {
    padding: 10px;
  }
`;

const Content = styled.div`
  position: relative;
`;

const Main = styled.main`
  width: 100%;
  max-width: 1328px;
  min-height: calc(100vh - 219px);
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.section};

  @media (max-width: 1300px) {
    min-height: calc(100vh - 278px);
  }

  @media (max-width: 850px) {
    min-height: calc(100vh - 232px);
  }

  @media (max-width: 580px) {
    min-height: calc(100vh - 231px);
  }
`;
