import React from 'react';
import './Form.css';

export const Form = ({ name, type, children, ...props }) => {
    return (
        <div className='form'>
            {children}
        </div>
    );
};