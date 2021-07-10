import React from "react";
import ReactDOM from "react-dom";

const element = (
    <div>
        <h1>heading</h1>
        <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
        </ul>
    </div>
);

ReactDOM.render(element, document.getElementById("root"));
