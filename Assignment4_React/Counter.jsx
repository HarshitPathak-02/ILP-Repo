import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCounter((prev) => prev + 1);
    }, 5000);

    return () => clearTimeout(timer);
  }, [counter]);


  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{display:"flex", justifyContent:'center', flexDirection:'column', alignItems:"center",padding:'10px'}}>
      <div>
        <h1>COUNTER</h1>
      </div>
      <div style={{display:'flex',gap:'10px'}}>
        <div style={{border:'1px solid black',padding:'10px'}}>Counter: {counter}</div>
        <div style={{border:'1px solid black',padding:'10px'}}>Timer: {timer}</div>
      </div>
    </div>
  );
};

export default Counter;
