import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
//types
import { ImageType } from '../../../types/global/common.type';

interface Props {
  cover: ImageType;
  images: ImageType[];
}

const ImagesSlider: React.FC<Props> = ({ cover, images }) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <SliderNavItem>
          <Image src={[cover, ...images][i].src} alt={[cover, ...images][i].alt} width={70} height={70} />
        </SliderNavItem>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <ImagesContainer>
      <Slider {...settings}>
        {[cover, ...images].map((img, i) => (
          <div key={i}>
            <Image src={img.src} alt={img.alt} width={500} height={500} />
          </div>
        ))}
      </Slider>
    </ImagesContainer>
  );
};

export default ImagesSlider;

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <ArrowRight onClick={onClick}>
      <FaChevronRight size={18} color="silver" />
    </ArrowRight>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <ArrowLeft onClick={onClick}>
      <FaChevronLeft size={18} color="silver" />
    </ArrowLeft>
  );
}

const ImagesContainer = styled.div`
  width: 440px;
  height: 440px;

  .slick-dots {
    bottom: -90px;
    text-align: left;

    li {
      width: 84px;
      height: 84px;
      border: 1px solid #eaeaea;
      margin: 0;

      &:not(:last-child) {
        margin: 0 5px 0 0;
      }

      a {
        width: 82px;
        height: 82px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &.slick-active {
        border: 1px solid orange;
      }
    }
  }

  .slick-list {
    border: 1px solid #eaeaea;
  }

  .slick-slide {
    img {
      object-fit: contain;
    }
  }
`;

const SliderNavItem = styled.a`
  background-color: white;

  img {
    object-fit: contain;
  }
`;

const ArrowLeft = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 1;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.6;
  }

  svg {
    transform: translateX(-1px);
  }
`;

const ArrowRight = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 1;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.6;
  }

  svg {
    transform: translateX(1px);
  }
`;
