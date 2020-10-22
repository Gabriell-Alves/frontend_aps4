import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './core/components/Header';
import Home from './pages/Home';
import Coordinate from './pages/Coordinate';
import Ordination from './pages/Ordination';

const Router = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/coordinates">
                <Coordinate/>
            </Route>
            <Route path="/ordinations">
                <Ordination/>
            </Route>
        </Switch>
    </BrowserRouter>

);


export default Router;