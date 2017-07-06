import React from 'react';
import './View.css';

const Circle = ({ radius, color, opacity, position, blinking, ...props }) => {
    return (
        <div className='circle-box' style={{ width: radius + 'px', height: radius + 'px', ...position }}>
            <div className='circle' style={{ backgroundColor: color, opacity: opacity }} />
        </div>
    );
};

export const View = ({ children }) => {
    return (
        <div className='view'>
            <Circle radius={300} color='#177198' opacity={0.6}/>
            <Circle radius={300} color='#403796' opacity={0.2}/>
            <Circle radius={300} color=''/>
            <Circle radius={300} color=''/>
            {children}
        </div>
    )
};