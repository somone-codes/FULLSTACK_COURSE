import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    let [notes, notesState] = useState([])

    function addNote(note) {
        notesState(prevState => ([...prevState, {title: note.title, content: note.content}]) );
    }

    function deleteNote(noteId) {
        notesState((prevState => {
            return prevState.filter((value, index) => noteId !== index)
        }))
    }

    function generateNote(key, title, content) {
        return <Note key={key} id={key} title={title} content={content} deleteNote={deleteNote}/>;
    }

    return (
        <div>
            <Header />
            <CreateArea onSubmit={addNote}/>
            { notes.map((value, index) => generateNote(index, value.title, value.content)) }
            <Footer />
        </div>
    );
}

export default App;
