// Modules
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';

// Styles
import '../assets/css/App.css';

const App = props => {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu />
                <Content />
            </BrowserRouter>
        </div>
    );
};

export default App;