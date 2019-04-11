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
                    <Link to="/classicmode">
                    <button className="select-button">Classic</button>
                    </Link>
                    <button className="select-button">Spree</button>
                    <button className="select-button">Clash</button>
                </div>
            </div>
        )
    }
}

export default GameSelect;