import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleChangeInpyt = (newValue) => {
    setInputValue(newValue);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  // const addContact = (newContact) => {
  //   setContacts((prevContact) => {return[...prevContact, newContact]});
  // };

  // const handleSumit = (evt) => {
  //   evt.preventDefault();
  // };

  return (
    <>
      <h1>Phonebook</h1>
      <SearchBox
        inputValue={inputValue}
        handleChangeInpyt={handleChangeInpyt}
      />
      <ContactList contacts={filteredContacts} />
    </>
  );
}

export default App;