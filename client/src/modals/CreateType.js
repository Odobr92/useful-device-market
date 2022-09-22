import React, { useState} from 'react';
import { Modal, Form } from 'react-bootstrap'
import { createType } from '../http/typeAPI';
import styles from './styles/CreateType.module.scss';
import CastomButton from '../components/UI/button/CastomButton';
import CustomButtonSuccess from '../components/UI/button/CustomButtonSuccess';

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
        <Modal.Header className={styles.header}>
          <Modal.Title>Добавить тип</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.body}>
        <Form>
            <Form.Control 
                value={type}
                onChange={e => setType(e.target.value)}
                placeholder='Введите название типа...'
            />
        </Form>
        </Modal.Body>
        <Modal.Footer className={styles.footer}>
        <CastomButton variant="outline-primary" onClick={onHide}>
            Закрыть
          </CastomButton>
          <CustomButtonSuccess variant="outline-success" onClick={addType}>
            Добавить
          </CustomButtonSuccess>
        </Modal.Footer>
      </Modal>
    );
}

export default CreateType;