import React, { useState } from "react";
import "./Calculator.css";
/* eslint-disable no-eval */
export default function Calculator() {
  const [value, setValue] = useState("");
  return (
    <div className="container">
      <h1>Calculator</h1>
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} />
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <input
                type="button"
                style={{ background: "red" }}
                value="AC"
                className="operator"
                onClick={(e) => setValue("")}
              />
              <input
                type="button"
                value="DE"
                className="operator"
                onClick={(e) => setValue(value.slice(0, -1))}
              />
              <input
                type="button"
                value="."
                className="operator"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="/"
                className="operator"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="e"
                className="operator"
                onClick={(e) => setValue(value + Math.E)}
              />
            </div>
            <div>
              <input
                type="button"
                value="7"
                className="numeric"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="8"
                className="numeric"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="9"
                className="numeric"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="*"
                className="operator"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="tan"
                className="operator"
                onClick={() => setValue(Math.tan(eval(value)))}
              />
            </div>
            <div>
              <input
                type="button"
                value="4"
                className="numeric"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="5"
                className="numeric"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="6"
                className="numeric"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="+"
                className="operator"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="cos"
                className="operator"
                onClick={() => setValue(Math.cos(eval(value)))}
              />
            </div>
            <div>
              <input
                type="button"
                value="1"
                className="numeric"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="2"
                className="numeric"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="3"
                className="numeric"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="-"
                className="operator"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="sin"
                className="operator"
                onClick={() => setValue(Math.sin(eval(value)))}
              />
            </div>
            <div>
              <input
                type="button"
                value="00"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="0"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="("
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value=")"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="ln"
                className="operator"
                onClick={() => setValue(Math.log(eval(value)))}
              />
            </div>
            <div>
              <input
                type="button"
                value="%"
                className="operator"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="√"
                className="operator"
                onClick={() => setValue(Math.sqrt(eval(value)).toString())}
              />
              <input
                type="button"
                value="x²"
                className="operator"
                onClick={() => setValue(Math.pow(eval(value), 2).toString())}
              />
              <input
                type="button"
                value="1/x"
                className="operator"
                onClick={() => setValue((1 / eval(value)).toString())}
              />
              <input
                type="button"
                value="x³"
                className="operator"
                onClick={(e) => setValue(Math.pow(eval(value), 3).toString())}
              />
              <input
                type="button"
                value="log"
                className="operator"
                onClick={() => setValue(Math.log10(eval(value)))}
              />
              <input
                type="button"
                value="^"
                className="operator"
                onClick={(e) => setValue(value + "**")}
              />
              <input
                type="button"
                value="π"
                className="operator"
                onClick={(e) => setValue(value + Math.PI)}
              />
              <input
                type="button"
                className="equal"
                value="="
                onClick={(e) => setValue(eval(value))}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
