import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const AddStatusForm = (props) => {
  const formik = useFormik({
    initialValues: {
      status: "",
    },

    onSubmit: (values) => {
      props.deactivateEditMode(values);
    },
    validationSchema: Yup.object({
      status: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        autoFocus={true}
        id="status"
        name="status"
        type="status"
        onChange={formik.handleChange}
        onBlur={formik.handleSubmit}
        value={formik.values.status}
      />
      {formik.touched.status && formik.errors.status ? (
        <div>{formik.errors.status}</div>
      ) : null}
    </form>
  );
};
export default AddStatusForm;
