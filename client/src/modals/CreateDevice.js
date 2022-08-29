import React, { useContext, useState } from 'react';
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap';
import { Context } from '..';

const CreateDevice = ({ show, onHide }) => {

    const {type, brand} = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
        console.log(info);
    }

    const remoutInfo = (infoNumber) => {
        setInfo(info.filter(i => i.number !== infoNumber));
    }

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Добавить устройство</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown className='mt-2'>
                <Dropdown.Toggle>Выберете тип</Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                        type.type.map(t =>
                            <Dropdown.Item key={t.id}>{t.name}</Dropdown.Item> )
                    }
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mt-2'>
                <Dropdown.Toggle>Выберете бренд</Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                        brand.brand.map(b =>
                            <Dropdown.Item key={b.id}>{b.name}</Dropdown.Item> )
                    }
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control className='mt-3' placeholder='Введите название...'/>
            <Form.Control className='mt-2' type='number' placeholder='Введите стоимость...'/>
            <Form.Control className='mt-2' type='file'/>
            <hr/>
            <Button variant={'outline-primary'} onClick={addInfo}>Добавить характеристику</Button>
            {          
                info.map(i =>
                    <Row key={i.number} className='mt-3'>
                        <Col md={4}>
                          <Form.Control placeholder='Введите название'/>                      
                        </Col>
                        <Col md={4}>
                          <Form.Control placeholder='Введите значение'/>
                        </Col>
                        <Col md={3}>
                            <Button onClick={() => remoutInfo(i.number)} variant={'outline-danger'}>Удалить</Button>
                        </Col>
                    </Row>
                )               
            }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
