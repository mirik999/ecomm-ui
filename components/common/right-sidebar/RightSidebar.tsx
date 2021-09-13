import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';
//components
import { HLine, VLine } from '../../styled';
import Button from '../buttons/Button';
import Flex from '../../layout/Flex';
import ButtonWithPlusMinus from '../buttons/ButtonWithPlusMinus';
//utils
import { calculateSale, calculateTotalSumOfProducts } from '../../../utils/calculation.utils';
//atom
import { rightSidebar } from '../../../recoil/sidebar.atom';

const fakeData = [
  {
    id: '1',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1617877166/sliders/71E5zB1qbIL._SL1500__ueoajv.jpg',
      alt: 'ipgone 12',
      videoId: '',
      link: '',
    },
    name: 'iPhone 12 Pro Mar 256GB Silver With Blue',
    price: 999,
    sale: true,
    saleCount: 20,
  },
  {
    id: '2',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1617877166/sliders/71E5zB1qbIL._SL1500__ueoajv.jpg',
      alt: 'ipgone 12',
      videoId: '',
      link: '',
    },
    name: 'MSI z470 Gaming Matherboard',
    price: 1089,
    sale: false,
    saleCount: 0,
  },
  {
    id: '3',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1617877166/sliders/71E5zB1qbIL._SL1500__ueoajv.jpg',
      alt: 'ipgone 12',
      videoId: '',
      link: '',
    },
    name: 'Logitech Gaming Keyboard G PRO',
    price: 3549,
    sale: true,
    saleCount: 20,
  },
  {
    id: '4',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1617877166/sliders/71E5zB1qbIL._SL1500__ueoajv.jpg',
      alt: 'ipgone 12',
      videoId: '',
      link: '',
    },
    name: 'iPhone 12 Pro Mar 256GB Silver',
    price: 1999,
    sale: false,
    saleCount: 0,
  },
  {
    id: '5',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1617877166/sliders/71E5zB1qbIL._SL1500__ueoajv.jpg',
      alt: 'ipgone 12',
      videoId: '',
      link: '',
    },
    name: 'iPhone 12 Pro Mar 256GB Silver',
    price: 45,
    sale: false,
    saleCount: 0,
  },
  {
    id: '6',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1617877166/sliders/71E5zB1qbIL._SL1500__ueoajv.jpg',
      alt: 'ipgone 12',
      videoId: '',
      link: '',
    },
    name: 'iPhone 12 Pro Mar 256GB Silver',
    price: 999,
    sale: false,
    saleCount: 20,
  },
  {
    id: '7',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1617877166/sliders/71E5zB1qbIL._SL1500__ueoajv.jpg',
      alt: 'ipgone 12',
      videoId: '',
      link: '',
    },
    name: 'iPhone 12 Pro Mar 256GB Silver',
    price: 18,
    sale: true,
    saleCount: 60,
  },
];

const animation = {
  visible: { x: 0 },
  hidden: { x: 300 },
};

interface Props {}

const RightSidebar: React.FC<Props> = (props) => {
  const controls = useAnimation();
  const [rSidebar, setRightSidebar] = useRecoilState(rightSidebar);

  useEffect(() => {
    (async function () {
      try {
        const sideBarState = rSidebar.isOpen ? 'visible' : 'hidden';
        await controls.start(sideBarState);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [rSidebar]);

  async function _onCloseSidebar() {
    setRightSidebar({
      isOpen: false
    })
    await controls.start("hidden");
  }

  return (
    <Container initial="hidden" animate={controls} variants={animation} transition={{ type: 'timing' }}>
      <h3>Basket</h3>
      <HLine space={10} />
      <Flex cls="scrollable">
        <ul>
          {fakeData.map((product, i) => (
            <Li key={i} className="product-wrap">
              <Flex cls="gap0" items="center">
                <Flex cls="image-wrap" justify="center" items="center" col="0">
                  <Image src={product.cover.src} alt={product.cover.alt} width={65} height={90} />
                  <VLine space={5} />
                </Flex>
                <Flex cls="product-info" flex="column">
                  <span>{product.name}</span>
                  <HLine space={5} />
                  <Flex cls="gap0" justify="between">
                    <span>Count</span>
                    <span>1</span>
                  </Flex>
                  <Flex justify="between" items="center">
                    <span>Price</span>
                    {product.sale ? (
                      <Flex cls="gap0" justify="end">
                        <del>{product.price} $</del>
                        <span>{calculateSale(product.price, product.saleCount)} $</span>
                      </Flex>
                    ) : (
                      <span>{product.price} $</span>
                    )}
                  </Flex>
                </Flex>
              </Flex>
              <Flex cls="product-hover gap0" flex="column" justify="center">
                <Button type="button" text="Remove" onClick={() => false} />
                <ButtonWithPlusMinus text="Count" onPlus={() => false} onMinus={() => false} />
              </Flex>
            </Li>
          ))}
        </ul>
      </Flex>
      <HLine space={10} />
      <Flex cls="gap action-buttons">
        <Flex justify="between" items="center">
          <Button text="Order" color="black" onClick={() => false} />
          <span className="total-sum">Total: {calculateTotalSumOfProducts(fakeData)} $</span>
        </Flex>
        <Button text="Continue shopping" full color="black" onClick={_onCloseSidebar} />
      </Flex>
    </Container>
  );
};

export default RightSidebar;

const Container = styled(motion.div)`
  width: 256px;
  height: calc(100vh - 40px);
  background-color: ${({ theme }) => theme.colors.section};
  padding: 15px;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 2;

  .scrollable {
    max-height: 50vh;
  }

  ul {
    width: 100%;
    margin-right: 10px;
  }

  .action-buttons {
    .total-sum {
      font-weight: 500;
    }
  }
`;

const Li = styled.li`
  width: 100%;
  height: 90px;
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  margin-top: 10px;
  display: flex;
  align-items: center;
  position: relative;

  &:hover > .product-hover {
    opacity: 1;
    z-index: auto;
    transition-delay: 0.3s;
  }

  .image-wrap {
    min-width: 65px;
    min-height: 90px;
    height: 100%;
    img {
      object-fit: contain;
    }
  }

  .product-info {
    padding: 5px;

    span,
    del {
      font-size: 12px;
      font-weight: 500;
    }
  }

  .product-hover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 0;
    padding-left: 5px;
    user-select: none;

    & > div,
    & > button {
      width: 102px;
    }
  }
`;
