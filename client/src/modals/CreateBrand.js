import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap'

const CreateBrand = ({show, onHide}) => {
    return (
        <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Добавить бренд</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Control 
                placeholder='Введите название бренда...'
            />
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
}

export default CreateBrand;