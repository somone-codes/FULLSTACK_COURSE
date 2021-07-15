import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom";

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
            <form className="create-note">
                <input name="title" placeholder="Title" value={note.title} onChange={ onInput }/>
                <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={ onInput }/>
                <Fab aria-label="add" onClick={formSubmit}>
                    <AddIcon />
                </Fab>
            </form>
        </div>
    );
}

export default CreateArea;
