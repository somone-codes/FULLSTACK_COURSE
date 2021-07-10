import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../starterNotes"

function KeeperApp() {
    return  <div>
                <Header/>
                { notes.map((note)=> <Note key={note.id} noteTitle={note.title} noteContent={note.content}/>) }
                <Footer/>
            </div>
}

export default KeeperApp