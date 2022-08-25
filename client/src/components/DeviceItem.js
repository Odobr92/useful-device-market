import React from 'react';
import {Card, Col, Image} from 'react-bootstrap'
import '../styles/DeviceItem.css'
import star from '../assets/star.png'
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
    const navigate = useNavigate();
    return (
        <Col md={3}>
            <Card className='card_device_list' onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
              <Image rounded={true} className='card_device_list_img' src={device.img}></Image>
              <div className='card_device_list_info'>
                <div>Apple...</div>
                <div className='card_device_list_info_rating'>
                    <div>{device.rating}</div>
                    <Image className='card_device_list_info_rating_star' width={18} height={18} src={star}></Image>
                </div>
            </div>
            <div>
              {device.name}
            </div>
            </Card>    
        </Col>
    )
}

export default DeviceItem;