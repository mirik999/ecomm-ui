import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
//rest
import { useTranslation } from '../../../hooks/useTranslation';

interface Props {
  [key: string]: any;
}

const SearchBar: React.FC<Props> = (props) => {
  const placeholder = useTranslation('search_product');

  return (
    <Container>
      <input type="text" placeholder={placeholder} {...props} />
      <FaSearch />
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  width: 100%;
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  position: relative;

  input {
    width: 100%;
    padding: 8.5px 35px 8.5px 15px;
    border: none;
    outline: none;

    &:focus {
      box-shadow: ${({ theme }) => `0 0 2px 1px ${theme.colors.main}`};

      & + svg path {
        fill: ${({ theme }) => theme.colors.main};
      }
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.secondaryTextColor};
      font-weight: bold;
    }
  }

  svg {
    position: absolute;
    top: 7px;
    right: 10px;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }

  @media (max-width: 580px) {
    input {
      height: 36px;
    }

    svg {
      top: 10px;
    }
  }
`;
