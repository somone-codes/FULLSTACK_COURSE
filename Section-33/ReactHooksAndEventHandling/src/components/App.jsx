import React, {useState} from "react";

function App() {
    let [isMouseOver, changeState] = useState(false)
    
    function onMouseOver() {
        changeState(true)
    }
    function onMouseOut() {
        changeState(false)
    }
    
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: isMouseOver ? "black" : "white"}} onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}>Submit</button>
    </div>
  );

}

export default App;
