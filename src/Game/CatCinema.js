import React from 'react';

export default class CatCinema extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: [
                {img: "/cat/1.png", answer: "/cat/1.1.png", text: "Джентельмены удачи"},
                {img: "/cat/2.png", answer: "/cat/2.1.png", text: "Формула любви"},
                {img: "/cat/3.png", answer: "/cat/3.1.png", text: "Самогонщики"},
                {img: "/cat/4.png", answer: "/cat/4.1.png", text: "12 стульев"},
                {img: "/cat/5.png", answer: "/cat/5.1.png", text: "Приключения Электроника"},
                {img: "/cat/6.png", answer: "/cat/6.1.png", text: "Зелёная миля"},
                {img: "/cat/7.png", answer: "/cat/7.1.png", text: "Титаник"},
                {img: "/cat/8.png", answer: "/cat/8.1.png", text: "Мастер и Маргарита"},
                {img: "/cat/9.png", answer: "/cat/9.1.png", text: "Секретные материалы"},
                {img: "/cat/10.png", answer: "/cat/10.1.png", text: "Пираты Карибского моря"},
                {img: "/cat/11.png", answer: "/cat/11.1.png", text: "Назад в будущее"},
            ],
            i: 0,
            isHelper: 0,
            isFullText: 0,
            isEnd: 0,
        };

        this.next = this.next.bind(this);
        this.help = this.help.bind(this);
        this.show = this.show.bind(this);
    }

    next() {
        if (this.state.i < this.state.word.length - 1)
            this.setState({
                i: ++this.state.i,
                isHelper: 0,
                isFullText: 0
            });
        else
            this.setState({
                isEnd: 1
            });
    }

    help() {
        this.setState({
            isHelper: 1
        });
    }

    show() {
        this.setState({
            isFullText: 1
        });
    }

    render() {
        const {word, isFullText, i} = this.state;
        return (
            <div>
                <h1 className="name-game">Котоматограф 😼</h1>
                {this.state.isEnd === 0 && (
                    <div>
                        <img src={isFullText === 0 ? word[i].img : word[i].answer} style={{objectFit: 'cover'}} height={400} alt=""/>
                        {isFullText === 1 && (
                            <div className="name-game">{word[i].text}</div>
                        )}
                    </div>
                )}
                {this.state.isEnd === 1 && (
                    <div className="questions-text">🎉Конец игры!🎉</div>
                )}
                <div className="btn-group">
                    <button onClick={this.show} className="btn btn-secondary">Ответ</button>
                    <button onClick={this.next} className="btn btn-secondary">Дальше</button>
                </div>
            </div>
        );
    }

}
