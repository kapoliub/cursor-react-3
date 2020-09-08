import React from "react";
import Timer from "./Timer";


export default class InfiniteTimer extends React.Component{
  state = {
    time: 1000 * 1000 // ms, = 1000s
  }

  onTimeEnd = () => this.setState({ time: 1000 * 1000 })
  
  onTimeChange = (time) => this.setState({ time })

  render(){
    return <Timer onTick={(time) => console.log(`Time left: ${time}`)} time={this.state.time} onTimeChange={this.onTimeChange} onTimeEnd={this.onTimeEnd} step={10000} autostart />
  }
}


