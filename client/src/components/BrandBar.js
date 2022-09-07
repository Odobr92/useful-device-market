import React, { useContext } from 'react';
import {Col, Card, ListGroup } from 'react-bootstrap';
import { Context } from '..';
import {observer} from 'mobx-react-lite';
import '../styles/BrandBar.css'

const BrandBar = observer(() => {
    const { brand } = useContext(Context);
    return (
         <ListGroup className="mt-3">
         {brand.brand.map((el) => <ListGroup.Item
                active={el.id === brand.selectedBrand.id}
                onClick = {() => {
                    brand.selectedBrand.id !== el.id
                      ? brand.setSelectedBrand(el)
                      : brand.setSelectedBrand({});
                  }}
                key = {el.id}
            >
                {el.name}
            </ListGroup.Item>)}
       </ListGroup>
    );
});

export default BrandBar;