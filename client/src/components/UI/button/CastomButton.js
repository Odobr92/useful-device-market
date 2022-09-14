import React from 'react';
import '../../../styles/Button.css';

const CastomButton = ({disabled, children, onClick, ...props }) => {
  return (
    <div {...props}>
    {disabled
    ? (
        <div className="custom_btn_disable">{children}</div>
      )
    :(
        <div onClick={onClick} className="custom_btn">{children}</div>
     )
    }
    </div>
  );
};

export default CastomButton;
