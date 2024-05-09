import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

export default function Contact({ contact }) {
  return (
    <>
      <p>
        <FaUser /> {contact.name}
      </p>

      <p>
        <FaPhone />
        {contact.number}
      </p>
      <button type="submit">Delete</button>
    </>
  );
}
