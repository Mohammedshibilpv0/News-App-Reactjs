// Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="loading-spinner" style={spinnerStyle}>
      <div className="spinner"></div>
    </div>
  );
};

const spinnerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1000,
};

export default Loading;
