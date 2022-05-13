import React, { useEffect } from 'react';

const Mouse = () => {

    useEffect( () => {
        const cursor = document.querySelector('.cursor');

        window.addEventListener('mousemove', e => {
            cursor?.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`);
        })
    }, [])

    return (
        <span className="cursor"></span>
    );
};

export default Mouse;
