import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode | string;
  full?: boolean;
  color?: string;
  [key: string]: any;
}

const Button: React.FC<Props> = ({ children, full, color = 'main', props }) => {
  return (
    <Container {...props} full={full} appearance={color}>
      {children}
    </Container>
  );
};

export default Button;

const Container = styled.button<{ full: boolean; appearance: string }>`
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  color: ${({ theme, appearance }) => theme.colors[appearance as 'main']};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme, appearance }) => `1px solid ${theme.colors[appearance as 'main']}`};
  transition: all 0.3s ease;
  cursor: pointer;
  width: ${({ full }) => (full ? '100%' : 'auto')};

  &:active {
    background-color: ${({ theme }) => theme.colors.container};
  }

  span {
    text-transform: uppercase;
    padding: 8px;
  }
`;
