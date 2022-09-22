import React, { useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import CastomButton from '../components/UI/button/CastomButton';
import CreateBrand from '../modals/CreateBrand';
import CreateDevice from '../modals/CreateDevice';
import CreateType from '../modals/CreateType';
import styles from './styles/Admin.module.scss';

const Admin = () => {

    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);

    return (
        <div>
            <Container>
                <Col className={styles.column}>
                <CastomButton onClick={() => setTypeVisible(true)} className={styles.button}>
                    Добавить Тип
                </CastomButton>
                <CastomButton onClick={() => setBrandVisible(true)} className={styles.button}>
                    Добавить Бренд
                </CastomButton>            
                <CastomButton onClick={() => setDeviceVisible(true)} className={styles.button}>
                    Добавить Устройство
                </CastomButton>
                </Col>
                <CreateBrand show={brandVisible} onHide = {() => setBrandVisible(false)}/>
                <CreateType show={typeVisible} onHide = {() => setTypeVisible(false)}/>
                <CreateDevice show={deviceVisible} onHide = {() => setDeviceVisible(false)}/>
            </Container>
        </div>
    );
}

export default Admin;