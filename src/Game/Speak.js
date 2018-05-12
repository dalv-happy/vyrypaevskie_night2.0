import React from 'react';
import Sound from 'react-sound';
import {NavLink} from 'react-router-dom'

export default class Speak extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: [
                {name: 'Александр Розенбаум - Гоп-стоп', path: 'mp3/1.mp3', orig: "original/1.mp3"},
                {name: 'Matrang - Медуза', path: 'mp3/2.mp3', orig: "original/2.m4r"},
                {name: 'Hey, Guys Элджей', path: 'mp3/3.mp3', orig: "original/3.mp3"},
                {name: 'Газманов Олег — «Есаул»', path: 'mp3/4.mp3', orig: "original/4.mp3"},
                {name: 'Ленинград - Экспонат', path: 'mp3/5.mp3', orig: "original/5.mp3"},
                {name: 'Oxxxymiron - Город под подошвой', path: 'mp3/6.mp3', orig: "original/6.mp3"},
                {name: 'Pharaoh - Дико, например', path: 'mp3/7.mp3', orig: "original/7.mp3"},
                {name: 'Земфира «Хочешь?»', path: 'mp3/8.mp3', orig: "original/8.mp3"},
                {name: 'Стрыкало наше лето', path: 'mp3/9.mp3', orig: "original/9.m4r"},
                {name: 'Lil Pump - Gucci Gang', path: 'mp3/10.mp3', orig: "original/10.mp3"},
                {name: 'Каста - Вокруг шум', path: 'mp3/11.mp3', orig: "original/11.mp3"},
                {name: 'Скриптонит – Сливочное масло', path: 'mp3/12.mp3', orig: "original/12.mp3"},
                {name: 'Руки в верх - А Он Тебя Целует', path: 'mp3/13.mp3', orig: "original/13.m4r"},
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