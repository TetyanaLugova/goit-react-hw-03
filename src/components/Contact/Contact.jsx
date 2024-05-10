import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ contact, onDelite }) {
  return (
    <>
      <div>
        <p className={css.name}>
          <FaUser /> {contact.name}
        </p>

        <p className={css.number}>
          <FaPhone /> {contact.number}
        </p>
      </div>

      <button
        className={css.btn}
        type="submit"
        onClick={() => onDelite(contact.id)}
      >
        Delete
      </button>
    </>
  );
}
