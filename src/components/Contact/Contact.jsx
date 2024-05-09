import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

export default function Contact({ contact, onDelite }) {
  return (
    <>
      <p>
        <FaUser /> {contact.name}
      </p>

      <p>
        <FaPhone />
        {contact.number}
      </p>
      <button type="submit" onClick={() => onDelite(contact.id)}>
        Delete
      </button>
    </>
  );
}
