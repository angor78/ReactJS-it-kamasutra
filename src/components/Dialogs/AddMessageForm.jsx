import React from "react";
import { useFormik } from "formik";

const AddMessageForm = (props) => {
  const formik = useFormik({
    initialValues: {
      newMessageText: "",
    },
    onSubmit: (values) => {
      props.addNewMessage(values)
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <textarea
          placeholder="Enter your message"
          id="newMessageText"
          name="newMessageText"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.newMessageText}
        />
      </div>
      <button type="submit">Add message</button>
    </form>
  );
};
export default AddMessageForm;
