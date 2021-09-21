import styled from 'styled-components';

export const HLine = styled.div<{ space: number; light?: boolean }>`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.border};
  margin-top: ${({ space }) => `${space}px`};
  margin-bottom: ${({ space }) => `${space}px`};

  ${({ light, theme }) => {
    if (light) {
      return `
          height: 1px;
          background-color: ${theme.colors.lightBorder};
      `;
    }
  }}
`;

export const VLine = styled.div<{ space: number }>`
  width: 2px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.border};
  margin-left: ${({ space }) => `${space}px`};
  margin-right: ${({ space }) => `${space}px`};
`;
