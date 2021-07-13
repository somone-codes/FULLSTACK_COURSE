import React, {useState} from "react";

export default function App() {
    let [isMouseOver, changeState] = useState(false)
    let [inputValue, changeInputValue] = useState("")
    let [name, changeName] = useState("")

    function formSubmit(event) {
        changeName(inputValue);
        changeInputValue(""); //clean up the input for new input
        event.preventDefault(); // this is to prevent the next step on form submit which is page refresh
    }

    return (
        <div className="container">
            <h1>Hello {name}</h1>
            <form onSubmit={formSubmit}>
                <input type="text" placeholder="What's your name?" value={inputValue}
                       onChange={event => changeInputValue(event.target.value)}/>
                <button type="submit" style={{backgroundColor: isMouseOver ? "black" : "white"}}
                        onMouseOver={()=>changeState(true)}
                        onMouseOut={()=>changeState(false)}>
                    Submit</button>
            </form>
        </div>
    );

}
