import { Formik, Form, Field } from "formik";
import React from "react";
import Button from "../pure/Button";
import "./FormularioMetaAsesor.css";

const FormMetaAsesor = ({ antiguedad }) => {
  return (
    <div>
      <Formik
        initialValues={{
          antiguedad: antiguedad,
          periodo: "",
          meta_bit: "",
          meta_bit_s1: "",
          meta_bit_s2: "",
          meta_bit_s3: "",
          meta_bit_s4: "",
          meta_bit_s5: "",
          meta_dia: "",
          meta_dia_s1: "",
          meta_dia_s2: "",
          meta_dia_s3: "",
          meta_dia_s4: "",
          meta_dia_s5: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.periodo) {
            errors.periodo = "Periodo is required";
          }
          if (!values.meta_bit) {
            errors.meta_bit = "meta_bit is required";
          }
          if (!values.meta_bit_s1) {
            errors.meta_bit_s1 = "meta_bit_s1 is required";
          }
          if (!values.meta_bit_s2) {
            errors.meta_bit_s2 = "meta_bit_s2 isrequired";
          }
          if (!values.meta_bit_s3) {
            errors.meta_bit_s3 = "meta_bit_s3 is required";
          }
          if (!values.meta_bit_s4) {
            errors.meta_bit_s4 = "meta_bit_s4 is required";
          }
          if (!values.meta_bit_s5) {
            errors.meta_bit_s5 = "meta_bit_s5 is required";
          }
          if (!values.meta_dia) {
            errors.meta_dia = "meta_dia is required";
          }
          if (!values.meta_dia_s1) {
            errors.meta_dia_s1 = "meta_dia_s1 is required";
          }
          if (!values.meta_dia_s2) {
            errors.meta_dia_s2 = "meta_dia_s2 is required";
          }
          if (!values.meta_dia_s3) {
            errors.meta_dia_s3 = "meta_dia_s3 is required";
          }
          if (!values.meta_dia_s4) {
            errors.meta_dia_s4 = "meta_dia_s4 is required";
          }
          if (!values.meta_dia_s5) {
            errors.meta_dia_s5 = "meta_dia_s5 is required";
          }

          return errors;
        }}
      >
        <Form className="formulario">
            <div className="tittle">
                <h1>Antiguedad : {antiguedad}</h1>
                    <div className="form-Group">
                    <label className="label">Periodo:</label>
                    <Field className="input-fecha" type="date" name="" pattern="\d{4}-\d{2}" />
                </div>
            </div>
            
          <div className="container">
            <div className="metas">
                <div className="form-Group">
                    <label className="label">meta_bit:</label>
                    <Field className="input" type="number" name="" />
                </div>
                <div className="form-Group">
                    <label className="label">meta_bit_s1:</label>
                    <Field className="input" type="number" name="" />
                </div>
                <div className="form-Group">
                    <label className="label">meta_bit_s2:</label>
                    <Field className="input" type="number" name="" />
                </div>
                <div className="form-Group">
                    <label className="label">meta_bit_s3:</label>
                    <Field className="input" type="number" name="" />
                </div>
                <div className="form-Group">
                    <label className="label">meta_bit_s4:</label>
                    <Field className="input" type="number" name="" />
                </div>
                <div className="form-Group">
                    <label className="label">meta_bit_s5:</label>
                    <Field className="input" type="number" name="" />
                </div>
            </div>
            <div className="metas">
                <div className="form-Group">
                    <label className="label">meta_dia:</label>
                    <Field className="input" type="number" name="" />
                </div>
                <div className="form-Group">
                    <label className="label">meta_dia_s1:</label>
                    <Field className="input" type="number" name="" />
                </div>
                <div className="form-Group">
                    <label className="label">meta_dia_s2:</label>
                    <Field className="input" type="number" name="" />
                </div>
                <div className="form-Group">
                    <label className="label">meta_dia_s3:</label>
                    <Field className="input" type="number" name="" />
                </div>
                <div className="form-Group">
                    <label className="label">meta_dia_s4:</label>
                    <Field className="input" type="number" name="" />
                </div>
                <div className="form-Group">
                    <label className="label">meta_dia_s5:</label>
                    <Field className="input" type="number" name="" />
                </div>
            </div> 
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormMetaAsesor;
