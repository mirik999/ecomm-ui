import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  onMinus: () => void;
  onPlus: () => void;
}

const ButtonWithPlusMinus: React.FC<Props> = ({ text, onMinus, onPlus }) => {
  return (
    <Container>
      <button type="button" onClick={onPlus}>
        +
      </button>
      <span>{text}</span>
      <button type="button" onClick={onMinus}>
        -
      </button>
    </Container>
  );
};

export default ButtonWithPlusMinus;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.main};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => `1px solid ${theme.colors.main}`};

  button {
    align-self: stretch;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    color: ${({ theme }) => theme.colors.main};
    padding: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:active {
      background-color: ${({ theme }) => theme.colors.container};
    }
  }

  span {
    text-transform: uppercase;
    padding: 8px;
  }
`;
