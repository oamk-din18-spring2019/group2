import React, { Component } from 'react';
import './gameSelect.css';

class GameSelect extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="select-wrapper">
                <div className="button-group">
                    <h1>Game Select</h1>
                    <button className="select-button">Classic</button>
                    <button className="select-button">Spree</button>
                    <button className="select-button">Clash</button>
                </div>
            </div>
        )
    }
}

export default GameSelect;