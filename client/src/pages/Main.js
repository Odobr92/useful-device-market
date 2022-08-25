import React, { useContext } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Context } from '..';
import {observer} from 'mobx-react-lite';
import TypeBar from '../components/TypeBar';
import { Row, Col } from 'react-bootstrap'
import NewsCarousel from '../components/NewsCarousel';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';

const Main = observer( () => {
  const { type } = useContext(Context);

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
