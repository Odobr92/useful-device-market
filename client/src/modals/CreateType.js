import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap'

const CreateType = ({show, onHide}) => {
    return (
        <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить тип</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Control 
                placeholder='Введите название типа...'
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

export default CreateType;