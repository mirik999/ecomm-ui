import React from 'react';
import styled from 'styled-components';

interface Props {}

const Footer: React.FC<Props> = (props) => {
  return (
    <Container>
      <span>Designed & Developed by Mirik999</span>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  max-width: 1328px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.section};
  padding: 15px;
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
