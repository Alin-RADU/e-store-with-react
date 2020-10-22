import React from 'react';

import './withsSpinner.scss';

const withSpinner = (WrappedComponent) => {
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinnerOverlay">
        <div className="spinner" />
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
};

export default withSpinner;
