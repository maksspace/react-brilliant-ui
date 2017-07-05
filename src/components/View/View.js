import React from 'react';
import './View.css';

const Circle = ({ radius, color, opacity, position, blinking, ...props }) => {
    console.log('render');
    return (
        <div className='circle-box' style={{ width: radius + 'px', height: radius + 'px', ...position }}>
            <div className='circle' style={{ backgroundColor: color, opacity: opacity }} />
        </div>
    );
};

export const View = ({ children }) => {

    // generation random count of circles and
    // with random colors,
    // and put it into page in random positions;

    let circles = [];
    let colors = [
        '#1A79AF',
        '#34559E',
        '#1F5FA6',
        '#1D84BE',
    ];
    let circlesRandomCount = parseInt(Math.random() * 5, 10) + 5;
    for( let i = 0; i < circlesRandomCount; i++ ) {
        let top = Math.random()*Math.exp(Math.random())*1000;
        let left = Math.random()*Math.exp(Math.random())*1000;
        let radius = Math.random()*700;
        let color = colors[Math.floor(Math.random()*colors.length)];
        circles.push(
            <Circle position={{top: top + 'px', left: left + 'px'}} radius={radius} color={color} opacity={Math.random()*0.7} />
        )
    }

    return (
        <div className='view'>
            {circles}
            <Circle position={{top: -70, left: 20}} radius={200} color={'#1D84BE'} opacity={0.2} />
            <Circle position={{top: 50, left: 30}} radius={170} color={'#34559E'} opacity={0.6} />
            <Circle position={{top: 120, left: 400}} radius={240} color={'#34559E'} opacity={0.8} />
            <Circle position={{top: -500, left: 300}} radius={800} color={'#34559E'} opacity={0.4} />
            <Circle position={{top: 200, right: -100}} radius={400} color={'#1E61A9'} opacity={0.5} />
            <Circle position={{bottom: -300, left: 70}} radius={700} color={'#1F5FA6'} opacity={0.5} />
            <Circle position={{bottom: 100, right: 70}} radius={220} color={'#1F5FA6'} opacity={1} />
            <Circle position={{bottom: -300, left: 400}} radius={600} color={'#1F5FA6'} opacity={0.5} />
            <Circle position={{bottom: -300, left: 400}} radius={600} color={'#1F5FA6'} opacity={0.5} />
            <Circle position={{bottom: 0, left: 70}} radius={150} color={'#1A79AF'} opacity={0.5} />
            {children}
        </div>
    )
};