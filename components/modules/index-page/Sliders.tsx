import React from 'react';
import styled from 'styled-components';
import SingleCarousel from '../../common/carousel/SingleCarousel';
import Flex from '../../layout/Flex';

interface Props {}

const data1 = {
  id: '1',
  name: 'Alo',
  fade: true,
  vertical: false,
  images: [
    {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1618672350/sliders/landscape-1496856209-tech-must-haves_ffybfw.jpg',
      alt: 'alo 2',
      videoId: '',
      link: '',
    },
    {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1618672352/sliders/landscape-1499968892-back-to-school-tech_ice9p1.jpg',
      alt: 'alo 22',
      videoId: '',
      link: '',
    },
    {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632223819/sliders/how-to-set-and-make-dynamic-mac-wallpapers_qnr1qw.jpg',
      alt: 'alo 23',
      videoId: '',
      link: '',
    },
    {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632223819/sliders/apple_product-availability-spring21_iphone12-purple_geo_04292021_big_carousel.jpg.large_ctlz6b.jpg',
      alt: 'alo 24',
      videoId: '',
      link: '',
    },
  ],
};

const data2 = {
  id: '2',
  name: 'Alo2',
  fade: false,
  vertical: true,
  images: [
    {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1618672350/sliders/landscape-1496856209-tech-must-haves_ffybfw.jpg',
      alt: 'alo 2',
      videoId: '',
      link: '',
    },
    {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1618672352/sliders/landscape-1499968892-back-to-school-tech_ice9p1.jpg',
      alt: 'alo 22',
      videoId: '',
      link: '',
    },
    {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632223819/sliders/how-to-set-and-make-dynamic-mac-wallpapers_qnr1qw.jpg',
      alt: 'alo 23',
      videoId: '',
      link: '',
    },
    {
      src: 'https://res.cloudinary.com/electroshop-cmrs-project/image/upload/v1632223819/sliders/apple_product-availability-spring21_iphone12-purple_geo_04292021_big_carousel.jpg.large_ctlz6b.jpg',
      alt: 'alo 24',
      videoId: '',
      link: '',
    },
  ],
};

const Sliders: React.FC<Props> = (props) => {
  return (
    <Container className="tiny-scroll">
      <Flex cls="gap">
        <SingleCarousel data={data1} />
        <SingleCarousel data={data2} />
      </Flex>
    </Container>
  );
};

export default Sliders;

const Container = styled.div``;
