import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ParamsBar from '../components/ParamsBar';
import '../styles/DevicePage.css';
import star from '../assets/star.png';

const DevicePage = () => {
  const { id } = useParams();

  const TestDevice = {
    id: 1,
    name: 'Xiaomi Mi Electric Scooter 1S',
    price: 20000,
    img: 'https://giffun.ru/wp-content/uploads/2019/04/0-97.jpg',
    rating: 0,
  };

  const TestPrm = [
    { name: 'Габариты', desctiption: '90x60x90' },
    { name: 'Вес', desctiption: '45кг' },
    { name: 'Габариты', desctiption: '90x60x90' },
    { name: 'Вес', desctiption: '45кг' },
    { name: 'Габариты', desctiption: '90x60x90' },
    { name: 'Вес', desctiption: '45кг' },
    { name: 'Габариты', desctiption: '90x60x90' },
    { name: 'Вес', desctiption: '45кг' },
    { name: 'Габариты', desctiption: '90x60x90' },
    { name: 'Вес', desctiption: '45кг' },
    { name: 'Габариты', desctiption: '90x60x90' },
    { name: 'Вес', desctiption: '45кг' },
    { name: 'Габариты', desctiption: '90x60x90' },
    { name: 'Вес', desctiption: '45кг' },
    { name: 'Габариты', desctiption: '90x60x90' },
    { name: 'Вес', desctiption: '45кг' },
  ];

  return (
    <Container>
      <Row className="devicePageConteiner_row1">
        <Col ld={4}>
          <Image width={470} height={'auto'} className='devicePageConteiner_row1_img' rounded={true} src={TestDevice.img} />
        </Col>
        <Col ld={8}>
          <div>
            <h1>{TestDevice.name}</h1>
            <div className="devicePageConteiner_row1_rating">
              <div className='m-1'>Рейтинг:</div>
              <div>{TestDevice.rating}</div>
              <Image               
                width={18}
                height={18}
                src={star}
              ></Image>
            </div>
            <Card className='devicePageConteiner_row1_price'>
              <h2>{TestDevice.price} {String.fromCodePoint(0x20BD)}</h2>
              <Button>В корзину</Button>
            </Card>           
          </div>
        </Col>
        <Row className="devicePageConteiner_row2"></Row>
        <Col>
          <div className="devicePageConteiner_row2_params">
            <h4>Характеристики</h4>
            <ParamsBar deviceInfos={TestPrm} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DevicePage;
