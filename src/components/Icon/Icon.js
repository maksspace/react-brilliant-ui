import React from 'react';
import './Icon.css';

export const Icon = ({ name }) => {
  return <div className={`icon icon-${name}`} />;
};