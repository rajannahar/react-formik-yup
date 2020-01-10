import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

const ValidatedLoginForm = () => {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Logging in: ", values)
          }, 500);
        }}

        // Yup - validation
        validationSchema = {Yup.object().shape({
          email: Yup.string()
            .email()
            .required("Email is required"),
          password: Yup.string()
            .required("No password provided")
            .min(8, "Password is too short, 8 chars minimum")
            .matches(/(?=.*[0-9])/, "Password should contain a number")
        })}

      >

        { props => {
          const {
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          } = props

          return (
            <form autoComplete="off" onSubmit={handleSubmit}>

              <label htmlFor="email">Email</label>
              <input type="text" name="email" value={values.email} placeholder="Enter your email" onChange={handleChange} onBlur={handleChange} className={errors.email && touched.email && "error"} />

              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              <br />

              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={values.password} placeholder="Enter your password" onChange={handleChange} onBlur={handleBlur} className={errors.password && touched.password && "error"} />

              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}

              <br />

              <button type="submit" disabled={isSubmitting}>Login</button>

            </form>
          )
        }}

      </Formik>
    </>
  )
}

export default ValidatedLoginForm