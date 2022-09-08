import React from 'react';
import { Carousel } from 'react-bootstrap';

const NewsCarousel = () => {
    return (
      <Carousel fade className='mt-3' style={{height: '300px'}}>
      <Carousel.Item>
        <div style={{height: '300px'}}>
        <img
          className="d-block w-100"
          src="https://b1.m24.ru/c/1178803.jpg"
          alt="Second slide"
        />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{height: '300px'}}>
        <img
          className="d-block w-100"
          src="https://b1.m24.ru/c/1178804.jpg"
          alt="Third slide"
        />
        </div>
      </Carousel.Item>
    </Carousel>
    );
}

export default NewsCarousel;