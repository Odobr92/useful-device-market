import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import BasketDeviceItem from '../components/BasketDeviceItem';
import '../styles/Basket.css';

const Basket = () => {

    const test = [
      {
          "id": 4,
          "createdAt": "2022-09-01T18:06:34.059Z",
          "updatedAt": "2022-09-01T18:06:34.059Z",
          "basketId": 1,
          "deviceId": 1,
          "amount": 1,
          "device": {
              "id": 1,
              "name": "Xiaomi S1",
              "price": 20000,
              "img": "dd3828fe-0093-4335-837c-18ccbc804a68.jpg",
              "rating": 0,
              "createdAt": "2022-09-01T17:32:55.077Z",
              "updatedAt": "2022-09-01T17:32:55.077Z",
              "typeId": 1,
              "brandId": 1
          }
      },
      {
          "id": 3,
          "createdAt": "2022-09-01T18:04:25.382Z",
          "updatedAt": "2022-09-01T18:04:25.382Z",
          "basketId": 1,
          "deviceId": 1,
          "amount": 1,
          "device": {
              "id": 1,
              "name": "Xiaomi S1",
              "price": 20000,
              "img": "dd3828fe-0093-4335-837c-18ccbc804a68.jpg",
              "rating": 0,
              "createdAt": "2022-09-01T17:32:55.077Z",
              "updatedAt": "2022-09-01T17:32:55.077Z",
              "typeId": 1,
              "brandId": 1
          }
      },
      {
          "id": 2,
          "createdAt": "2022-09-01T17:36:57.165Z",
          "updatedAt": "2022-09-01T17:58:03.556Z",
          "basketId": 1,
          "deviceId": 1,
          "amount": 1,
          "device": {
              "id": 1,
              "name": "Xiaomi S1",
              "price": 20000,
              "img": "dd3828fe-0093-4335-837c-18ccbc804a68.jpg",
              "rating": 0,
              "createdAt": "2022-09-01T17:32:55.077Z",
              "updatedAt": "2022-09-01T17:32:55.077Z",
              "typeId": 1,
              "brandId": 1
          }
      }
  ]

    return (
    <Container> 
      <div className='basketSpace'>
      <h2>Корзина</h2>
      {
        test.map((basketDeviceItem) => <BasketDeviceItem basketDeviceItem={basketDeviceItem}></BasketDeviceItem>)
      }
      <hr />
      <div className='d-flex align-items-end justify-content-between'>
      <div>
            Всего товаров: 5
        </div>
        <div>
            Общая сумма: 45000р
        </div>
      </div>
      <div className='basketSpace_next'>
      <Button >
        Перейти к оформлению
      </Button>
      </div>
      
      </div>
    </Container>
    );
}

export default Basket;