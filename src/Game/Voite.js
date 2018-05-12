import React from 'react';
import Sound from "react-sound";
import Confeti from "../Templates/Confeti";

export default class Voite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: [
                {name: "💁🏼‍♀️Наташа", count: "win/3.jpg"},
                {name: "🤷‍♀️Настя", count: "win/7.jpg"},
                {name: "🧐Ильнурчик", count: "win/1.jpg"},
                {name: "🥊Патяй", count: "win/2.jpg"},
                {name: "👷🏻‍♂️Вадим", count: "win/4.jpg"},
                {name: "👩🏼Наталья Снежкина", count: "win/5.jpg"},
                {name: "💆🏼‍♂️Игорь", count: "win/6.jpg"},
            ],
            count: 0,
            isShow: false
        };
        this.count = new Array(7).fill(0);
    }

    show() {

    }

    render() {
        let self = this;
        let max = this.count.indexOf(Math.max(...this.count));

        console.log(max);
        console.log(this.count);
        return (
            <div>
                {this.state.isShow && (
                    <div>
                        <h1 style={{color: 'white'}}>Победитель: {this.state.word[max].name}</h1>
                        <img src={this.state.word[max].count}/>
                        <Sound
                            url="win.mp3"
                            playStatus={Sound.status.PLAYING}
                            playFromPosition="0"
                        />
                    </div>
                )}
                <h4 style={{color: 'white'}}>Проголосовало: {this.state.count}</h4>
                <div className="btn-group">
                    {this.state.word.map((value, index) =>
                        <button onClick={() => {
                            self.count[index] += 1;
                            self.setState({
                                count: ++self.state.count,
                            });
                        }} key={index}
                                className="btn btn-secondary">{value.name} {this.state.isShow && self.count[index]}</button>
                    )}
                </div>

                <br/>

                <button className="btn btn-light mt-5" onClick={() => {

                    this.setState({
                        isShow: true
                    })
                }}>
                    Показать ответы
                </button>

                {this.state.isShow && (
                    <div style={{position: 'relative'}}>
                        <Confeti style={{left: 0}}/>
                        <Confeti style={{right: 0}}/>
                    </div>
                )}
            </div>
        );
    }

}