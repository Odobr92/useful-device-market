import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap';
import { Context } from '..';
import { fetchBrand } from '../http/brandAPI';
import { createDevice } from '../http/deviceAPI';
import { fetchType } from '../http/typeAPI';

const CreateDevice = observer(({ show, onHide }) => {
  const { type, brand } = useContext(Context);
  const [info, setInfo] = useState([]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState(null);

  useEffect(() => {
    fetchType().then((data) => type.setType(data));
    fetchBrand().then((data) => brand.setBrand(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const remoutInfo = (infoNumber) => {
    setInfo(info.filter(i => i.number !== infoNumber));
  };

  const selectFile = (e) => {
    setImg(e.target.files[0]);
  };

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }

  const addDevice = () => {
    
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('typeId', type.selectedType.id)
    formData.append('brandId', brand.selectedBrand.id)
    console.log(img);
    formData.append('img', img)
    formData.append('info', JSON.stringify(info))
    
    createDevice(formData).then(() => alert(`Устройство "${name}" добавлено успешно!`))
  }

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Добавить устройство</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>
              {type.selectedType.name || 'Выберете тип'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {type.type.map((t) => (
                <Dropdown.Item
                  onClick={(e) => type.setSelectedType(t)}
                  key={t.id}
                >
                  {t.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>
              {brand.selectedBrand.name || 'Выберете бренд'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {brand.brand.map((b) => (
                <Dropdown.Item
                  onClick={(e) => brand.setSelectedBrand(b)}
                  key={b.id}
                >
                  {b.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder="Введите название..."
          />
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-2"
            type="number"
            placeholder="Введите стоимость..."
          />
          <Form.Control className="mt-2" type="file" onChange={selectFile} />
          <hr />
          <Button variant={'outline-primary'} onClick={addInfo}>
            Добавить характеристику
          </Button>
          {info.map((i) => (
            <Row key={i.number} className="mt-2">
              <Col md={15}>
                <Form.Control value={i.title} onChange={(e) => changeInfo('title', e.target.value, i.number)} className="mt-2" placeholder="Введите название" />
              </Col>
              <Col md={15}>
                <Form.Control value={i.description} onChange={(e) => changeInfo('description', e.target.value, i.number)} className="mt-2" placeholder="Введите значение" />
              </Col>
              <Col md={3}>
                <Button className="mt-2"
                  onClick={() => remoutInfo(i.number)}
                  variant={'outline-danger'}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addDevice}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
