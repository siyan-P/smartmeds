import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './ImageSlider.module.css';

const images = [
  {
    url: 'http://localhost:3000/src/assets/images/banner.jpg',
    alt: 'Animal 1',
  },
  {
    url: 'https://placeimg.com/640/480/arch',
    alt: 'Architecture 1',
  },
  {
    url: 'https://placeimg.com/640/480/nature',
    alt: 'Nature 1',
  },
  
];
var settings = {
  dots: true,
  infinite: true,
  speed: 1300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight:true,
  centerMode: true,
  centerPadding:'400px',
  
  
  
};
const ImageSlider = () => {
  return (
    <div className={classes.imag}>
    <Slider  {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default ImageSlider;
