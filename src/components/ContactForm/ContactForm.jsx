import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm({ addContact }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={css.input} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={css.input}
          type="tel"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
