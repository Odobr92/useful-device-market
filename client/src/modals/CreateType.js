import React, { useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { createType } from '../http/typeAPI';

const CreateType = ({show, onHide}) => {

  const [type, setType] = useState('');
  const addType = () => {
    createType({name: type}).then(data => {  
      alert(`Тип "${type}" успешно добавлен!`);
      setType('');
    })
  }

    return (
        <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Добавить тип</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Control 
                value={type}
                onChange={e => setType(e.target.value)}
                placeholder='Введите название типа...'
            />
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-primary" onClick={onHide}>
            Закрыть
          </Button>
          <Button variant="outline-success" onClick={addType}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default CreateType;