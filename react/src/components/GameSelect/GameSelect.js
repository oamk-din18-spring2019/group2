import React, { Component } from 'react';
import './gameSelect.css';
import { Link } from 'react-router-dom';

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
                    <Link to="/classic">
                        <button className="game-button">Classic</button>
                    </Link>
                    <Link to="/spree">
                        <button className="game-button">Spree</button>
                    </Link>
                    <Link to="/infinite">
                        <button className="game-button">Infinite</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default GameSelect;