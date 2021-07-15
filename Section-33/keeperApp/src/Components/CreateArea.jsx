import React, {useState} from "react";

function CreateArea(props) {

    let [note, noteState] = useState({title:"", content: ""});

    function formSubmit(event) {
        props.onSubmit(note);
        noteState({title:"", content: ""});
        event.preventDefault();
    }

    function onInput(event) {
        noteState(prevState => ( {...prevState, [event.target.name]:event.target.value} ) );
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <input name="title" placeholder="Title" value={note.title} onChange={ onInput }/>
                <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={ onInput }/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
