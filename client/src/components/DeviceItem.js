import React, { useEffect, useState } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';
import styles from './styles/DeviceItem.module.scss'

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  useEffect(() =>{
    setRatingCalc(Math.floor(device.rating * 100) / 100)
  },[])

  const [ratingCalc, setRatingCalc] = useState(0)

  return (
    <Col xs={6} md={4} lg={3}>
      <Card
        className={styles.card}
        onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}
      >
        <div className={styles.space_image}>
          <Image
            rounded={true}
            className={styles.image}
            src={process.env.REACT_APP_API_URL + device.img}
          ></Image>
        </div>
        <div className={styles.info}>
          <div>{device.brand.name}</div>
          <div className={styles.rating}>
            <div>{ratingCalc}</div>
            <Image
              className={styles.image_rating_star}
              width={13}
              height={13}
              src={star}
            ></Image>
          </div>
        </div>
        <div className={styles.name_device}>{device.name}</div>
        <Card className={styles.card_price}>
          <h6 className="d-flex justify-content-center align-items-center mt-2">
            {device.price} {String.fromCodePoint(0x20bd)}
          </h6>
        </Card>
      </Card>
    </Col>
  );
};

export default DeviceItem;
