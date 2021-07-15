import React from "react";
import DeleteForever from "@material-ui/icons/DeleteForever";

function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={(e)=>props.deleteNote(props.id)}>
                <DeleteForever/>
            </button>
        </div>
    );
}

export default Note;
