// Modules
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from '../../views/examples/Home';
import Me from '../../views/examples/Me';
import About from '../../views/examples/About';
import Error404 from '../../views/examples/404';

// Styles
import '../../assets/css/Content.css';

const Content = props => {
    return (
        <main className="Content">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/me/:id">
                    <Me />
                </Route>
                <Route path="*">
                    <Error404 />
                </Route>
            </Switch>
        </main>
    );
};

export default Content;