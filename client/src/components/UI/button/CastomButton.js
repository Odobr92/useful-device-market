import React from 'react';
import '../../../styles/Button.css';

const CastomButton = ({ children, ...props }) => {
  return (
    <div {...props}>
      <div className="custom_btn">{children}</div>
    </div>
  );
};

export default CastomButton;
