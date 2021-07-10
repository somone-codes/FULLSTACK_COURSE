import React from "react";

const fname = "Some";
const lname = "One";

function Heading() {
    return <h1 className="heading" contentEditable="true" spellCheck="false" autofocus="false">Hello{fname + " " + lname}</h1>
}

export default Heading;