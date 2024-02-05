import React from 'react'
import './buttton.css'

export const Button = ({
    onClick,
    type,
    children, 
    size = 's'
}) => {
    let btnClass = 'btn';
    if (type === 'secondary') {
        btnClass += ' btn--secondary';
    } else if (type === 'primary') {
        btnClass += ' btn--primary';
    }

    if (size === 's') {
        btnClass += ' btn--small';
    } else if (size === 'm') {
        btnClass += ' btn--medium';
    }

    return (
        <button className={btnClass} onClick={onClick}>
            {children} 
        </button>
    );
};
