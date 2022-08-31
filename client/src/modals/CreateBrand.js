import React, { useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { createBrand } from '../http/brandAPI';

const CreateBrand = ({show, onHide}) => {

  const [brand, setBrand] = useState('');
  const addBrand = () => {
    createBrand({name: brand}).then(data => {  
      alert(`Бренд "${brand}" успешно добавлен!`);
      setBrand('');
    })
  }

    return (
        <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Добавить бренд</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Control 
                value={brand}
                onChange={e => setBrand(e.target.value)}
                placeholder='Введите название бренда...'
            />
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-primary" onClick={onHide}>
            Закрыть
          </Button>
          <Button variant="outline-success" onClick={addBrand}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default CreateBrand;