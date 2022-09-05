import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import { Context } from '..';
import BasketDeviceItem from '../components/BasketDeviceItem';
import { fetchBasketDevice, setAmountBasketDevice } from '../http/basketAPI';
import '../styles/Basket.css';
import { Spinner } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const Basket = observer(() => {

  const { basket } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [amountAll, setAmountAll] = useState(0)
  const [priceAll, setPriceAll] = useState(0)

  useEffect(() => {
    fetchBasketDevice()
    .then((data) => basket.setBasketDevice(data))
    .finally(() => setLoading(false))
  }, []);

 const checkInfo = async (id, amount) => {
    await setAmountBasketDevice(id, amount);
    await fetchBasketDevice().then(data => { 
        basket.setBasketDevice(data)
        })
    setAllInfo();
 }

  const setAllInfo = () => {
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
      <div className='basketSpace'>
      <h2>Корзина</h2>
      {loading
      ? (<Spinner animation="border" variant="primary"/>)
      : basket.basketDevice.rows.map(basketDeviceItem => <BasketDeviceItem  checkInfo = {checkInfo} basketDeviceItem={basketDeviceItem}/>)
      }
      <hr />
      <div className='d-flex align-items-end justify-content-between'>
      <div>
            Всего товаров: {amountAll}
        </div>
        <div>
            Общая сумма: {priceAll} р
        </div>
      </div>
      <div className='basketSpace_next'>
      <Button onClick={() =>{ }}>
        Перейти к оформлению
      </Button>
      </div>
      </div>
    </Container>
    );
})

export default Basket;