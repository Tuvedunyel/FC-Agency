import React, { FC } from 'react';
import { NavLink } from "react-router-dom";

const Buttons: FC<{ right?: string, left?: string }> = ( { right, left } ) => {
    return (
        <div className='scroll-bottom'>
            { left && (
                <NavLink to={ left } className='left hover'>
                    <span>&#10092;</span>
                </NavLink>
            ) }
            { right && (
                <NavLink to={ right } className='right hover'>
                    <span>&#10093;</span>
                </NavLink>
            ) }
        </div>
    );
};

export default Buttons;
