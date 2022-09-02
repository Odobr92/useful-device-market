import React from 'react';
import '../../../styles/Button.css';

const RadiusButton = ({ children, ...props }) => {
  return (
    <div {...props}>
      <div className="sectionRadiusButton">
        <div className="radiusButton">{children}</div>
      </div>
    </div>
  );
};

export default RadiusButton;
