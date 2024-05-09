import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelite }) {
  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} onDelite={onDelite} />
          </li>
        ))}
      </ul>
    </>
  );
}
