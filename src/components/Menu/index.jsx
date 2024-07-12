import React from 'react';
import PropTypes from 'prop-types';

function Menu() {
    const MenuItems = [
        "Home",
        "Users",
        "Products",
        "About",
    ];

    return (
        <>
        <ul>
            {MenuItems.map((item, index) => {
                return (
                <li key={index}>{item}</li>
            );
        })}
        </ul>   
        </>
    )
}

export default Menu;