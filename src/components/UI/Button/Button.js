import React from 'react';

import './Button.scss';

const Button = ({ children, ...otherProps }) => {
  return (
    <div>
      <button className="custom-button" {...otherProps}>
        {children}
      </button>
    </div>
  );
};

export default Button;
