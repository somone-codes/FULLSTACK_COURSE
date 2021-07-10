import React from "react";
import ReactDOM from "react-dom";

const number = 99;
const fname = "Some";
const lname = "One";
const age = 13;
const element = (
    <div>
        <h1>Hello {fname + " " + lname}</h1>
        <p>Is your lucky number {number * 2} and mine is {Math.floor(Math.random() * 100)}</p>
        <p>Am i {` ${age} old?`}</p>
        <p>screw you!</p>
    </div>
);

ReactDOM.render(element, document.getElementById("root"));
