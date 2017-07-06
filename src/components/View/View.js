import React from 'react';
import './View.css';

const randomAnimation = () => ({ animation: `colorChanging${parseInt(Math.random()*10 % 3, 10) + 1} 20s ease infinite alternate` });
const randomAnimationBox = () => ({ animation: `moving${parseInt(Math.random()*10 % 3, 10)} 20s ease infinite` });

const Circle = ({ radius, color, opacity, position, blur, ...props }) => {
    return (
        <div className='circle-box' style={{ width: radius + 'px', height: radius + 'px', ...position, ...randomAnimationBox() }}>
            <div className='circle' style={{ backgroundColor: color, opacity: opacity, filter: `blur(${blur}px)`, ...randomAnimation()}} />
        </div>
    );
};

export const View = ({ children }) => {

    let circlesCount = Math.random()*1000 % 30;
    let circles = [];
    for(let i = 0; i < circlesCount; i++) {
        let top = (Math.random()*1000 % 100) + '%';
        let left = (Math.random()*1000 % 100) + '%';
        let blur = Math.random()*10 + 2;
        let opacity = Math.random();
        let radius = Math.random()*1000 % 400;
        circles.push(<Circle radius={radius} opacity={opacity} blur={blur} position={{top, left}}/>)
    };

    return (
        <div className='view'>
            {circles}
            {children}
        </div>
    )
};