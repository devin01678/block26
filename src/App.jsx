import "./App.css";
import ContactList from "./pages/ContactList.jsx";
import { useState } from "react";
import ContactInfo from "./components/ContactInfo.jsx";

export default function App() {
  const [contacts, setContacts] = useState(null);
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactId ? (
        <ContactInfo
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

// export default App;
// import dummyContacts from "./components/ContactList.jsx";
/* {selectedContactId ? <div>Selected Contact View</div> : <ContactList />} */
// {selectedContact ? (
//     <ContactInfo selectedContact
//   )}
