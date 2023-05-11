import { Formik, Form, Field } from "formik";
import React from "react";
import { useState } from 'react';
import "./FormularioMetaAsesor.css";
import Button from "../pure/Button";

const FormMetaAsesor = () => {
  const [antiguedad, setAntiguedad] = useState(null);
  const date = new Date();
  const month = date.getMonth() + 1
  var fullMonth = ''
  month > 0 && month <= 9 ? fullMonth = '0' + month : fullMonth = month
  const periodos = date.getFullYear() + '-' + fullMonth
  const mayores = '>60'
  const menores = '<=60'
  function handleChange(event) {
    setAntiguedad(event.target.value);
  }



  return (
    <div>
      <div className="form-select">
        <label className="label">Selecciona la Antiguedad: </label>
        <select className="input" onChange={handleChange}>
          <option></option>
          <option value={mayores}>{mayores}</option>
          <option value={menores}>{menores}</option>
        </select>
      </div>
     
      
      <Formik
        initialValues={{
          antiguedad: antiguedad,
          periodo: periodos,
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
          if (!values.antiguedad) {
            errors.antiguedad = "Antiguedad is required";
          }

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
            <label className="label-fecha">Periodo: {periodos}</label>
            <Field className="input-fecha" type="text" name="periodo" disabled/>
            <div className="tittle">
                <h1>Antiguedad : {antiguedad || "---"}</h1>
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
            <Button>Enviar</Button>
          </div>
          
        </Form>
      </Formik>
    </div>
  );
};

export default FormMetaAsesor;
