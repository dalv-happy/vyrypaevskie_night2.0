import React from 'react';
import Sound from 'react-sound';
import ReactKeymaster from 'react-keymaster';
import ioClient from "../socket";


class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playStatus: Sound.status.PAUSED,
            active: 'none'
        };
        this.playSound = this.playSound.bind(this);
        this.active = this.active.bind(this);
        this.count = this.count.bind(this);
        this.song = "horn.mp3";
    }

    componentDidMount() {
        const self = this;
        ioClient.on('connect', () => {
            ioClient.on("event", function (data) {
                console.log(data);
                if (data !== 'none') {
                    self.song = "select2.mp3";
                    self.playSound();
                }
                self.setState({active: data});
            });
        })
    }

    active(val) {
        console.log(val);
        ioClient.send(val);
        if (this.state.active == 'none') {
            this.setState({active: val});
        }
    }

    count(name) {
        this.song = "+1.mp3";
        this.playSound();
        window.cookies.set(name, parseInt(window.cookies.get(name)) + 1, {path: '/'});
        this.setState({active: 'none'});
    }

    playSound() {
        this.position = 0;
        this.setState({
            playStatus: Sound.status.PLAYING,
        });
    }

    render() {
        return (
            <div style={{height: '100%'}}>
                {this.state.active === 'left' && (
                    <div className="left-afore"/>
                )}
                {this.state.active === 'right' && (
                    <div className="right-afore"/>
                )}

                <ReactKeymaster
                    keyName="1"
                    onKeyDown={() => {
                        this.song = "horn.mp3";
                        this.playSound();
                    }}
                />
                <ReactKeymaster
                    keyName="2"
                    onKeyDown={() => {
                        this.song = "looser.mp3";
                        this.playSound();
                    }}
                />
                <ReactKeymaster
                    keyName="3"
                    onKeyDown={() => {
                        this.song = "joke.m4r";
                        this.playSound();
                    }}
                />
                <ReactKeymaster
                    keyName="4"
                    onKeyDown={() => {
                        this.song = "drama.mp3";
                        this.playSound();
                    }}
                />
                <ReactKeymaster
                    keyName="5"
                    onKeyDown={() => {
                        this.song = "nooo.mp3";
                        this.playSound();
                    }}
                />
                <ReactKeymaster
                    keyName="6"
                    onKeyDown={() => {
                        this.song = "select2.mp3";
                        this.playSound();
                    }}
                />
                <Sound
                    url={"/" + this.song}
                    playStatus={this.state.playStatus}
                    playFromPosition={this.position}
                    onPlaying={(position) => {
                        this.position = position.position;
                    }}
                />

                <ReactKeymaster//левая сторона
                    keyName="shift"
                    onKeyDown={() => {
                        this.active("left")
                    }}
                />
                <ReactKeymaster//правая сторона
                    keyName="backspace"
                    onKeyDown={() => {
                        this.active("right")
                    }}
                />
                <ReactKeymaster//сброс
                    keyName="ctrl"
                    onKeyDown={() => {
                        this.active("none")
                        this.setState({active: 'none'});
                    }}
                />


                <ReactKeymaster//Очко левой команде
                    keyName="f"
                    onKeyDown={this.count.bind(this, "left")}
                />
                <ReactKeymaster//Очко правой команде
                    keyName="j"
                    onKeyDown={this.count.bind(this, "right")}
                />


                <div className="container content-center text-center ">
                    {this.props.children}
                    <div style={{width: '100%'}}>
                        <div className="row">
                            <div className="col"><span className="count">{window.cookies.get('left')}</span></div>
                            <div className="col"><span className="count">{window.cookies.get('right')}</span></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default MainLayout;
