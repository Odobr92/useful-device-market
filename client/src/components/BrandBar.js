import React, { useContext } from 'react';
import {Col, Card } from 'react-bootstrap';
import { Context } from '..';
import {observer} from 'mobx-react-lite';
import '../styles/BrandBar.css'

const BrandBar = observer(() => {
    const { brand } = useContext(Context);
    return (
        <Col className='main'>
            {brand.brand.map((el) => <Card
                border = {el.id === brand.selectedBrand.id ? 'primary' : '' }
                onClick = {() => {
                    brand.selectedBrand.id !== el.id
                      ? brand.setSelectedBrand(el)
                      : brand.setSelectedBrand({});
                  }}
                key = {el.id}
                className = 'card_item'
            >
                {el.name}
            </Card>)}
        </Col>
    );
});

export default BrandBar;