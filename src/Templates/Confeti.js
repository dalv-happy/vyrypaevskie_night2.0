import React from 'react';
import {NavLink} from 'react-router-dom'

export default class Confeti extends React.Component {

    render() {
        return (
            <div className="confeti-block" style={this.props.style}>
                <div className="party-popper">🎉</div>
                <div className="cannon">
                    <div className="cannon__path cannon__path--sm cannon__path--angle-2">
                        <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
                        <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
                        <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
                        <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-1"></div>
                        <div className="cannon__confetti-spacer"></div>
                    </div>
                    <div className="cannon__path cannon__path--md cannon__path--angle-1">
                        <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
                        <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-2"></div>
                        <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
                        <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
                        <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-4"></div>
                        <div className="cannon__confetti-spacer"></div>
                    </div>
                    <div className="cannon__path cannon__path--lg cannon__path--angle0">
                        <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
                        <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-4"></div>
                        <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
                        <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
                        <div className="cannon__confetti-spacer"></div>
                    </div>
                    <div className="cannon__path cannon__path--md cannon__path--angle1">
                        <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
                        <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
                        <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-4"></div>
                        <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
                        <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
                        <div className="cannon__confetti-spacer"></div>
                    </div>
                    <div className="cannon__path cannon__path--sm cannon__path--angle2">
                        <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
                        <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
                        <div className="cannon__confetti cannon__confetti--flake cannon__confetti--color-4"></div>
                        <div className="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
                        <div className="cannon__confetti-spacer"></div>
                    </div>
                </div>
            </div>
        );
    }

}