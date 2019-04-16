import React, { Component } from 'react';
import './classicgame.css';

class ClassicGame extends Component {
      constructor() {
      super();
      this.state = { 
          time: {},
          seconds: 15,
          percentage: 100
      };
      this.timer = 0;
      this.timeout = null;
      // this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
}

    //function that gets called every time the timer goes to 0.
    newQuestion() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState( {time: {}, seconds: 15});
        this.setState({percentage: 100})
        this.setState({ time: timeLeftVar });
        this.timer = setInterval(this.countDown, 1000);
    }

    //dunno wtf this is
    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    //When the page loads (when user starts a match), automatically starts counting down the timer.
        componentDidMount() {  
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        this.timeout = setTimeout(() => this.startTimer(), 2000);
    }

    //activates the timer for the first time.
    startTimer() {
        this.timer = setInterval(this.countDown, 1000);
    }

    // Remove one second, set state so a re-render happens.
    countDown() {
        let seconds = this.state.seconds - 1;
        let percentage = this.state.percentage - 6.666666;
        this.setState({percentage: percentage})
        this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });

    // Check if we're at zero.
        if (seconds === 0) {
            this.timeout = setTimeout(() => this.newQuestion(), 1000); 
            clearInterval(this.timer);
        }
    }

    render() {
        return(
          <div>
            <h2>Time left: </h2>
            {this.state.time.s}
            <ProgressBar percentage={this.state.percentage} />
          </div>
        );
    }
}

//Chaning the timer into a bar
const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
        <Filler percentage={props.percentage} />
        </div>
    )
}

//Filler for the progress bar
const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%`}}/>
}

export default ClassicGame;