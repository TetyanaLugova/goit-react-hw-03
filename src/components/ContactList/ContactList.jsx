import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelite }) {
  return (
    <>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} onDelite={onDelite} />
          </li>
        ))}
      </ul>
    </>
  );
}
