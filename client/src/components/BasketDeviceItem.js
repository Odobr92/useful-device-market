import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Button, Card, Col, Row, Image, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Context } from '..';
import { delBasketDevice, fetchBasketDevice, setAmountBasketDevice } from '../http/basketAPI';
import '../styles/BasketDeviceItem.css';
import { DEVICE_ROUTE } from '../utils/consts';
import DeleteButton from './UI/button/DeleteButton';
import BlueCounter from './UI/counters/BlueCounter';

const BasketDeviceItem = ({ basketDeviceItem, checkInfo }) => {
  const navigate = useNavigate();

  const [amount, setAmount] = useState(basketDeviceItem.amount);

  useMemo(() => {
    checkInfo(basketDeviceItem.device.id, amount);
  }, [amount]);


  const removeItem = async () => {
    await delBasketDevice(basketDeviceItem.device.id);
    checkInfo(basketDeviceItem.device.id, amount);
 }

  return (
    <Container className="basketDeviceItem" fluid="md">
      <Card className="basketDeviceItem_cadr">
        <Row className="align-items-center justify-content-start">
          <Col className="basketDeviceItem_cadr_space">
            <Image
              onClick={() =>
                navigate(`${DEVICE_ROUTE}/${basketDeviceItem.device.id}`)
              }
              className="basketDeviceItem_cadr_img"
              rounded={true}
              src={process.env.REACT_APP_API_URL + basketDeviceItem.device.img}
            ></Image>
          </Col>
          <Col xs={10} md={10} className="d-flex flex-column">
          <Row>
            <Col>
              <div>
                <h6>{basketDeviceItem.device.name}</h6>
              </div>
            </Col>
          </Row>
          <Row className='d-flex align-items-center'>
            <Col xs={6} md={7}className='align-items-stretch' >
              <BlueCounter cn={'justify-content-end'} amount={amount} setAmount={setAmount} />
            </Col>
            <Col xs={4} md={4}>
              <div className='d-flex justify-content-center'>
                <h6>
                  {basketDeviceItem.device.price * amount}{' '}
                  {String.fromCodePoint(0x20bd)}
                </h6>
              </div>
            </Col>
            <Col xs={2} md={1}>
              <DeleteButton className='mb-3'  onClick={removeItem}/>
            </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default BasketDeviceItem;
