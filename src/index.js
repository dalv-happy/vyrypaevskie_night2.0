import React from 'react';
import ReactDOM from 'react-dom';
var EventEmitter = require('wolfy87-eventemitter');
import Cookies from 'universal-cookie';
import './scss/base.scss'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import MainLayout from './Templates/MainLayout'
import Main from './Main'
import Agree from './Game/Agree'
import Unit from './Game/Unit'
import Qwerty from './Game/Qwerty'
import Speak from './Game/Speak'
import Hands from "./Game/Hands";
import Voite from "./Game/Voite";
import CatCinema from "./Game/CatCinema";
import Click from './Click';


const history = createBrowserHistory();
window.ee = new EventEmitter();
window.cookies = new Cookies();
if (window.cookies.get("right") == undefined || window.cookies.get("left") == undefined) {
    window.cookies.set("left", 0, {path: '/'});
    window.cookies.set("right", 0, {path: '/'});
}

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <MainLayout>
                <Route exact path="/" component={Main}/>
                <Route exact path="/agree" component={Agree}/>
                <Route exact path="/unit/:id" component={Unit}/>
                <Route exact path="/qwerty" component={Qwerty}/>
                <Route exact path="/speak" component={Speak}/>
                <Route exact path="/hands/:id" component={Hands}/>
                <Route exact path="/voite" component={Voite}/>
                <Route exact path="/CatCinema" component={CatCinema}/>
                <Route exact path="/click" component={Click}/>
            </MainLayout>
        </Switch>
    </BrowserRouter>,
    document.getElementById('app')
);

module.hot.accept();
