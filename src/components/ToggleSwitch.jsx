import React from 'react';

const ToggleSwitch = ({ toggled, onClick, label }) => (
  <div className="toggle-switch-wrapper">
    <label className="toggle-switch-label">{label}</label>
    <div className="toggle-switch" onClick={onClick}>
      <input type="checkbox" checked={toggled} readOnly />
      <span className="slider"></span>
    </div>
  </div>
);

export default ToggleSwitch;
