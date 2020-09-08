import React from "react";

const Timer = ({ time, paused, start, stop, onTick, divWidth }) => {
  if (!paused) {
    onTick(time);
  }
  return (
    <div>
      <h1>{time}</h1>
      <button
        className={paused ? "paused" : ""}
        onClick={paused ? start : stop}
      >
        {paused ? "Start" : "Pause"}
      </button>
      <div
        style={{
          height: "5px",
          backgroundColor: "red",
          width: `calc(${time} * (100% /${divWidth})`,
          transition: "1s",
        }}
      ></div>
    </div>
  );
};

export default Timer;
