import React from 'react';
import styles from './CustomButtonSuccess.module.scss';

const CustomButtonSuccess = ({disabled, children, onClick, variant, ...props }) => {
  return (
    <div {...props} >
    {disabled
    ? (
        <button className={variant == 'outline' ? styles.btn_disable_outlie : styles.btn_disable}>{children}</button>
      )
    :(
        <button onClick={onClick} className={variant == 'outline' ? styles.btn_outline : styles.btn}>{children}</button>
     )
    }
    </div>
  );
};

export default CustomButtonSuccess;