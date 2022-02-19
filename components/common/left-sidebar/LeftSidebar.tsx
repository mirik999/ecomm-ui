import React, { memo, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { motion, useAnimation } from 'framer-motion';
import { AiOutlineArrowLeft } from 'react-icons/ai';
//components
import { HLine } from '../../styled';
import Flex from '../../layout/Flex';
import Text from '../text/Text';
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
    translation: 'personal_computers',
    subCategories: [
      {
        id: '11',
        parentId: '1',
        name: 'Monitor',
        tabName: 'Monitor',
        translation: 'monitor',
      },
      {
        id: '12',
        parentId: '1',
        name: 'Graphic Card',
        tabName: 'Graphics',
        translation: 'graphics_card',
      },
      {
        id: '13',
        parentId: '1',
        name: 'Motherboard',
        tabName: 'Motherboard',
        translation: 'motherboard',
      },
      {
        id: '14',
        parentId: '1',
        name: 'Computer Memory',
        tabName: 'RAM',
        translation: 'ram',
      },
      {
        id: '15',
        parentId: '1',
        name: 'Storage',
        tabName: 'Storage',
        translation: 'storage',
      },
      {
        id: '16',
        parentId: '1',
        name: 'Power Supply',
        tabName: 'Power',
        translation: 'power_supply',
      },
      {
        id: '17',
        parentId: '1',
        name: 'Central Processing Unit',
        tabName: 'CPU',
        translation: 'cpu',
      },
      {
        id: '18',
        parentId: '1',
        name: 'Case',
        tabName: 'Case',
        translation: 'case',
      },
    ],
  },
  {
    id: '2',
    name: 'Laptops',
    tabName: 'Laptops',
    translation: 'laptops',
    subCategories: [
      {
        id: '21',
        parentId: '2',
        name: 'Gaming',
        tabName: 'Gaming',
        translation: 'gaming',
      },
      {
        id: '22',
        parentId: '2',
        name: 'Office Work',
        tabName: 'Office',
        translation: 'office_work',
      },
      {
        id: '23',
        parentId: '2',
        name: 'Ultrabook',
        tabName: 'Ultrabook',
        translation: 'ultrabook',
      },
      {
        id: '24',
        parentId: '2',
        name: 'Netbook',
        tabName: 'Netbook',
        translation: 'netbook',
      },
    ],
  },
  {
    id: '3',
    name: 'Smartphones & Tablets',
    tabName: 'Phones & Tablets',
    translation: 'smartphones_tablets',
    subCategories: [
      {
        id: '31',
        parentId: '3',
        name: 'Apple',
        tabName: 'Apple',
        translation: 'apple',
      },
      {
        id: '32',
        parentId: '3',
        name: 'Samsung',
        tabName: 'Samsung',
        translation: 'samsung',
      },
      {
        id: '33',
        parentId: '3',
        name: 'Xiaomi',
        tabName: 'Xiaomi',
        translation: 'xiaomi',
      },
      {
        id: '34',
        parentId: '3',
        name: 'Huawei',
        tabName: 'Huawei',
        translation: 'huawei',
      },
      {
        id: '35',
        parentId: '3',
        name: 'OnePlus',
        tabName: 'OnePlus',
        translation: 'oneplus',
      },
      {
        id: '36',
        parentId: '3',
        name: 'Realmi',
        tabName: 'Realmi',
        translation: 'realmi',
      },
    ],
  },
  {
    id: '4',
    name: 'Accessories',
    tabName: 'Accessories',
    translation: 'accessories',
    subCategories: [],
  },
  {
    id: '5',
    name: 'Gaming',
    tabName: 'Gaming',
    translation: 'gaming',
    subCategories: [],
  },
];

const animation = {
  visible: { x: 0 },
  hidden: { x: -300 },
};

interface Props {}

// eslint-disable-next-line react/display-name
const LeftSidebar: React.FC<Props> = memo((props) => {
  const controls = useAnimation();
  const [lSidebar, setLeftSidebar] = useRecoilState(leftSidebarAtom);

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
        translation: fakeCategories[i]?.translation || '',
      });
      if (fakeCategories[i].subCategories) {
        for (let j = 0; j < fakeCategories[i].subCategories.length; j++) {
          result.push(fakeCategories[i].subCategories[j]);
        }
      }
    }
    return result;
  }, []);

  async function _onCloseSidebar() {
    setLeftSidebar({
      isOpen: false,
    });
    await controls.start('hidden');
  }

  return (
    <Container
      initial={lSidebar.isOpen ? "visible" : "hidden"}
      animate={controls}
      variants={animation}
      transition={{ type: 'timing' }}
    >
      <Flex cls="left-sidebar-header" justify="between">
        <Text tag="h3" keyword="navigation" />
        <a className="arrow-icon" role="button" onClick={_onCloseSidebar}>
          <AiOutlineArrowLeft size={18} />
        </a>
      </Flex>
      <Flex cls="nav-list" flex="column">
        <HLine space={10} />
        <div className="scrollable">
          <List>
            <ul>
              {navList.map((item: any, i: number) => {
                return (
                  <Li key={i} header={item.parentId === null}>
                    <Link href={`/${item.id}`} as={`/${item.id}`}>
                      <a>
                        {item.translation ? <Text tag="span" keyword={item.translation} /> : <span>{item.name}</span>}
                      </a>
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
                  <a>
                    <Text tag="span" keyword="who_we_are" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/" as="/">
                  <a>
                    <Text tag="span" keyword="how_we_work" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/" as="/">
                  <a>
                    <Text tag="span" keyword="get_in_touch" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/" as="/">
                  <a>
                    <Text tag="span" keyword="faq" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/" as="/">
                  <a>
                    <Text tag="span" keyword="terms_conditions" />
                  </a>
                </Link>
              </li>
            </ul>
          </List>
        </div>
      </Flex>
      <Flex flex="column" col="0">
        <Text className="payments" tag="span" keyword="payment_methods" />
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
});

export default LeftSidebar;

const Container = styled(motion.div)`
  width: 256px;
  height: calc(100vh - 40px);
  background-color: ${({ theme }) => theme.colors.section};
  padding: 15px;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 3;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .payments {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }

  .arrow-icon {
    cursor: pointer;
    transform: translateY(3px);
  }

  .left-sidebar-header {
    max-height: 23px;
  }

  .nav-list {
    span {
      text-transform: capitalize;
    }
  }

  @media (max-width: 580px) {
    top: 10px;
    left: 10px;
    height: calc(100vh - 20px);
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
