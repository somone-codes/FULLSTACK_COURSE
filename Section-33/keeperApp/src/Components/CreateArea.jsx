import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

    let [note, noteState] = useState({title:"", content: ""});
    let [expanded, expandedState] = useState(false);

    function formSubmit(event) {
        props.onSubmit(note);
        noteState({title:"", content: ""});
        expandedState(false);
        event.preventDefault();
    }

    function onInput(event) {
        expandedState(true);
        noteState(prevState => ( {...prevState, [event.target.name]:event.target.value} ) );
    }

    return (
        <div>
            <form className="create-note">
                {
                    expanded
                    &&
                    <input name="title" placeholder="Title" value={note.title} onChange={ onInput } hidden={!expanded} />
                }
                <textarea name="content" placeholder="Take a note..." rows={expanded ? 3: 1} value={note.content}
                          onChange={ onInput }/>
                <Zoom in={expanded}>
                    <Fab aria-label="add" onClick={formSubmit}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
