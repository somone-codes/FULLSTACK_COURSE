import React, {useState} from "react";

function App() {
    let [isMouseOver, changeState] = useState(false)
    let [inputValue, changeInputValue] = useState("")

  return (
    <div className="container">
      <h1>Hello {inputValue}</h1>
      <input type="text" placeholder="What's your name?" value={inputValue}
             onChange={event => changeInputValue(event.target.value)}/>
      <button style={{backgroundColor: isMouseOver ? "black" : "white"}}
              onMouseOver={()=>changeState(true)}
              onMouseOut={()=>changeState(false)}>
          Submit</button>
    </div>
  );

}

export default App;
