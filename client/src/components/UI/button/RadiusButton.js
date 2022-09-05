import React from 'react';
import '../../../styles/Button.css';

const RadiusButton = ({ children, active, ...props }) => {
  return (
    <div {...props}>
      <div className="sectionRadiusButton">
        <div className="radiusButton">{children}</div>
      </div>
    </div>
  );
};

export default RadiusButton;
