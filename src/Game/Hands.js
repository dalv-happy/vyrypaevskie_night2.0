import React from 'react';
import {NavLink} from 'react-router-dom'
import Sound from "react-sound";

export default class Hands extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: [
                [
                    "Снежок",
                    "Лопата",
                    "Сосулька",
                    "Лыжи",
                    'Шарф',
                    'Хоккей',
                    'Рукавицы',
                    'Румянец',
                    'Валенки',
                    'Санки',
                    'Снежная баба',
                    'Шуба',
                    'Метель',
                    'Сноуборд',
                    'Холод',
                    'Зимняя рыбалка',
                    'Дед Мороз',
                    'Коньки',
                    'горка',
                ],
                [
                    'Кольца',
                    'Фата',
                    'Букет',
                    'Тамада',
                    'Драка',
                    'Невеста',
                    'Шампанское',
                    'Танец',
                    'Фотограф',
                    'Голубь',
                    'Подвязка',
                    'Деньги',
                    'Туфля',
                    'Роспись',
                    'Поцелуй',
                    'Фейерверк',
                    'Лимузин',
                    'каравай',
                    'свидетель',
                ],
            ],
            i: 0,
            j: 0,
            isHelper: 0,
            isEnd: 0,
            time: 0,
        };

        this.position = 0;

        this.next = this.next.bind(this);
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        if (this.state.time == 120) {
            this.setState({isEnd: 1});
            clearInterval(this.timer);
        }
        this.setState({time: ++this.state.time});
    }

    next() {
        let i = this.state.i;
        if (this.state.j < this.state.word[i].length - 1)
            this.setState({
                j: ++this.state.j
            });
    }

    render() {
        let i = this.state.i;
        let j = this.state.j;

        return (
            <div>
                {this.state.isEnd == 1 && (
                    <Sound
                        url="end.mp3"
                        playStatus={Sound.status.PLAYING}
                        playFromPosition={this.position}
                    />
                )}

                <h1 className="name-game">Чу✋ие руки</h1>

                {this.state.isEnd == 0 && (
                    <div className="questions-text">{this.state.word[i][j]}</div>
                )}
                {this.state.isEnd == 1 && (
                    <div className="questions-text" onClick={() => {
                        this.setState({i: 1, isEnd: 0, time: 0, j: 0});
                        this.position = 0;
                        this.timer = setInterval(this.tick, 1000);
                    }}>🎉Время вышло!🎉</div>
                )}
                <div className="btn-group">
                    <button onClick={this.next} className="btn btn-secondary">Дальше</button>
                </div>
                <div className="time mt-4">{this.state.time}</div>
            </div>
        );
    }

}