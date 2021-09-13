import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { motion, useAnimation } from 'framer-motion';
//components
import { HLine } from '../../styled';
import Flex from '../../layout/Flex';
//assets
import visa from '../../../assets/images/visa.svg';
import master from '../../../assets/images/master-card.svg';
import stripe from '../../../assets/images/stripe.svg';
import paypal from '../../../assets/images/paypal.svg';
//atom
import { leftSidebarAtom } from '../../../recoil/sidebar.atom';

export const fakeCategories = [
  {
    id: '1',
    name: 'Personal Computers',
    tabName: 'PC',
    subCategories: [
      {
        id: '11',
        parentId: '1',
        name: 'Monitor',
        tabName: 'Monitor',
      },
      {
        id: '12',
        parentId: '1',
        name: 'Graphic Card',
        tabName: 'Graphics',
      },
      {
        id: '13',
        parentId: '1',
        name: 'Motherboard',
        tabName: 'Motherboard',
      },
      {
        id: '14',
        parentId: '1',
        name: 'Computer Memory',
        tabName: 'RAM',
      },
      {
        id: '15',
        parentId: '1',
        name: 'Storage',
        tabName: 'Storage',
      },
      {
        id: '16',
        parentId: '1',
        name: 'Power Supply',
        tabName: 'Power',
      },
      {
        id: '17',
        parentId: '1',
        name: 'Central Processing Unit',
        tabName: 'CPU',
      },
      {
        id: '18',
        parentId: '1',
        name: 'Case',
        tabName: 'Case',
      },
    ],
  },
  {
    id: '2',
    name: 'Laptops',
    tabName: 'Laptops',
    subCategories: [
      {
        id: '21',
        parentId: '2',
        name: 'Gaming',
        tabName: 'Gaming',
      },
      {
        id: '22',
        parentId: '2',
        name: 'Office Work',
        tabName: 'Office',
      },
      {
        id: '23',
        parentId: '2',
        name: 'Ultrabook',
        tabName: 'Ultrabook',
      },
      {
        id: '24',
        parentId: '2',
        name: 'Netbook',
        tabName: 'Netbook',
      },
    ],
  },
  {
    id: '3',
    name: 'Smartphones & Tablets',
    tabName: 'Phones & Tablets',
    subCategories: [
      {
        id: '31',
        parentId: '3',
        name: 'Apple',
        tabName: 'Apple',
      },
      {
        id: '32',
        parentId: '3',
        name: 'Samsung',
        tabName: 'Samsung',
      },
      {
        id: '33',
        parentId: '3',
        name: 'Xiaomi',
        tabName: 'Xiaomi',
      },
      {
        id: '34',
        parentId: '3',
        name: 'Huawei',
        tabName: 'Huawei',
      },
      {
        id: '35',
        parentId: '3',
        name: 'OnePlus',
        tabName: 'OnePlus',
      },
      {
        id: '36',
        parentId: '3',
        name: 'Realmi',
        tabName: 'Realmi',
      },
    ],
  },
  {
    id: '4',
    name: 'Accessories',
    tabName: 'Accessories',
    subCategories: [],
  },
  {
    id: '5',
    name: 'Gaming',
    tabName: 'Gaming',
    subCategories: [],
  },
];

const animation = {
  visible: { x: 0 },
  hidden: { x: -300 },
};

interface Props {}

const LeftSidebar: React.FC<Props> = (props) => {
  const controls = useAnimation();
  const [lSidebar] = useRecoilState(leftSidebarAtom);

  useEffect(() => {
    (async function () {
      try {
        const sideBarState = lSidebar.isOpen ? 'visible' : 'hidden';
        await controls.start(sideBarState);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [lSidebar]);

  const navList = useMemo(() => {
    let result: any = [];
    for (let i = 0; i < fakeCategories.length; i++) {
      result.push({
        id: fakeCategories[i].id,
        parentId: null,
        name: fakeCategories[i].name,
        tabName: fakeCategories[i].tabName,
      });
      if (fakeCategories[i].subCategories) {
        for (let j = 0; j < fakeCategories[i].subCategories.length; j++) {
          result.push(fakeCategories[i].subCategories[j]);
        }
      }
    }
    return result;
  }, []);

  return (
    <Container initial="hidden" animate={controls} variants={animation} transition={{ type: 'timing' }}>
      <Flex flex="column">
        <h3>Navigation</h3>
        <HLine space={10} />
        <div className="scrollable">
          <List>
            <ul>
              {navList.map((item: any, i: number) => {
                return (
                  <Li key={i} header={item.parentId === null}>
                    <Link href={`/${item.id}`} as={`/${item.id}`}>
                      <a>{item.name}</a>
                    </Link>
                  </Li>
                );
              })}
            </ul>
          </List>
          <HLine space={10} />
          <List role="navigation" aria-label="Secondary Navigation">
            <ul className="site-nav">
              <li>
                <Link href="/" as="/">
                  <a>Who We Are</a>
                </Link>
              </li>
              <li>
                <Link href="/" as="/">
                  <a>How We Work</a>
                </Link>
              </li>
              <li>
                <Link href="/" as="/">
                  <a>Get In Touch</a>
                </Link>
              </li>
              <li>
                <Link href="/" as="/">
                  <a>FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/" as="/">
                  <a>Terms & Conditions</a>
                </Link>
              </li>
            </ul>
          </List>
        </div>
      </Flex>
      <Flex flex="column" col="0">
        <h4>Whe are accepting</h4>
        <HLine space={10} />
        <Flex cls="gap">
          <Image src={visa} alt="Visa payment" width={38} height={24} />
          <Image src={master} alt="Master Card payment" width={38} height={22} />
          <Image src={stripe} alt="Stripe payment" width={38} height={18} />
          <Image src={paypal} alt="Paypal payment" width={21} height={21} />
        </Flex>
      </Flex>
    </Container>
  );
};

export default LeftSidebar;

const Container = styled(motion.div)`
  width: 256px;
  height: calc(100vh - 40px);
  background-color: ${({ theme }) => theme.colors.section};
  padding: 15px;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }
`;

const List = styled.nav`
  ul.site-nav {
    li {
      font-weight: 600;

      a {
        display: block;
        padding: 5px 0;
        transition: all 0.3s ease;

        &:hover {
          color: ${({ theme }) => theme.colors.main};
        }
      }
    }
  }
`;

const Li = styled.li<{ header: boolean }>`
  position: relative;
  font-weight: ${({ header }) => (header ? 600 : 500)};
  transform: ${({ header }) => `translateX(${header ? 0 : '20px'})`};
  a {
    display: block;
    padding: ${({ header }) => (header ? '15px 0 0 0' : '5px 0')};
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.main};
    }
  }

  ${({ header }) => {
    return !header
      ? `
      &::before {
        content: '';
        position: absolute;
        top: 10px;
        left: -17px;
        width: 9px;
        height: 9px;
        background-color: limegreen;
        opacity: 0.45;
        border-radius: 50%;
      }
      &::after {
        content: '';
        position: absolute;
        top: 12px;
        left: -15px;
        width: 5px;
        height: 5px;
        background-color: limegreen;
        border-radius: 50%;
      }
    `
      : null;
  }}
`;
