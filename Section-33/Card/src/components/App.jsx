import React from "react";
import Card from "./Card";
import contacts from "../contacts";


function createCard(contact){
    return <Card
        key={contact.id}
        keyId={contact.id}
        name={contact.name}
        phone={contact.phone}
        email={contact.email}
        image={contact.imgURL}/>
}

function App() {
  return (
    <div>
        <h1 className="heading">My Contacts</h1>
        { contacts.map(createCard) }
    </div>
  );
}

export default App;
