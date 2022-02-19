import React from "react";
import styled from "styled-components";

interface Props {
}

const BodyFrame: React.FC<Props> = (props) => {
  return (
    <Container>
      <div className="top" />
      <div className="right" />
      <div className="bottom" />
      <div className="left" />
    </Container>
  );
};

export default BodyFrame;

const Container = styled.div`
  position: relative;

  .top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    z-index: 4;
    background-color: ${({theme}) => theme.colors.container};
  }

  .right {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 20px;
    z-index: 4;
    background-color: ${({theme}) => theme.colors.container};
  }

  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    z-index: 4;
    background-color: ${({theme}) => theme.colors.container};
  }

  .left {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 20px;
    z-index: 4;
    background-color: ${({theme}) => theme.colors.container};
  }
  
  @media (max-width: 580px) {
    .right, .left {
      width: 10px;
    }
    .top, .bottom {
      height: 10px;
    }
  }
`;
