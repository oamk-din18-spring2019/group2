import React, { Component } from 'react';
import './classicmode.css';
import axios from 'axios';
import Table from 'react-bootstrap/lib/Table';
import { Link } from 'react-router-dom';

class ClassicMode extends Component {

    state = {
        top10Players: []
    }

    getData(url, stateName){
    axios.get(url)
    .then(({ data }) => {
        this.setState({ [stateName]: data });
        console.log(this.state.top10Players);
    })
    }

    componentDidMount() {
        this.getData('https://jsonplaceholder.typicode.com/users', "top10Players");
    }
    

    render() {
        const {top10Players} = this.state;
        return (
        <div>
            <div className="Table">
                <Table striped bordered hover className="blackfont">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {top10Players.map((row, index) => (
                    <tr key={row.username}>
                    <td>{index + 1}</td>
                    <td>{row.username}</td>   
                    <td>{row.email}</td>   
                    </tr>
                    )
                    )}
                </tbody>
                </Table>
            </div>
            <div className="text-center">
                <Link to ="/classicgame">
                <button className="select-button">Start Match</button>
                </Link>
                <Link to="/gameselect">
                <button className="select-button">Go Back</button>
                </Link>
            </div>
        </div>
        )
    }
}

export default ClassicMode;