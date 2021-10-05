import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";


const AddPostForm = (props) => {
  const formik = useFormik({
    initialValues: {
      newPostText: "",
    },
    validationSchema: Yup.object({
      newPostText: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      props.sendPost(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <textarea
          id="newPostText"
          name="newPostText"
          type="text"
          onChange={formik.handleChange}
          placeholder={"Post"}
          value={formik.values.newPostText}
        />
        {formik.touched.newPostText && formik.errors.newPostText ? (
          <div>{formik.errors.newPostText}</div>
        ) : null}
      </div>

      <button type="submit">Add post</button>
    </form>
  );
};

export default AddPostForm;
