import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Button, Card, Col, Row, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Context } from '..';
import { fetchBasketDevice, setAmountBasketDevice } from '../http/basketAPI';
import '../styles/BasketDeviceItem.css';
import { DEVICE_ROUTE } from '../utils/consts';
import RadiusButton from './UI/button/RadiusButton';

const BasketDeviceItem = ({ basketDeviceItem, checkInfo}) => {

  const navigate = useNavigate()

  const [activeAmountMin, setActiveAmountMin] = useState(false);
  const [activeAmountMax, setActiveAmountMax] = useState(false);
  const [amount , setAmount] = useState(basketDeviceItem.amount);

  useMemo(()=>{
    checkInfo(basketDeviceItem.device.id, amount);
  },[amount])

  useMemo(()=>{
    amount <= 1 ? setActiveAmountMin(true) : setActiveAmountMin(false)
    amount >= 15 ? setActiveAmountMax(true) : setActiveAmountMax(false)
  },[amount])


  return (
    <Card className="basketDeviceItem">
      <Row className="basketDeviceItem_data">
        <Col ml={4} className="basketDeviceItem_data_col1">
          <Image
            onClick={() => navigate(`${DEVICE_ROUTE}/${basketDeviceItem.device.id}`)}
            className="basketDeviceItem_data_col1_image"
            rounded={true}
            src={process.env.REACT_APP_API_URL + basketDeviceItem.device.img}
          ></Image>
        </Col>
        <Col ml={4} className="basketDeviceItem_data_info">
          <div>
            <h6>{basketDeviceItem.device.name}</h6>
          </div>
        </Col>
        <Col ml={2} className="basketDeviceItem_data_amount">
          <div className="d-flex flex-row mt-3">
            <Button disabled={activeAmountMin} onClick={() => setAmount(amount - 1)} className='me-1'>-</Button>
            <Card className='basketDeviceItem_data_amount_ind' border={'primary'}>{amount}</Card>
            <Button disabled={activeAmountMax} onClick={() => setAmount(amount + 1)} className='ms-1'>+</Button>
          </div>
        </Col>
        <Col ml={2} className="basketDeviceItem_data_price">
        <Button>Убрать</Button>
          <div className="d-flex flex-column">
            <h6>
              {basketDeviceItem.device.price*amount} {String.fromCodePoint(0x20bd)}
            </h6>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default BasketDeviceItem;
