import React, { Component } from 'react';
import './classicgame.css';

class ClassicGame extends Component {
    constructor() {
        super();
        this.state = {
            time: 15000,
            percentage: 100,
            percentage2: 100,
            percentage3: 100
        };
    this.timeout = null;
    this.countDown = this.countDown.bind(this);
    this.timer = 0;
    }

    componentDidMount() {
        let timeLeft = this.state.time;
        this.setState({timeLeft});
        this.timeout = setTimeout(() => this.startTimer(), 2000);
    }

    startTimer() {
        this.timer = setInterval(this.countDown, 10);
    }

    countDown() {
        let time = this.state.time - 10;
        this.setState({time: time});

        if (time >= 10000) {
            let percentage = this.state.percentage - (0.0666666 * 3);
            this.setState({percentage: percentage});
        }

        if (time <= 10000) {
            let percentage2 = this.state.percentage2 - (0.0666666 * 3);
            this.setState({percentage2: percentage2});
        }

        if (time <= 5000) {
            let percentage3 = this.state.percentage3 - (0.0666666 * 3);
            this.setState({percentage3: percentage3});
        }

        if (time === 0) {
            this.timeout = setTimeout(() => this.newQuestion(), 1000); 
            clearInterval(this.timer);
        }
    }

    newQuestion() {
        let timeLeft = this.state.time;
        this.setState({time: 15000});
        this.setState({percentage3: 100});
        this.setState({percentage2: 100});
        this.setState({percentage: 100});
        this.setState({timeLeft});
        this.timer = setInterval(this.countDown, 10);
    }

    

    render() {
        return(
            <div>
                <h2>Time left: </h2>
                {this.state.time}
                <ProgressBar percentage3={this.state.percentage3} percentage2={this.state.percentage2} percentage={this.state.percentage} />
            </div>
        );
    }
}
//Chaning the timer into a bar
const ProgressBar = (props) => {
    return (
        <div className="flexing">
        <div className="progress-bar"> <Filler percentage3={props.percentage3} /></div>
        <div className="progress-bar"> <Filler2 percentage2={props.percentage2} /></div>
        <div className="progress-bar"> <Filler3 percentage={props.percentage} /></div>
        </div>
    )
}

//Filler for the progress bar
const Filler = (props) => {
    return <div className="filler"
    style={{ width: `${props.percentage3}%`}} />
}

const Filler2 = (props) => {
    return <div className="filler2"
    style={{ width: `${props.percentage2}%`}} />
}

const Filler3 = (props) => {
    return <div className="filler3"
    style={{ width: `${props.percentage}%`}} />
}

export default ClassicGame;