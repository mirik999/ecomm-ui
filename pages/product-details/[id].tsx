import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Image from 'next/image';
//components
import Layout from '../../components/layout/layout/Layout';
import Flex from '../../components/layout/Flex';
//css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImagesSlider from '../../components/modules/details-page/ImagesSlider';

const product = {
  id: '1',
  cover: {
    src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632229948/products/iphone-12-pro-blue-hero-3_dgvpua.png',
    alt: 'iphone',
    videoId: '',
    link: '',
  },
  images: [
    {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632229949/products/msi_notebook_gs66_10ug_9s7-16v312-253__ydhjpz.jpg',
      alt: 'gaming notebook',
      videoId: '',
      link: '',
    },
    {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1618935423/products/landscape-1496856209-tech-must-haves_zfwzcc.jpg',
      alt: '',
      videoId: '',
      link: '',
    },
    {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1629553927/products/Screenshot_20_pgr3un.png',
      alt: '',
      videoId: '',
      link: '',
    },
    {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1629551242/products/Screenshot_1627480964_hj2foi.png',
      alt: '',
      videoId: '',
      link: '',
    },
  ],
  color: '#f4f4f4',
  name: 'iPhone 12 PRO MAX 256 GB',
  price: 1099,
  sale: false,
  saleCount: 0,
  new: false,
  used: false,
  best: true,
  defective: true,
  brand: 'Apple',
  category: 'Phones',
  stars: [0, 0],
};

interface Props {}

const ProductDetails: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Container>
        <Flex>
          <ImagesSlider cover={product.cover} images={product.images} />
          <Flex>
            <span>information</span>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
};

export default ProductDetails;

const Container = styled.div`
  padding: 10px;
`;
