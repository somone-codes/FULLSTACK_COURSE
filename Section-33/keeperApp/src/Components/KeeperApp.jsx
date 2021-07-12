import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../starterNotes"

function KeeperApp() {
    let test = true;
    return  <div>
                <Header/>
                { test === true && <Note key="0" noteTitle="This is a test title" noteContent="This is a test content"/> }
                { test === true ? undefined :
                    notes.map((note)=> <Note key={note.id} noteTitle={note.title} noteContent={note.content}/>)}
                <Footer/>
            </div>
}

export default KeeperApp