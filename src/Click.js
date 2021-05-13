import React from 'react';
import ioClient from './socket';

export default class Agree extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        ioClient.send('left');
    }

    render() {

        return (
            <div className="clickWrap" onClick={this.onClick}>

            </div>
        );
    }

}
