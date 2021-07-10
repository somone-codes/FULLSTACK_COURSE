import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";

const number = 99;
const age = 13;
const inlineStyle = {
    color: 'white',
    backgroundColor: 'blue'
}


function Age() {
    return <p>Am i {` ${age} old?`}</p>
}

const element = (
    <div>
        <Heading/>
        <p style={inlineStyle}>Is your lucky number {number * 2} and mine is {Math.floor(Math.random() * 100)}</p>
        <Age/>
        <p>screw you!</p>
    </div>
);

ReactDOM.render(element, document.getElementById("root"));
