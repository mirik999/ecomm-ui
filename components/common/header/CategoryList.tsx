import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRecoilState } from "recoil";
import { fakeCategories } from '../left-sidebar/LeftSidebar';
//atom
import { leftSidebarAtom } from "../../../recoil/sidebar.atom";

interface Props {}

const CategoryList: React.FC<Props> = (props) => {
  const [lSidebar, setLeftSideBar] = useRecoilState(leftSidebarAtom);

  function _onToggleSidebar() {
    setLeftSideBar({
      isOpen: !lSidebar.isOpen,
    });
  }

  return (
    <Container role="navigation" aria-label="Product Navigation">
      <ul>
        <li>
          <a role="button" onClick={_onToggleSidebar}>
            <span>All Categories</span>
          </a>
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
      a {
        display: block;
        font-weight: 500;
        padding: 10px 0 10px 10px;
        font-size: 14px;
        white-space: nowrap;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.main};
        }
      }
    }
  }
`;
