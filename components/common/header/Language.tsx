import React from 'react';
import styled from 'styled-components';

interface Props {}

const Language: React.FC<Props> = (props) => {
  return <Container>Language</Container>;
};

export default Language;

const Container = styled.div`
  padding: 10px 0;
  font-size: 14px;
  white-space: nowrap;
  font-weight: 500;
`;
