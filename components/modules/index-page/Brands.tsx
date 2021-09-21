import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';

const data = [
  {
    id: '1',
    name: 'Brand Name',
    imageUrl: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632224049/brands/MSI-Logo_g3uk4t.png',
    category: {
      id: '11',
    },
  },
  {
    id: '2',
    name: 'Brand Name',
    imageUrl:
      'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632224048/brands/sony-logo-PNG-1_fysoyn.png',
    category: {
      id: '11',
    },
  },
  {
    id: '3',
    name: 'Brand Name',
    imageUrl:
      'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632224048/brands/Nvidia-logo_hxovoa.jpg',
    category: {
      id: '11',
    },
  },
  {
    id: '4',
    name: 'Brand Name',
    imageUrl:
      'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632224048/brands/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_avyriy.png',
    category: {
      id: '11',
    },
  },
  {
    id: '5',
    name: 'Brand Name',
    imageUrl:
      'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632224048/brands/Xiaomi-Logo-2014_yqyz6h.png',
    category: {
      id: '11',
    },
  },
  {
    id: '6',
    name: 'Brand Name',
    imageUrl:
      'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632224048/brands/Loog-BenQ_qvebgw.jpg',
    category: {
      id: '11',
    },
  },
  {
    id: '7',
    name: 'Brand Name',
    imageUrl:
      'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632224047/brands/Logitech-Symbol_uqvqhc.png',
    category: {
      id: '11',
    },
  },
  {
    id: '8',
    name: 'Brand Name',
    imageUrl: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632224047/brands/apple_qj00kz.png',
    category: {
      id: '11',
    },
  },
  {
    id: '9',
    name: 'Brand Name',
    imageUrl:
      'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632224047/brands/Dell-Logo-1989-2016_wwy0vv.png',
    category: {
      id: '11',
    },
  },
  {
    id: '10',
    name: 'Brand Name',
    imageUrl: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632224046/brands/AOC-logo_j1g2si.png',
    category: {
      id: '11',
    },
  },
  {
    id: '11',
    name: 'Brand Name',
    imageUrl:
      'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632224046/brands/1611033291-nzxt-logo_pc5jtf.png',
    category: {
      id: '11',
    },
  },
  {
    id: '12',
    name: 'Brand Name',
    imageUrl:
      'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632224046/brands/1280px-Samsung_Logo.svg_f38vhy.png',
    category: {
      id: '11',
    },
  },
];

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 12,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1320,
      settings: {
        slidesToShow: 11,
      },
    },
    {
      breakpoint: 1215,
      settings: {
        slidesToShow: 10,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 9,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

interface Props {}

const Brands: React.FC<Props> = (props) => {
  return (
    <Container>
      <Slider {...settings}>
        {data.map((brand, i) => (
          <div key={i} className="brand-wrap">
            <Link href="/" as="/">
              <a>
                <Image src={brand.imageUrl} alt={brand.name} width={102} height={52} />
              </a>
            </Link>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Brands;

const Container = styled.div`
  padding: 10px;
  overflow: hidden;

  .brand-wrap {
    border: ${({ theme }) => `1px solid ${theme.colors.lightBorder}`};
    max-width: calc(100% - 5px);
    max-height: 100%;
    transition: all 0.3s ease;
    filter: grayscale(50%);

    &:hover {
      filter: grayscale(0%);
    }

    a {
      display: flex;
      align-items: center;
      padding: 5px 10px;

      img {
        object-fit: contain;
      }
    }
  }
`;
