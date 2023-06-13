import React from "react";
import "./login.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from "../pure/Button";
import Swal from "sweetalert2";

const Login = ({setUserValidator}) => {
  const alertSend = (title, icon, iconColor) => {
    Swal.fire({
      position: "center",
      iconColor: iconColor,
      icon: icon,
      title: title,
      showConfirmButton: false,
      confirmButtonText: "",
      confirmButtonColor: "",
      timer: 2000,
    });
  };

  return (
    <div className="container-login">
      <div className="login-card">
        <Formik
          initialValues={{
            cedula: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.cedula) {
              errors.cedula = "Cedula es requerida";
            }

            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            if (values.cedula === 1094264353) {
              alertSend(
                "Bienvenido Julian Andres Gutierrez Sanchez",
                "success",
                "#002a8cbe"
              );
              setUserValidator(true)
            } else if (values.cedula === 1019054812) {
              alertSend(
                "Bienvenido Lina Maria Collazos Diaz",
                "success",
                "#002a8cbe"
              );
              setUserValidator(true)
            } else {
              alertSend("Usuario no valido", "error");
            }

            resetForm();
          }}
        >
          <Form className="form">
            <div className="form-Group-Login">
              <h1>Ingresa a Metas Asesor</h1>
              <label className="label">Cedula:</label>
              <Field className="Input-login" type="number" name="cedula" />
              <ErrorMessage name="cedula" />
            </div>
            <div className="button-container">
              <Button>Enviar</Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
