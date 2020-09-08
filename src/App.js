import React, { Component } from "react";
import "./App.css";
import Timer from "./components/Timer";

export default class App extends Component {
  state = {
    time: 60,
    paused: true,
    step: 1000,
    divWidth: 60,
  };

  tick = () => {
    this.setState({ time: this.state.time - 1 });
  };

  changeHandler = (e) => {
    if (this.state.paused) {
      this.setState({
        time: +e.target.value,
        divWidth: +e.target.value,
      });
    }
  };

  startTimer = () => {
    this.interval = setInterval(() => {
      if (this.state.time) {
        this.setState({ time: this.state.time - 1 });
      }
      if (this.state.time < 1) {
        clearInterval(this.interval);
        this.setState({ paused: true });
      }
    }, this.state.step);
    this.setState({ paused: false });
  };

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({ paused: true });
  };

  componentDidMount() {
    this.startTimer();
  }

  render() {
    return (
      <div>
        <input onBlur={this.changeHandler}></input>
        <Timer
          onTick={(time) => console.log(`Time left: ${time}`)}
          time={this.state.time}
          paused={this.state.paused}
          start={this.startTimer}
          stop={this.stopTimer}
          divWidth={this.state.divWidth}
        />
      </div>
    );
  }
}
