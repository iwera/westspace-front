import React from 'react';
import Menu from '../Menu/Menu.js';

export default ({children}) => {
    return (
        <div id="container">
            {children}
            <Menu></Menu>
        </div>

    );
}
