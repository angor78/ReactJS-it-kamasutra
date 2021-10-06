import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import s from "./Login.module.css";

const LoginForm = (props) => {
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
      rememberMe: false,
      captcha: false,
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      props.login(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <div>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={s.fieldsValidate}>{formik.errors.email}</div>
        ) : null}
      </div>

      <label htmlFor="password">Password</label>
      <div>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={s.fieldsValidate}>{formik.errors.password}</div>
        ) : null}
      </div>

      <label htmlFor="rememberMe">RememberMe</label>
      <div>
        <input
          id="rememberMe"
          name="rememberMe"
          type="checkbox"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.rememberMe}
        />
      </div>
      <div className={s.fieldsValidate}>{props.messageFromAPI?props.messageFromAPI[0]:null}</div>
      <button type="submit">Login</button>
    </form>
  );
};
export default LoginForm;
