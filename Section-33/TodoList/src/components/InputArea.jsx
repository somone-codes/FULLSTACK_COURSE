import React,{useState} from "react";

function InputArea(props) {

  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} 
        type="text" value={inputText} />

      <button onClick={()=>{
          //this is how we call a parent components function and pass value
        props.addingItem(inputText);
        setInputText("");
      }}>
        <span>Adds</span>
      </button>
    </div>
  );
}

export default InputArea;
