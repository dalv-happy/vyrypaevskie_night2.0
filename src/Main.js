import React from 'react';
import {NavLink} from 'react-router-dom'
import ioClient from './socket';

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
                    <NavLink to="/CatCinema" className="btn btn-light btn-lg">Котоматограф 😼</NavLink>
                    <NavLink to="/speak" className="btn btn-light btn-lg">🤖Эх, ЭВМовна!🎤</NavLink>
                    <NavLink to="/agree" className="btn btn-light btn-lg">Все согласны?!🧐</NavLink>
                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <button id="btnGroupDrop1" type="button" className="btn btn-light btn-lg dropdown-toggle"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Слабое звено🔗
                        </button>
                        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <a className="dropdown-item" href="/unit/0">Команда 1</a>
                            <a className="dropdown-item" href="/unit/1">Команда 2</a>
                        </div>
                    </div>
                    <NavLink to="/qwerty" className="btn btn-light btn-lg">Qwerty⌨</NavLink>

                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <button id="btnGroupDrop1" type="button" className="btn btn-light btn-lg dropdown-toggle"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Чу✋ие руки
                        </button>
                        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <a className="dropdown-item" href="/hands/0">Команда 1</a>
                            <a className="dropdown-item" href="/hands/1">Команда 2</a>
                        </div>
                    </div>
                </div>
                <br/>
                <NavLink to="/voite" className="btn btn-light btn-lg mt-5">Голосование</NavLink>
            </div>
        );
    }

}
