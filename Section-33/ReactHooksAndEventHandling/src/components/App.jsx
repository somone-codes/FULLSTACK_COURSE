import React, {useState} from "react";

export default function App() {
    let [isMouseOver, changeState] = useState(false)
    let [inputValue, changeInputValue] = useState({
        fName: "",
        lName: ""
    })
    let [name, changeName] = useState({
        fName: "",
        lName: ""
    })

    function inputChange(event) {
        let value = event.target.value;
        let name = event.target.name; // donot use the event object inside state change functions

        changeInputValue((prevState) => {
            //prev state hold the values as per the last change in state
            let temp = {
                fName: prevState.fName,
                lName: prevState.lName,
            };
            //doing this in order to keep the state of the other object as previously
            if (name === "fName") {
                temp.fName = value;
            } else if (name === "lName") {
                temp.lName = value;
            }
            return temp;
        });
    }
    function formSubmit(event) {
        changeName(inputValue);
        changeInputValue({
            fName: "",
            lName: ""
        }); //clean up the input for new input
        event.preventDefault(); // this is to prevent the next step on form submit which is page refresh
    }

    return (
        <div className="container">
            <h1>Hello {name.fName} {name.lName}</h1>
            <form onSubmit={formSubmit}>
                <input type="text" name="fName" placeholder="First Name" value={inputValue.fName}
                       onChange={inputChange}/>
                <input type="text" name="lName" placeholder="Last Name" value={inputValue.lName}
                       onChange={inputChange}/>
                <button type="submit" style={{backgroundColor: isMouseOver ? "black" : "white"}}
                        onMouseOver={()=>changeState(true)}
                        onMouseOut={()=>changeState(false)}>
                    Submit</button>
            </form>
        </div>
    );

}
