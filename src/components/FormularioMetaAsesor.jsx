import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { useState } from 'react';
import "./FormularioMetaAsesor.css";
import Button from "../pure/Button";
import axios from "axios";
import Swal from "sweetalert2";


const FormMetaAsesor = ({setrefreshTable}) => {
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
  
  const alertSend = (title, icon, iconColor) => {
    Swal.fire({
      position: "center",
      iconColor: iconColor,
      icon: icon,
      title: title,
      showConfirmButton: false,
      confirmButtonText: "",
      confirmButtonColor: "",
      timer: 3500,
    });
  };



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
          
          if (!values.periodo) {
            errors.periodo = "Periodo es requerido";
          }
          if (!values.meta_bit) {
            errors.meta_bit = "meta_bit es requerido";
          }
          if (!values.meta_bit_s1) {
            errors.meta_bit_s1 = "meta_bit_s1 es requerido";
          }
          if (!values.meta_bit_s2) {
            errors.meta_bit_s2 = "meta_bit_s2 isrequired";
          }
          if (!values.meta_bit_s3) {
            errors.meta_bit_s3 = "meta_bit_s3 es requerido";
          }
          if (!values.meta_bit_s4) {
            errors.meta_bit_s4 = "meta_bit_s4 es requerido";
          }
          if (!values.meta_bit_s5) {
            errors.meta_bit_s5 = "meta_bit_s5 es requerido";
          }
          if (!values.meta_dia) {
            errors.meta_dia = "meta_dia es requerido";
          }
          if (!values.meta_dia_s1) {
            errors.meta_dia_s1 = "meta_dia_s1 es requerido";
          }
          if (!values.meta_dia_s2) {
            errors.meta_dia_s2 = "meta_dia_s2 es requerido";
          }
          if (!values.meta_dia_s3) {
            errors.meta_dia_s3 = "meta_dia_s3 es requerido";
          }
          if (!values.meta_dia_s4) {
            errors.meta_dia_s4 = "meta_dia_s4 es requerido";
          }
          if (!values.meta_dia_s5) {
            errors.meta_dia_s5 = "meta_dia_s5 es requerido";
          }
          return errors;
        }}

        onSubmit={(values, { resetForm }) => {
          if(antiguedad===null){
            alertSend("Por favor seleccione la antiguedad","warning")
            return
          }
            const config = { 
            headers: { 'content-type': 'multipart/form-data' }
            }
            let newValue = {"antiguedad":antiguedad}
            values=Object.assign(values, newValue)
             axios.post('https://api.amstigo.com.co/mto/mestasAsesor/update.php', values,config).then(( res ) => {
              setrefreshTable(null)
              if(res.data===1){
                alertSend('Se actualizaron las metas del asesor con éxito', 'success','#002a8cbe' )
              }else{
                alertSend('Ocurrio un error, vuelve a intentarlo', 'error')
              }

              setTimeout(() => {
                setrefreshTable(true)
              }, 250);
            })

            
          resetForm();
         
        
        }}
      >
        <Form className="formulario">
            <label className="label-fecha">Periodo: {periodos}</label>
            <div className="tittle">
                <h1>Antiguedad : {antiguedad || "---"}</h1>
            </div>
            
          <div className="container">
          <h2 className="metas-tittle">Metas Bitacora</h2>
            <div className="metas">
                <div className="form-Group">
                    <label className="label">meta_bit:</label>
                    <Field className="input" type="number" name="meta_bit" />
                    <ErrorMessage name="meta_bit"/>
                </div>
                <div className="form-Group">
                    <label className="label">meta_bit_s1:</label>
                    <Field className="input" type="number" name="meta_bit_s1" />
                    <ErrorMessage name="meta_bit_s1"/>
                </div>
                <div className="form-Group">
                    <label className="label">meta_bit_s2:</label>
                    <Field className="input" type="number" name="meta_bit_s2" />
                    <ErrorMessage name="meta_bit_s2"/>
                </div>
                <div className="form-Group">
                    <label className="label">meta_bit_s3:</label>
                    <Field className="input" type="number" name="meta_bit_s3" />
                    <ErrorMessage name="meta_bit_s3"/>
                </div>
                <div className="form-Group">
                    <label className="label">meta_bit_s4:</label>
                    <Field className="input" type="number" name="meta_bit_s4" />
                    <ErrorMessage name="meta_bit_s4"/>
                </div>
                <div className="form-Group">
                    <label className="label">meta_bit_s5:</label>
                    <Field className="input" type="number" name="meta_bit_s5" />
                    <ErrorMessage name="meta_bit_s5"/>

                </div>
            </div>
            <h2 className="metas-tittle">Metas Dias</h2>
            <div className="metas">
                <div className="form-Group">
                    <label className="label">meta_dia:</label>
                    <Field className="input" type="number" name="meta_dia" />
                    <ErrorMessage name="meta_dia"/>

                </div>
                <div className="form-Group">
                    <label className="label">meta_dia_s1:</label>
                    <Field className="input" type="number" name="meta_dia_s1" />
                    <ErrorMessage name="meta_dia_s1"/>
                </div>
                <div className="form-Group">
                    <label className="label">meta_dia_s2:</label>
                    <Field className="input" type="number" name="meta_dia_s2" />
                    <ErrorMessage name="meta_dia_s2"/>
                </div>
                <div className="form-Group">
                    <label className="label">meta_dia_s3:</label>
                    <Field className="input" type="number" name="meta_dia_s3" />
                    <ErrorMessage name="meta_dia_s3"/>
                </div>
                <div className="form-Group">
                    <label className="label">meta_dia_s4:</label>
                    <Field className="input" type="number" name="meta_dia_s4" />
                    <ErrorMessage name="meta_dia_s4"/>

                </div>
                <div className="form-Group">
                    <label className="label">meta_dia_s5:</label>
                    <Field className="input" type="number" name="meta_dia_s5" />
                    <ErrorMessage name="meta_dia_s5"/>
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
