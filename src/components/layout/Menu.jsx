import React from 'react';

import('../../assets/css/Menu.css');

const Menu = props => {
    return (
        <div className="Menu">
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;