import React from 'react';
import './speech-bubbles.scss';

const Bubble = ({ children, size, color, fill, align }) => {
    const getStyles = (size, color, fill, align) => {
        const result = [];
        result.push('speech-bubble');
        result.push(size === 'large' ? 'large' : '');
        result.push(color);
        result.push(fill === 'solid' ? 'solid' : '');
        result.push(align);
        return result.join(' ');
    };

    return <div className={getStyles(size, color, fill, align)}>{children}</div>;
};

export default Bubble;
