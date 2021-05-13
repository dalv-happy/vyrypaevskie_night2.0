import React from 'react';
import Sound from 'react-sound';
import {NavLink} from 'react-router-dom'

export default class Speak extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: [
                {name: 'Покинула Чат - Кока', path: 'mp3/1. 🤖Покинула Чат - Кока.mp3', orig: "original/1. Покинула Чат - Кока.mp3"},
                {name: 'Uno — Little Big', path: 'mp3/2. 🤖Uno — Little Big.mp3', orig: "original/2. Little_Big_UNO.mp3"},
                {name: '«Плачу на техно» — Cream Soda, «Хлеб»', path: 'mp3/3. 🤖«Плачу на техно» — Cream Soda, «Хлеб».mp3', orig: "original/3. «Плачу на техно» — Cream Soda, «Хлеб».mp3"},
                {name: 'Blinding Lights — The Weeknd', path: 'mp3/4. 🤖Blinding Lights — The Weeknd.mp3', orig: "original/4. Blinding Lights — The Weeknd.mp3"},
                {name: 'SLAVA MARLOW - СНОВА Я НАПИВАЮСЬ', path: 'mp3/5. 🤖SLAVA MARLOW - СНОВА Я НАПИВАЮСЬ.mp3', orig: "original/5. SLAVA MARLOW - СНОВА Я НАПИВАЮСЬ.mp3"},
                {name: 'дора — Дорадура', path: 'mp3/6. 🤖дора — Дорадура.mp3', orig: "original/6. Дорадура - Дора.mp3"},
                {name: 'верка сердючка всё будет хорошо', path: 'mp3/7. 🤖верка сердючка всё будет хорошо.mp3', orig: "original/7. верка сердючка всё будет хорошо.mp3"},
                {name: 'Юрий Шатунов - Белые розы', path: 'mp3/8. 🤖Юрий Шатунов - Белые розы.mp3', orig: "original/8. Юрий Шатунов - Белые розы.mp3"},
            ],
            i: 0,
            playStatus: Sound.status.PAUSED,
            position: 0,
            isEnd: 0,
            isShow: 0
        };

        this.next = this.next.bind(this);
        this.pause = this.pause.bind(this);
        this.show = this.show.bind(this);
    }

    next() {
        if (this.state.i < this.state.answers.length - 1)
            this.setState({
                i: ++this.state.i,
                playStatus: Sound.status.PAUSED,
                isShow: 0
            });
        else
            this.setState({
                isEnd: 1
            });

        this.position = 0;
    }

    pause() {
        if (this.state.playStatus == Sound.status.PLAYING)
            this.setState({
                playStatus: Sound.status.PAUSED,
            });
        else
            this.setState({
                playStatus: Sound.status.PLAYING,
            });
    }

    show() {
        this.setState({
            isShow: 1,
            playStatus: Sound.status.PLAYING,
        });
        this.position = 0;
    }

    render() {
        let i = this.state.i;
        let music = (this.state.isShow == 0 ? this.state.answers[i].path : this.state.answers[i].orig);
        return (
            <div>
                <h1 className="name-game">🤖Эх, ЭВМовна!🎤</h1>
                {this.state.isShow == 1 && this.state.isEnd == 0 && (
                    <div className="questions-text">{this.state.answers[i].name}</div>
                )}
                {this.state.isShow == 0 && (
                    <div className='box'>
                        <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'></div>
                        <div className='title'>FM {i + 1} Вырыпаевка</div>
                    </div>
                )}
                {this.state.isEnd == 1 && (
                    <div className="questions-text">🎉Конец игры!🎉</div>
                )}

                <div className="btn-group">
                    <button onClick={this.pause} className="btn btn-secondary">Play/Pause</button>
                    <button onClick={this.show} className="btn btn-secondary">Ответ</button>
                    <button onClick={this.next} className="btn btn-secondary">Дальше</button>
                </div>
                <Sound
                    url={music}
                    playStatus={this.state.playStatus}
                    playFromPosition={this.position}
                    onLoading={this.handleSongLoading}
                    onPlaying={this.handleSongPlaying}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                    onPlaying={(position) => {
                        console.log(position.position);
                        this.position = position.position;
                    }}
                />
            </div>
        );
    }

}
