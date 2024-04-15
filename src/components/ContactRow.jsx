export default function ContactRow({ setSelectedContactId, contact }) {
  console.log(setSelectedContactId);
  function handleClick() {
    console.log(contact, setSelectedContactId);
    setSelectedContactId(contact);
  }
  return (
    <tr onClick={handleClick}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
