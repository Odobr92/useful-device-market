import React from 'react';
import { Button, Card, Col, Row, Image } from 'react-bootstrap';
import '../styles/BasketDeviceItem.css';
import RadiusButton from './UI/button/RadiusButton';

const BasketDeviceItem = ({ basketDeviceItem }) => {
  return (
    <Card className="basketDeviceItem">
      <Row className="basketDeviceItem_data">
        <Col ml={4} className="basketDeviceItem_data_col1">
          <Image
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
            <RadiusButton className='me-1'>-</RadiusButton>
            <Card className='basketDeviceItem_data_amount_ind' border={'primary'}>{basketDeviceItem.amount}</Card>
            <RadiusButton className='ms-1'>+</RadiusButton>
          </div>
        </Col>
        <Col ml={2} className="basketDeviceItem_data_price">
          <div className="d-flex flex-column">
            <h6>
              {basketDeviceItem.device.price} {String.fromCodePoint(0x20bd)}
            </h6>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default BasketDeviceItem;
