import React from 'react';
import {NavLink} from 'react-router-dom'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        let isOpen = window.innerWidth <= 800 ? 0 : 1;
        this.state = {
            isNavOpen: isOpen,
        };

        this.hideMenu = this.hideMenu.bind(this);
    }

    hideMenu() {

    }

    render() {
        return (
            <div>
                <h1 className="name-show">Вырыпаевские вечера <span style={{color: '#EF5350'}}>v2.0</span></h1>
                <div className="btn-group btn-group-lg">
                    <NavLink to="/agree" className="btn btn-light btn-lg">Все согласны?!🧐</NavLink>
                    <NavLink to="/unit" className="btn btn-light btn-lg">Слабое звено🔗</NavLink>
                    <NavLink to="/qwerty" className="btn btn-light btn-lg">Qwerty⌨</NavLink>
                    <NavLink to="/speak" className="btn btn-light btn-lg">🤖Эх, ЭВМовна!🎤</NavLink>
                    <NavLink to="/hands" className="btn btn-light btn-lg">Чу✋ие руки</NavLink>
                </div>
                <br/>
                <NavLink to="/voite" className="btn btn-light btn-lg mt-5">Голосование</NavLink>
            </div>
        );
    }

}