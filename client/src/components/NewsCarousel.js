import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const NewsCarousel = () => {
    return (
      <Carousel fade className='mt-3' style={{maxWidth: '1200px'}}>
      <Carousel.Item>
        <div>
        <Image
          className="d-block w-100"
          rounded={true}
          src={process.env.REACT_APP_API_URL + 'Watch_Xiaomi.jpg'}
          alt="Third slide"
        />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div>
        <Image
          className="d-block w-100"
          rounded={true}
          src={process.env.REACT_APP_API_URL + 'Scooter_1S.jpg'}
          alt="Third slide"
        />
        </div>
      </Carousel.Item>
    </Carousel>
    );
}

export default NewsCarousel;