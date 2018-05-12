import React from 'react';
import {NavLink} from 'react-router-dom'

export default class Agree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: [
                "Утомлённые солнцем",
                "ширли мырли",
                "убить билла",
                "самый лучший фильм",
                "Побег из Шоушенка",
                "Зеленая миля",
                "Форрест Гамп",
                "Иван Васильевич меняет профессию",
                "Достучаться до небес",
                "А зори здесь тихие",
                "Приключения шурика",
                "Любовь и голуби",
                "матрица перезагрузка",
                "Железный человек",
                "трансформеры",
                "Матильда",
                "оно",
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
        let i = this.state.i;
        let reg = this.state.isHelper == 1 ? new RegExp(/[аеёиоуыэюя]/ig) : new RegExp(/[аеёиоуыэюя ]/ig);
        if (this.state.isFullText == 1)
            reg = new RegExp(/[]/ig);
        return (
            <div>
                <h1 className="name-game">Все согласны?!🧐</h1>
                {this.state.isEnd == 0 && (
                    <div className="questions-text">{this.state.word[i].replace(reg, '')}</div>
                )}
                {this.state.isEnd == 1 && (
                    <div className="questions-text">🎉Конец игры!🎉</div>
                )}
                <div className="btn-group">
                    <button onClick={this.help} className="btn btn-secondary">Подсказка</button>
                    <button onClick={this.show} className="btn btn-secondary">Показать слово</button>
                    <button onClick={this.next} className="btn btn-secondary">Дальше</button>
                </div>
            </div>
        );
    }

}