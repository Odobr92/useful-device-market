import { observer } from 'mobx-react-lite';
import React, { useContext} from 'react';
import { Card, Col, Row, Image, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Context } from '..';
import { delBasketDevice, setAmountBasketDevice } from '../http/basketAPI';
import '../styles/BasketDeviceItem.css';
import { DEVICE_ROUTE } from '../utils/consts';
import DeleteButton from './UI/button/DeleteButton';
import BlueCounter from './UI/counters/BlueCounter';

const BasketDeviceItem = observer(({basketItem, checkAll}) => {
  const navigate = useNavigate();
  const { basket } = useContext(Context);

  const setAmount = async (amount) => {
    await setAmountBasketDevice(basketItem.device.id, amount);
    await basket.setAmount(basketItem.id, amount);
    checkAll(); 
  }

  const remove = async () => {
    await delBasketDevice(basketItem.device.id)
    await basket.removeBaskedDevice(basketItem.id);
    checkAll(); 
  }

  return (
    <Container className="basketDeviceItem" fluid="md">
      <Card className="basketDeviceItem_cadr">
        <Row className="align-items-center justify-content-start">
          <Col className="basketDeviceItem_cadr_space">
            <Image
              onClick={() =>
                navigate(`${DEVICE_ROUTE}/${basketItem.device.id}`)
              }
              className="basketDeviceItem_cadr_img"
              rounded={true}
              src={process.env.REACT_APP_API_URL + basketItem.device.img}
            ></Image>
          </Col>
          <Col xs={10} md={10} className="d-flex flex-column">
          <Row>
            <Col>
              <div>
                <h6>{basketItem.device.name}</h6>
              </div>
            </Col>
          </Row>
          <Row className='d-flex align-items-center'>
            <Col xs={6} md={7}className='align-items-stretch' >
              <BlueCounter cn={'justify-content-end'} amount={basketItem.amount} setAmount={setAmount} />
            </Col>
            <Col xs={4} md={4}>
              <div className='d-flex justify-content-center'>
                <h6>
                  {basketItem.device.price * basketItem.amount}{' '}
                  {String.fromCodePoint(0x20bd)}
                </h6>
              </div>
            </Col>
            <Col xs={2} md={1}>
              <DeleteButton className='mb-3' onClick={remove}/>
            </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Container>
  );
});

export default BasketDeviceItem;
