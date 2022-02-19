import React from 'react';
import styled from 'styled-components';
import Flex from '../../layout/Flex';
import ProductCard from '../../common/cards/ProductCard';

const data = [
  {
    id: '1',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632229948/products/iphone-12-pro-blue-hero-3_dgvpua.png',
      alt: '',
      videoId: '',
      link: '',
    },
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
  },
  {
    id: '2',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632229949/products/msi_notebook_gs66_10ug_9s7-16v312-253__ydhjpz.jpg',
      alt: '',
      videoId: '',
      link: '',
    },
    color: '#f4f4f4',
    name: 'MSI GE76 Raider Dragon Edition Tiamat',
    price: 1299,
    sale: true,
    saleCount: 15,
    new: true,
    used: true,
    best: false,
    defective: false,
    brand: 'MSI',
    category: 'Gaming',
    stars: [0, 0, 0, 0],
  },
  {
    id: '1',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632229948/products/iphone-12-pro-blue-hero-3_dgvpua.png',
      alt: '',
      videoId: '',
      link: '',
    },
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
  },
  {
    id: '2',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632229949/products/msi_notebook_gs66_10ug_9s7-16v312-253__ydhjpz.jpg',
      alt: '',
      videoId: '',
      link: '',
    },
    color: '#f4f4f4',
    name: 'MSI GE76 Raider Dragon Edition Tiamat',
    price: 1299,
    sale: true,
    saleCount: 15,
    new: true,
    used: true,
    best: false,
    defective: false,
    brand: 'MSI',
    category: 'Gaming',
    stars: [0, 0, 0, 0],
  },
  {
    id: '1',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632229948/products/iphone-12-pro-blue-hero-3_dgvpua.png',
      alt: '',
      videoId: '',
      link: '',
    },
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
  },
  {
    id: '2',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632229949/products/msi_notebook_gs66_10ug_9s7-16v312-253__ydhjpz.jpg',
      alt: '',
      videoId: '',
      link: '',
    },
    color: '#f4f4f4',
    name: 'MSI GE76 Raider Dragon Edition Tiamat',
    price: 1299,
    sale: true,
    saleCount: 15,
    new: true,
    used: true,
    best: false,
    defective: false,
    brand: 'MSI',
    category: 'Gaming',
    stars: [0, 0, 0, 0],
  },
  {
    id: '1',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632229948/products/iphone-12-pro-blue-hero-3_dgvpua.png',
      alt: '',
      videoId: '',
      link: '',
    },
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
  },
  {
    id: '2',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632229949/products/msi_notebook_gs66_10ug_9s7-16v312-253__ydhjpz.jpg',
      alt: '',
      videoId: '',
      link: '',
    },
    color: '#f4f4f4',
    name: 'MSI GE76 Raider Dragon Edition Tiamat',
    price: 1299,
    sale: true,
    saleCount: 15,
    new: true,
    used: true,
    best: false,
    defective: false,
    brand: 'MSI',
    category: 'Gaming',
    stars: [0, 0, 0, 0],
  },
  {
    id: '1',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632229948/products/iphone-12-pro-blue-hero-3_dgvpua.png',
      alt: '',
      videoId: '',
      link: '',
    },
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
  },
  {
    id: '2',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632229949/products/msi_notebook_gs66_10ug_9s7-16v312-253__ydhjpz.jpg',
      alt: '',
      videoId: '',
      link: '',
    },
    color: '#f4f4f4',
    name: 'MSI GE76 Raider Dragon Edition Tiamat',
    price: 1299,
    sale: true,
    saleCount: 15,
    new: true,
    used: true,
    best: false,
    defective: false,
    brand: 'MSI',
    category: 'Gaming',
    stars: [0, 0, 0, 0],
  },
  {
    id: '1',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632229948/products/iphone-12-pro-blue-hero-3_dgvpua.png',
      alt: '',
      videoId: '',
      link: '',
    },
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
  },
  {
    id: '2',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632229949/products/msi_notebook_gs66_10ug_9s7-16v312-253__ydhjpz.jpg',
      alt: '',
      videoId: '',
      link: '',
    },
    color: '#f4f4f4',
    name: 'MSI GE76 Raider Dragon Edition Tiamat',
    price: 1299,
    sale: true,
    saleCount: 15,
    new: true,
    used: true,
    best: false,
    defective: false,
    brand: 'MSI',
    category: 'Gaming',
    stars: [0, 0, 0, 0],
  },
  {
    id: '1',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632229948/products/iphone-12-pro-blue-hero-3_dgvpua.png',
      alt: '',
      videoId: '',
      link: '',
    },
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
  },
  {
    id: '2',
    cover: {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632229949/products/msi_notebook_gs66_10ug_9s7-16v312-253__ydhjpz.jpg',
      alt: '',
      videoId: '',
      link: '',
    },
    color: '#f4f4f4',
    name: 'MSI GE76 Raider Dragon Edition Tiamat',
    price: 1299,
    sale: true,
    saleCount: 15,
    new: true,
    used: true,
    best: false,
    defective: false,
    brand: 'MSI',
    category: 'Gaming',
    stars: [0, 0, 0, 0],
  },
];

interface Props {}

const PopularProducts: React.FC<Props> = (props) => {
  return (
    <Container>
      <h3>Popular Products</h3>
      <div className="grid-view">
        {data.slice(0, 10).map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default PopularProducts;

const Container = styled.section`
  padding: 10px;

  h3 {
    text-transform: uppercase;
    margin: 10px 0 20px 0;
  }

  .grid-view {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(253.5px, 1fr));
    grid-gap: 10px;
  }
`;
