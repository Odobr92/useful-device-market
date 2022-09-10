import React, { useContext } from 'react';
import {Row } from 'react-bootstrap';
import { Context } from '..';
import {observer} from 'mobx-react-lite';
import '../styles/BrandBar.css'
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {

    const { device } = useContext(Context);

    return (
        <Row className='mt-1'>
            {device.device.map(el => <DeviceItem
            key={el.id}
            device={el}
            >

            </DeviceItem>)}
        </Row>
    );
});

export default DeviceList;