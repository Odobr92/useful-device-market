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

const Main = observer( () => {

  const {type, brand, device} = useContext(Context);

  useEffect(() => {
    fetchType().then(data => type.setType(data))
    fetchBrand().then(data => brand.setBrand(data))
    fetchDevice().then(data => device.setDevice(data.rows))
  }, [])

  return (
      <Container>
        <Row>
           <Col md={3}>
                <TypeBar/>
            </Col>
            <Col md={9}>      
            <BrandBar/>
            <NewsCarousel/>
            <DeviceList/>
            </Col>         
        </Row>
      </Container>
  );
});

export default Main;
