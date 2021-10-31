import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Blog from '../pages/blogs';
import About from '../pages/about';

export default function Router() {
    return (
        <>
            <Switch>
                <Route path="/blogs">
                    <Blog />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </>
    );
}