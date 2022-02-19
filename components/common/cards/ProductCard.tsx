import React from 'react';
import styled from 'styled-components';
import Rate from 'rc-rate';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { HLine } from '../../styled';
import 'rc-rate/assets/index.css';
import Flex from '../../layout/Flex';
import { IProduct } from '../../../types/product.type';
import { calculateSale } from '../../../utils/calculation.utils';

interface Props {
  product: IProduct;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Container>
      <Flex cls="gap product-badges" flex="column">
        {product.new ? (
          <div className="dimension is-new">
            <span>New Product</span>
          </div>
        ) : (
          <div className="dimension is-used">
            <span>Used Product</span>
          </div>
        )}
        {product.sale && (
          <div className="dimension is-sale">
            <span>On Sale</span>
          </div>
        )}
        {!product.defective && product.best && (
          <div className="dimension is-best">
            <span>Best Product</span>
          </div>
        )}
        {product.defective && (
          <div className="dimension is-defective">
            <span>Has Defect</span>
          </div>
        )}
      </Flex>
      <div className="product-image">
        <Flex cls="product-image-box" justify="center">
          <Image src={product.cover.src} alt={product.name} width={210} height={140} />
        </Flex>
      </div>
      <HLine space={10} light />
      <Flex cls="gap0 product-body" flex="column">
        <Flex justify="center">
          <Link
            href={`/product-details/[id]`}
            as={`/product-details/${product.name}`}
            //.replaceAll(" ", "-")
          >
            <a className="product-name">{product.name}</a>
          </Link>
        </Flex>
        <Flex justify="center">
          {product.sale ? (
            <Flex cls="gap2" justify="center">
              <del className="product-price-old">{product.price} AZN</del>
              <span className="product-price">{calculateSale(product.price, product.saleCount)} AZN</span>
            </Flex>
          ) : (
            <span className="product-price">{product.price} AZN</span>
          )}
        </Flex>
        <Flex justify="center">
          <Rate value={product.stars.length} disabled />
        </Flex>
      </Flex>
      <HLine space={10} light />
      <Flex cls="product-footer" justify="between" items="center" col="0">
        <a href={`https://google.com/search?q=${product.name}`} target="_blank" rel="noreferrer">
          <FcGoogle size={20} />
        </a>
        <span role="button">Add To Cart</span>
      </Flex>
    </Container>
  );
};

export default ProductCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border: ${({ theme }) => `1px solid ${theme.colors.lightBorder}`};
  min-width: 253.5px;
  width: 100%;
  height: 330px;
  padding: 10px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  }

  .product-image {
    background-color: ${({ theme }) => theme.colors.section};
    height: 45%;

    .product-image-box {
      img {
        object-fit: contain;
      }
    }
  }

  .product-body {
    flex: 1;

    .product-name {
      font-weight: bold;
      font-size: 14px;
      text-align: center;
    }

    .product-price {
      font-weight: bold;
      font-size: 14px;
    }

    .product-price-old {
      color: ${({ theme }) => theme.colors.secondaryTextColor};
      font-weight: bold;
      font-size: 14px;
    }
  }

  .product-footer {
    span,
    a {
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      height: 20px;
    }

    span {
      height: 14px;
    }
  }

  .product-badges {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;

    .dimension {
      width: 20px;
      height: 20px;
      overflow: hidden;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s ease;
      transition-delay: 0.3s;

      &:hover {
        width: 125px;
      }

      span {
        display: block;
        white-space: nowrap;
        margin-left: 20px;
        margin-right: 10px;
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
      }
    }

    .is-sale {
      background-color: orange;
    }

    .is-new {
      background-color: limegreen;
    }

    .is-best {
      background-color: dodgerblue;
    }

    .is-used {
      background-color: tomato;
    }

    .is-defective {
      background-color: silver;
    }

    .is-coupon {
      background-color: yellow;
    }
  }
`;
