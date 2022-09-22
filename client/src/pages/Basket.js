import React, { useContext, useEffect, useState } from 'react';
import { Container, Button, } from 'react-bootstrap';
import { Context } from '..';
import BasketDeviceItem from '../components/BasketDeviceItem';
import { fetchBasketDevice} from '../http/basketAPI';
import '../styles/Basket.css';
import { Spinner } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import CastomButton from '../components/UI/button/CastomButton';

const Basket = observer(() => {
  const { basket } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [amountAll, setAmountAll] = useState(0);
  const [priceAll, setPriceAll] = useState(0);

  useEffect(() => {
    fetchBasketDevice()
      .then((data) => basket.setBasketDevice(data))
      .finally(() => {
        checkAll()
        setLoading(false)
      });
  }, []);

  const checkAll = () => {
    if(basket.basketDevice.rows)
    {
    let amount = 0;
    let price = 0;
    basket.basketDevice.rows.forEach(bd => {
      amount = amount + bd.amount;
      price = price + (bd.device.price*bd.amount)  
    });
    setAmountAll(amount)
    setPriceAll(price)
    }
  }

  return (
    <Container>
      <div className="basketSpace">
        <h2 className='basket_title'>Корзина</h2>
        <hr />
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          basket.basketDevice.rows.length > 0
          ?
          basket.basketDevice.rows.map((b) => (
            <BasketDeviceItem key={b.id} basketItem={b} checkAll={checkAll}
            />))
          :  <h4 className='d-flex justify-content-center m-5'>Корзина пуста!</h4> 
        )}
        <hr />
        <div className="d-flex align-items-end justify-content-between">
          <div>Всего товаров: {amountAll}</div>
          <div>
            Общая сумма: {priceAll} {String.fromCodePoint(0x20bd)}
          </div>
        </div>
        <div className="basketSpace_next">
          <CastomButton
            onClick={() => {
              alert('Спасибо за заказ но дальше нельзя!');
            }}
          >
            Перейти к оформлению
          </CastomButton>
        </div>
      </div>
    </Container>
  );
});

export default Basket;
