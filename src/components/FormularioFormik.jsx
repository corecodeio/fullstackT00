import React, { useState, useEffect } from "react";
import { Formik } from "formik";
const FormularioFormik = () => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  let listUsername = ['jose', 'leonardo'];

  useEffect(()=>{
      //lea el token
  },[])
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: '',
          password: '',
          passwordConfirm: ''
        }}
        validate={(values) => {
          let errors = {}
          if (!values.username) {
            errors.username = 'debe escribir username'
          } else if (!/^[A-Z0-9]{0,20}$/i.test(values.username)) {
            errors.username = 'debe usar letras o numero y tener entre 5 y 20 caracteres.'
          } else if (listUsername.includes(values.username)) {
            errors.username = 'el username ya existe'
          }
          if (!values.email) {
            errors.email = 'debe escribir un mail'
          } else if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(values.email)) {
            errors.email = 'debe escribir un mail valor'
          }
          if (!values.passwordConfirm) {
            errors.passwordConfirm = 'debe escribir una password'
          } else if (values.password !== values.passwordConfirm) {
            errors.passwordConfirm = 'la password no es igual.'
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values)
          listUsername.push(values.username);
          console.log(listUsername)
          resetForm();
          setFormularioEnviado(true);
          setTimeout(() => {
            setSubmitting(false)
          }, 3000);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          isSubmitting,
          errors,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.username && errors.username && <p>{errors.username}</p>}
            </div>
            <div>
              <label htmlFor="email">email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && <p>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password">password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && <p>{errors.password}</p>}
            </div>
            <div>
              <label htmlFor="passwordConfirm">repetir password:</label>
              <input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                value={values.passwordConfirm}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.passwordConfirm && errors.passwordConfirm && <p>{errors.passwordConfirm}</p>}
            </div>
            <button type="submit" disabled={isSubmitting}>registrar</button>
          </form>
        )}
      </Formik>
      {formularioEnviado && <p>este formulario ya a sido enviado!!!</p>}
    </>
  );
};

export default FormularioFormik;

