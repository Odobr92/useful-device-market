import React from 'react';
import { Carousel } from 'react-bootstrap';

const NewsCarousel = () => {
    return (
      <Carousel fade className='mt-2' style={{height: '300px'}}>
      <Carousel.Item>
        <div style={{height: '300px'}}>
        <img
          className="d-block w-100"
          src="https://b1.m24.ru/c/1178803.jpg"
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{height: '300px'}}>
        <img
          className="d-block w-100"
          src="https://b1.m24.ru/c/1178804.jpg"
          alt="Third slide"
        />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}

export default NewsCarousel;