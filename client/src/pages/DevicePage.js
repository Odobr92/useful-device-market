import React, { useContext, useEffect, useMemo, useState } from 'react';
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

const DevicePage = observer(() => {
  const [isDeviceBasket, isSetDeviceBasket] = useState(false);
  const [amount, setAmount] = useState(0);
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((data) => {
      setDevice(data);
    });
    fetchOneBasketDevice(id).then((basket) => {
      if (basket) {
        isSetDeviceBasket(true);
        setAmount(basket.amount);
      }
    });
  }, []);

  const addBasket = async () => {
    await addBasketDevice(device.id);
    await isSetDeviceBasket(true);
    await fetchOneBasketDevice(id).then((basket) => {
      if (basket) {
        isSetDeviceBasket(true);
        setAmount(basket.amount);
      }
    });
  };

  const delBasket = async () => {
    await delBasketDevice(device.id);
    await isSetDeviceBasket(false);
    await fetchOneBasketDevice(id).then((basket) => {
      if (basket) {
        isSetDeviceBasket(true);
        setAmount(basket.amount);
      }
    });
  };

  const updateAmount = async (amt) => {
    setAmount(amt);
    await setAmountBasketDevice(id, amt);
    await fetchOneBasketDevice(id).then((basket) => {
      if (basket) {
        isSetDeviceBasket(true);
        setAmount(basket.amount);
      }
    });
  };

  return (
    <Container>
      <Row className="devicePageConteiner_row1">
        <Col ld={4} className="devicePageConteiner_row1_col">
          <Image
            width={470}
            height={'auto'}
            className="devicePageConteiner_row1_col_img"
            rounded={true}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </Col>
        <Col ld={8}>
          <div>
            <h1>{device.name}</h1>
            <div className="devicePageConteiner_row1_rating">
              <div className="m-1">Рейтинг:</div>
              <div>{device.rating}</div>
              <Image width={18} height={18} src={star}></Image>
            </div>
            <Card className="devicePageConteiner_row1_price">
              <h2>
                {device.price} {String.fromCodePoint(0x20bd)}
              </h2>
              {isDeviceBasket ? (
                <div>
                  <Button variant="success" onClick={() => delBasket()}>
                    В корзине
                  </Button>
                  <BlueCounter
                    amount={amount}
                    setAmount={updateAmount}
                  />
                </div>
              ) : (
                <Button onClick={() => addBasket()}>Добавить в корзину</Button>
              )}
            </Card>
          </div>
        </Col>
        <Row className="devicePageConteiner_row2"></Row>
        <Col>
          <div className="devicePageConteiner_row2_params">
            <h4>Характеристики</h4>
            <ParamsBar deviceInfos={device.info} />
          </div>
        </Col>
      </Row>
    </Container>
  );
});

export default DevicePage;
