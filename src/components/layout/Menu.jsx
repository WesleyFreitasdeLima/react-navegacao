// Modules
import React from 'react';
import { Link } from 'react-router-dom';

// Syles
import '../../assets/css/Menu.css';

const Menu = props => {
    return (
        <div className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/me/1">Me</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;