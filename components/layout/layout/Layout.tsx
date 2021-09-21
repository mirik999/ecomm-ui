import React, { useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
//components
import Header from '../../common/header/Header';
import LeftSidebar from '../../common/left-sidebar/LeftSidebar';
import RightSidebar from '../../common/right-sidebar/RightSidebar';
import Footer from '../../common/footer/Footer';
import Overlay from './Overlay';
//rest
import { getAllTranslations } from '../../../graphql-requests/translation.gql';
import { ITranslationResponse } from '../../../types/translations.type';
import { languageAtom, translationsAtom } from '../../../recoil/translation.atom';

interface Props {
  children: React.ReactNode;
  translationData?: ITranslationResponse;
}

function Layout({ children, translationData }: Props) {
  const [translations, setTranslations] = useRecoilState(translationsAtom);
  const [language, setLanguage] = useRecoilState(languageAtom);
  const trQuery = useQuery('translations', getAllTranslations, { initialData: translationData });

  useEffect(() => {
    if (trQuery.isSuccess) {
      setTranslations({
        messages: trQuery.data.getTranslations.payload,
      });
    }
  }, [trQuery.isSuccess]);

  return (
    <Container>
      <Head>
        <title>Ecomm shopping platform</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
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
  const translationData = await getAllTranslations();
  return { props: { translationData } };
}

const Container = styled.div`
  height: 100vh;
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
  height: calc(100vh - 219px);
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.section};
  
  @media (max-width: 1300px) {
    height: calc(100vh - 278px);
  }

  @media (max-width: 850px) {
    height: calc(100vh - 232px);
  }

  @media (max-width: 580px) {
    height: calc(100vh - 231px);
  }
`;
