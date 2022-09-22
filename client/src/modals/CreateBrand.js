import React, { useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import CastomButton from '../components/UI/button/CastomButton';
import CustomButtonSuccess from '../components/UI/button/CustomButtonSuccess';
import { createBrand } from '../http/brandAPI';
import styles from './styles/CreateType.module.scss';

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
        <Modal.Header className={styles.header}>
          <Modal.Title styles={{backgraund: 'black'}}>Добавить бренд</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.body}>
        <Form>
            <Form.Control 
                value={brand}
                onChange={e => setBrand(e.target.value)}
                placeholder='Введите название бренда...'
            />
        </Form>
        </Modal.Body>
        <Modal.Footer className={styles.footer}>
        <CastomButton onClick={onHide}>
            Закрыть
          </CastomButton>
          <CustomButtonSuccess  onClick={addBrand}>
            Добавить
          </CustomButtonSuccess>
        </Modal.Footer>
      </Modal>
    );
}

export default CreateBrand;