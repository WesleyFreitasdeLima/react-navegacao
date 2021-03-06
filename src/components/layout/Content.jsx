// Modules
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from '../../views/examples/Home';
import About from '../../views/examples/About';

// Styles
import '../../assets/css/Content.css';

const Content = props => {
    return (
        <main className="Content">
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </main>
    );
};

export default Content;