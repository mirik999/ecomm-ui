import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { fakeCategories } from '../left-sidebar/LeftSidebar';

interface Props {}

const CategoryList: React.FC<Props> = (props) => {
  return (
    <Container role="navigation" aria-label="Product Navigation">
      <ul>
        <li>
          <span>All Categories</span>
        </li>
        {fakeCategories.map((cat, i) => (
          <li key={i}>
            <Link href="/" as="/">
              <a>{cat.tabName}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default CategoryList;

const Container = styled.nav`
  flex: 1;
  ul {
    display: flex;
    gap: 10px;
    li {
      a,
      span {
        display: block;
        font-weight: 500;
        padding: 10px 0 10px 10px;
        font-size: 14px;
        white-space: nowrap;
        transition: all 0.3s ease;

        &:hover {
          color: ${({ theme }) => theme.colors.main};
        }
      }
    }
  }
`;
