import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import CreateBrand from '../modals/CreateBrand';
import CreateDevice from '../modals/CreateDevice';
import CreateType from '../modals/CreateType';

const Admin = () => {

    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);

    return (
        <div>
            <Container>
                <Row className='d-flex m-5'>
                <Button onClick={() => setTypeVisible(true)} className='mt-3 p-2'>
                    Добавить Тип
                </Button>
                <Button onClick={() => setBrandVisible(true)} className='mt-3 p-2'>
                    Добавить Бренд
                </Button>            
                <Button onClick={() => setDeviceVisible(true)} className='mt-3 p-2'>
                    Добавить Устройство
                </Button>
                </Row>
                <CreateBrand show={brandVisible} onHide = {() => setBrandVisible(false)}/>
                <CreateType show={typeVisible} onHide = {() => setTypeVisible(false)}/>
                <CreateDevice show={deviceVisible} onHide = {() => setDeviceVisible(false)}/>
            </Container>
        </div>
    );
}

export default Admin;