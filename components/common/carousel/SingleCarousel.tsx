import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { prominent } from 'color.js';
import Image from 'next/image';
//css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//components
import Flex from '../../layout/Flex';
//types
import { ISlider } from '../../../types/slider.type';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
};

interface Props {
  data: ISlider;
}

const SingleCarousel: React.FC<Props> = ({ data }) => {
  // const [colors, setColors] = useState<string[]>([]);
  //
  // useEffect(() => {
  //   (async function () {
  //     data.images.map(async (img) => {
  //       const color = (await prominent(img.src, { format: 'hex' })) as string[];
  //       setColors((prev) => [...prev, color[0]]);
  //     });
  //   })();
  // }, []);

  return (
    <Container vertical={data.vertical}>
      <Slider {...settings} vertical={data.vertical} fade={data.fade}>
        {data.images.map((slider, i) => {
          return <SliderImage key={i} src={slider.src} alt={slider.alt} width={657} height={324} />;
        })}
      </Slider>
    </Container>
  );
};

export default SingleCarousel;

const Container = styled.div<{ vertical: boolean }>`
  width: calc(50% - 5px);
  height: 30vw;
  min-height: 184px;
  max-height: 330px;
  overflow: hidden;

  .slick-slide {
    height: auto !important;
    border: 1px solid white;
  }

  & > div {
    height: 100%;

    .slick-dots {
      display: flex !important;
      justify-content: center;
      align-items: center;
      gap: 5px;
      padding: 10px 0;

      ${({ vertical }) => `
        top: ${vertical ? 0 : 'auto'};
        bottom: ${vertical ? 'auto' : 0};
        right: ${vertical ? 0 : 'auto'};
        left: ${vertical ? 'auto' : 0};
        width: ${vertical ? '48px' : '100%'};
        height: ${vertical ? '100%' : '48px'};
        flex-direction: ${vertical ? 'column' : 'row'};
      `}

      li.slick-active {
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 50%;
        width: 14px;
        height: 14px;
        border: ${({ theme }) => `1px solid ${theme.colors.border}`};
        button {
          width: 0 !important;
          height: 0 !important;
          padding: 0 !important;

          &::before {
            content: '';
          }
        }
      }

      li:not(.slick-active) {
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 50%;
        width: 10px;
        height: 10px;
        opacity: 0.5;
        border: ${({ theme }) => `1px solid ${theme.colors.border}`};
        button {
          width: 0 !important;
          height: 0 !important;
          padding: 0 !important;

          &::before {
            content: '';
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SliderImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  height: 30vw;
  min-height: 184px;
  max-height: 330px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
