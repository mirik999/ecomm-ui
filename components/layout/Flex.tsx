import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  flex?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'evenly' | 'around';
  items?: 'start' | 'end' | 'center' | 'stretch';
  wrap?: 'wrap' | 'no-wrap' | 'wrap-reverse';
  content?: 'start' | 'end' | 'center' | 'between' | 'evenly' | 'around' | 'auto';
  col?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';
  cls?: string;
  [key: string]: any;
}

const Flex: FC<Props> = ({ children, flex, justify, items, wrap, content, col, cls, ...props }) => {
  return (
    <Container
      className={cls}
      flex={flex}
      justify={justify}
      items={items}
      wrap={wrap}
      content={content}
      col={col}
      {...props}
    >
      {children}
    </Container>
  );
};

Flex.defaultProps = {
  flex: 'row',
  justify: 'start',
  items: 'start',
  cls: 'flex-wrap',
  wrap: 'wrap',
  content: 'auto',
  col: '1',
};

export default Flex;

const Container = styled.div`
  width: 100%;
  display: flex;
  ${({ flex, justify, items, wrap, content, col }: Props) => {
    return `
    flex: ${col};
    flex-direction: ${flex};
    justify-content: ${handleAlignment(justify!)};
    align-items: ${handleAlignment(items!)};
    align-content: ${handleAlignment(content!)};
    flex-wrap: ${wrap};
  `;
  }}
`;

// handle flex commands
function handleAlignment(cmd: string) {
  switch (cmd) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'between':
      return 'space-between';
    case 'evenly':
      return 'space-evenly';
    case 'around':
      return 'space-around';
    case 'center':
      return 'center';
    default:
      return '';
  }
}
