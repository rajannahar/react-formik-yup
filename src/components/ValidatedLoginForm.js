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
              <input type="text" name="email" value={values.email} placeholder="Enter your email" />

              <br />

              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={values.password} placeholder="Enter your password" />

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