import React from 'react';
import { Icon } from '../Icon';
import './Input.css';

export const Input = ({ name, type, ph, ...props }) => {
    return (
        <input
            className='input'
            placeholder={ph}
            name={name}
            type={type || 'text'}
            {...props}
        />
    );
};