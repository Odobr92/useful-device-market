import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ParamsBar from '../components/ParamsBar';
import '../styles/DevicePage.css';
import star from '../assets/star.png';
import { fetchOneDevice } from '../http/deviceAPI';
import { observer } from 'mobx-react-lite';
import {
  addBasketDevice,
  delBasketDevice,
  fetchOneBasketDevice,
  setAmountBasketDevice,
} from '../http/basketAPI';
import BlueCounter from '../components/UI/counters/BlueCounter';
import RatingStar from '../components/UI/ratings/RatingStar';
import { Context } from '..';
import CastomButton from '../components/UI/button/CastomButton';

const DevicePage = observer(() => {
  const { user } = useContext(Context);

  const [isDeviceBasket, isSetDeviceBasket] = useState(false);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(0);
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  const [ratingCalc, setRatingCalc] = useState(0);

  useEffect(() => {
    fetchOneDevice(id).then((data) => {
      setDevice(data);
      setRatingCalc(Math.floor(data.rating * 100) / 100);
      setLoading(false);
    });
    fetchOneBasketDevice(id).then((b) => {
      if (b) {
        setAmount(b.amount);
        isSetDeviceBasket(true);
      }
    });
  }, []);

  const addBasket = () => {
    if (user.isAuth) {
      addBasketDevice(device.id).then(() => {
        isSetDeviceBasket(true)
        setAmount(1);
      });
    } else {
      alert('Для добавления товара необходима авторизация!');
    }
  };

  const delBasket = () => {
    delBasketDevice(device.id).then(() => isSetDeviceBasket(false));
  };

  const updateAmount = (amt) => {
    setAmountBasketDevice(id, amt).then(() => setAmount(amt));
  };

  return (
    <Container>
      <div className="devicePageConteiner">
        <Row className="devicePageConteiner_row1">
          <Col xs={12} md={7} lg={6} className="devicePageConteiner_row1_col">
            {loading ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              <Image
              fluid
                width={'90%'}
                height={'auto'}
                className="devicePageConteiner_row1_col_img"
                src={process.env.REACT_APP_API_URL + device.img}
              />
            )}
          </Col>
          <Col xs={12} md={5} lg={6} className="devicePageConteiner_row1_col">
            <div className="devicePageConteiner_row1_col_box">
              <h1>{device.name}</h1>
              <div className="devicePageConteiner_row1_rating">
                <div>{ratingCalc}</div>
                <Image width={17} height={17} src={star}></Image>
              </div>
              <Card className="devicePageConteiner_row1_price">
                <h2>
                  {device.price} {String.fromCodePoint(0x20bd)}
                </h2>
              </Card>
              {isDeviceBasket ? (
                <div className="d-flex align-items-center">
                  <Button variant="success" onClick={() => delBasket()}>
                    В корзине
                  </Button>
                  <BlueCounter
                    className='ms-3'
                    amount={amount}
                    setAmount={updateAmount}
                  />
                </div>
              ) : (
                <CastomButton onClick={() => addBasket()}>Добавить в корзину</CastomButton>
              )}
            </div>
          </Col>
          <Row className="devicePageConteiner_row2"></Row>
          <Col xs={12} md={7} lg={6} className="devicePageConteiner_row1_col">
            <div className="devicePageConteiner_row2_params">
              <h4>Характеристики</h4>
              <ParamsBar deviceInfos={device.info} />
            </div>
          </Col>
        </Row>
      </div>
      <hr className="mt-1"></hr>
      <div className="d-flex flex-column justify-content-center align-items-center mt-4">
        <RatingStar id={id} />
      </div>
    </Container>
  );
});

export default DevicePage;
