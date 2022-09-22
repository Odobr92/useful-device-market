import React from 'react';
import styles from './DeleteButton.module.scss';

const DeleteButton = ({...props}) => {
    return (
        <div {...props}>
          <div className={styles.btn}></div>
        </div>
    );
}

export default DeleteButton;