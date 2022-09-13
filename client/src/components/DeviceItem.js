import React, { useEffect, useState } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import '../styles/DeviceItem.css';
import star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  useEffect(() =>{
    setRatingCalc(Math.floor(device.rating * 100) / 100)
  },[])

  const [ratingCalc, setRatingCalc] = useState(0)

  return (
    <Col xs={6} md={4} lg={3}>
      <Card
        className="card_device_list"
        onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}
      >
        <div className="card_device_list_space">
          <Image
            rounded={true}
            className="card_device_list_space_img"
            src={process.env.REACT_APP_API_URL + device.img}
          ></Image>
        </div>
        <div className="card_device_list_info">
          <div>{device.brand.name}</div>
          <div className="card_device_list_info_rating">
            <div>{ratingCalc}</div>
            <Image
              className="card_device_list_info_rating_star"
              width={13}
              height={13}
              src={star}
            ></Image>
          </div>
        </div>
        <div className="deviceItem_nameDevice">{device.name}</div>
        <Card className="mt-1">
          <h6 className="d-flex justify-content-center align-items-center mt-2">
            {device.price} {String.fromCodePoint(0x20bd)}
          </h6>
        </Card>
      </Card>
    </Col>
  );
};

export default DeviceItem;
