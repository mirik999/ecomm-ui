import styled from 'styled-components';

export const HLine = styled.div<{ space: number }>`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.border};
  margin-top: ${({ space }) => `${space}px`};
  margin-bottom: ${({ space }) => `${space}px`};
`;

export const VLine = styled.div<{ space: number }>`
  width: 2px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.border};
  margin-left: ${({ space }) => `${space}px`};
  margin-right: ${({ space }) => `${space}px`};
`;
