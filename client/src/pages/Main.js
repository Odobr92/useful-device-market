import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import {observer} from 'mobx-react-lite';
import TypeBar from '../components/TypeBar';
import { Row, Col } from 'react-bootstrap'
import NewsCarousel from '../components/NewsCarousel';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { Context } from '..';
import { fetchType } from '../http/typeAPI';
import { fetchBrand } from '../http/brandAPI';
import { fetchDevice } from '../http/deviceAPI';
import Pages from '../components/Pages';

const Main = observer( () => {

  const {type, brand, device} = useContext(Context);

  useEffect(() => {
    fetchType().then(data => type.setType(data))
    fetchBrand().then(data => brand.setBrand(data))
    fetchDevice(type.selectedType.id, brand.selectedBrand.id, device.limit, device.page).then(data => {
      device.setDevice(data.rows)
      console.log(data.rows)
      device.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchDevice(type.selectedType.id, brand.selectedBrand.id, device.limit, device.page).then(data => {
      device.setDevice(data.rows)
      device.setTotalCount(data.count)
    })
  }, [device.page])

  useEffect(() => {
    fetchDevice(type.selectedType.id, brand.selectedBrand.id, device.limit, device.page).then(data => {
      device.setDevice(data.rows)
      device.setTotalCount(data.count)
      device.setPage(1);
    })
  },[type.selectedType, brand.selectedBrand])

  return (
      <Container>
        <Row>
           <Col md={3}>
            <h6 className='mt-3'>Категории:</h6>
                <TypeBar/>
                <h6 className='mt-3'>Бренды:</h6>
                <BrandBar/>
            </Col>
            <Col md={9}>                
            <NewsCarousel/>
            <DeviceList/>
            <Pages/>
            </Col>         
        </Row>
      </Container>
  );
});

export default Main;
