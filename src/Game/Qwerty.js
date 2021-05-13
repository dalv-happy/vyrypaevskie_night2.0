import React from 'react';
import Sound from 'react-sound';

export default class Agree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: [
                "Герой нашего времени",
                "Двенадцать стульев",
                "Гарри Поттер и философский камень",
                "Портрет Дориана Грея",
                "Отцы и дети",
                "Над пропастью во ржи",
                "Алиса в Стране чудес",
                "Капитанская дочка",
                "Старик и море",
                "Фауст",
                "О дивный новый мир",
                "Скотный двор",
                "Тихий Дон",
                "Незнайка на Луне",
                "похороните меня за плинтусом",
                "Приключения Тома Сойера. Приключения Гекльберри Финна",
            ],
            i: 0,
            isFullText: 0,
            isEnd: 0,
        };

        this.next = this.next.bind(this);
        this.show = this.show.bind(this);
        this.puntoSwitcher = this.puntoSwitcher.bind(this);
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

    show() {
        this.setState({
            isFullText: 1
        });
    }

    puntoSwitcher(str) {
        const rus = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ё', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ' '];
        const en = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', ' '];

        let tmp = "";

        for (let i = 0; i < str.length; i++) {
            let index = rus.indexOf(str[i]);
            tmp += en[index];
        }

        return this.state.isFullText == 1 ? str : tmp;
    }

    render() {
        let i = this.state.i;
        let reg = this.state.isHelper == 1 ? new RegExp(/[аеёиоуыэюя]/ig) : new RegExp(/[аеёиоуыэюя ]/ig);
        if (this.state.isFullText == 1) {
            reg = new RegExp(/[]/ig);
        }
        return (
            <div>
                <h1 className="name-game">Qwerty⌨️</h1>
                {this.state.isEnd == 0 && (
                    <div className="questions-text">{this.puntoSwitcher(this.state.word[i])}</div>
                )}
                {this.state.isEnd == 1 && (
                    <div className="questions-text">🎉Конец игры!🎉</div>
                )}
                <div className="btn-group">
                    <button onClick={this.show} className="btn btn-secondary">Показать слово</button>
                    <button onClick={this.next} className="btn btn-secondary">Дальше</button>
                </div>
            </div>
        );
    }

}
