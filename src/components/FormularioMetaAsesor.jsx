import { Formik, Form, Field, ErrorMessage, normalize} from "formik";
import React, { useEffect } from "react";
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

  const [sumaBit,setSumaBit]=useState('')
  const [metaBit1,setMetaBit1]=useState('')
  const [metaBit2,setMetaBit2]=useState('')
  const [metaBit3,setMetaBit3]=useState('')
  const [metaBit4,setMetaBit4]=useState('')
  const [metaBit5,setMetaBit5]=useState('')
  

  const [sumaDias,setSumaDias]=useState('')
  const [metaDias1,setMetaDias1]=useState('')
  const [metaDias2,setMetaDias2]=useState('')
  const [metaDias3,setMetaDias3]=useState('')
  const [metaDias4,setMetaDias4]=useState('')
  const [metaDias5,setMetaDias5]=useState('')


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
      timer: 2000,
    });
  };

  useEffect(() => {
    if(metaBit1 >=0 && metaBit2>=0 && metaBit3>=0 && metaBit4>=0 && metaBit5>=0){
      setSumaBit(metaBit1+metaBit2+metaBit3+metaBit4+metaBit5)
    }

    if(metaDias1>=0 && metaDias2>=0 && metaDias3>=0 && metaDias4>=0 && metaDias5>=0){
      setSumaDias(metaDias1+metaDias2+metaDias3+metaDias4+metaDias5)
    }
    
  },[metaBit1,metaBit2,metaBit3,metaBit4,metaBit5,metaDias1,metaDias2,metaDias3,metaDias4,metaDias5])

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
          meta_bit: sumaBit,
          meta_bit_s1: '',
          meta_bit_s2:'',
          meta_bit_s3: '',
          meta_bit_s4: '',
          meta_bit_s5: '',
          meta_dia: sumaDias,
          meta_dia_s1: '',
          meta_dia_s2: '',
          meta_dia_s3: '',
          meta_dia_s4: '',
          meta_dia_s5: '',
        }}

        validate={(values) => {
          const errors = {};
          
          if (!values.periodo) {
            errors.periodo = "Periodo es requerido";
            
          }
          if (!values.meta_bit_s1) {
            values.meta_bit_s1===0?( setMetaBit1(parseInt(values.meta_bit_s1))):errors.meta_bit_s1 = "meta_bit_s1 es requerido";
            
          }else {
            setMetaBit1(values.meta_bit_s1)
          }
          if (!values.meta_bit_s2) {
            values.meta_bit_s2===0?( setMetaBit2(parseInt(values.meta_bit_s2))):errors.meta_bit_s2 = "meta_bit_s2 isrequired";
          }else{
            setMetaBit2(values.meta_bit_s2)
          }
          if (!values.meta_bit_s3) {
            values.meta_bit_s3===0?( setMetaBit3(parseInt(values.meta_bit_s3))):errors.meta_bit_s3 = "meta_bit_s3 es requerido";
          }else{
            setMetaBit3(values.meta_bit_s3)
          }
          if (!values.meta_bit_s4) {
            values.meta_bit_s4===0?( setMetaBit4(parseInt(values.meta_bit_s4))):errors.meta_bit_s4 = "meta_bit_s4 es requerido";
          }else{
            setMetaBit4(values.meta_bit_s4)
          }
          if (!values.meta_bit_s5) {
            values.meta_bit_s5===0?( setMetaBit5(parseInt(values.meta_bit_s5))):errors.meta_bit_s5 = "meta_bit_s5 es requerido";
          }else{
            setMetaBit5(values.meta_bit_s5)
          }
          if (!values.meta_dia_s1) {
            values.meta_dia_s1===0?( setMetaDias1(parseInt(values.meta_dia_s1))):errors.meta_dia_s1 = "meta_dia_s1 es requerido";
          }else{
            setMetaDias1(values.meta_dia_s1)
          }
          if (!values.meta_dia_s2) {
            values.meta_dia_s2===0?( setMetaDias2(parseInt(values.meta_dia_s2))):errors.meta_dia_s2 = "meta_dia_s2 es requerido";
          }else{
            setMetaDias2(values.meta_dia_s2)
          }
          if (!values.meta_dia_s3) {
            values.meta_dia_s3===0?( setMetaDias3(parseInt(values.meta_dia_s3))):errors.meta_dia_s3 = "meta_dia_s3 es requerido";
          }else{
            setMetaDias3(values.meta_dia_s3)
          }
          if (!values.meta_dia_s4) {
            values.meta_dia_s4===0?( setMetaDias4(parseInt(values.meta_dia_s4))):errors.meta_dia_s4 = "meta_dia_s4 es requerido";
          }else{
            setMetaDias4(values.meta_dia_s4)
          }
          if (!values.meta_dia_s5) {
            values.meta_dia_s5===0?( setMetaDias5(parseInt(values.meta_dia_s5))):errors.meta_dia_s5 = "meta_dia_s5 es requerido";
          }else{
            setMetaDias5(values.meta_dia_s5)
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
            let meta_bit={'meta_bit':sumaBit}
            let meta_dia={'meta_dia':sumaDias}
            values=Object.assign(values, newValue)
            values=Object.assign(values, meta_bit)
            values=Object.assign(values, meta_dia)
             axios.post('https://api.amstigo.com.co/mto/mestasAsesor/update.php', values,config).then(( res ) => {
              setrefreshTable(null)
              if(res.data===1){
                alertSend('Se actualizaron las metas del asesor con éxito', 'success','#002a8cbe' )
                setSumaBit('')
                setSumaDias('')
                
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
          <h2 className="metas-tittle">Metas Mes Bitacora: {sumaBit}</h2>
            <div className="metas">
                <div className="form-Group">
                    {/* <label className="label">meta_bit:</label>
                    <Field className="input" type="number" name="meta_bit" />
                    <ErrorMessage name="meta_bit"/> */}
                </div>
                <div className="form-Group">
                    <label className="label">meta_bit_s1:</label>
                    <Field className="input" type="number" name="meta_bit_s1" normalize={value => (value === '' ? '' : parseInt(value, 10))} />
                    <ErrorMessage name="meta_bit_s1"/>
                </div>
                <div className="form-Group">
                    <label className="label">meta_bit_s2:</label>
                    <Field className="input" type="number" name="meta_bit_s2" />
                    <ErrorMessage name="meta_bit_s2"/>
                </div>
                <div className="form-Group">
                    <label className="label">meta_bit_s3:</label>
                    <Field className="input" type="number" name="meta_bit_s3"/>
                    <ErrorMessage name="meta_bit_s3"/>
                </div>
                <div className="form-Group">
                    <label className="label">meta_bit_s4:</label>
                    <Field className="input" type="number" name="meta_bit_s4"/>
                    <ErrorMessage name="meta_bit_s4"/>
                </div>
                <div className="form-Group">
                    <label className="label">meta_bit_s5:</label>
                    <Field className="input" type="number" name="meta_bit_s5"/>
                    <ErrorMessage name="meta_bit_s5"/>

                </div>
            </div>
            <h2 className="metas-tittle">Metas Mes Dias : {sumaDias}</h2>
            <div className="metas">
                <div className="form-Group">
                    {/* <label className="label">meta_dia:</label>
                    <Field className="input" type="number" name="meta_dia" hide />
                    <ErrorMessage name="meta_dia"/> */}

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
            <div className="button-form">
              <Button>Enviar</Button>
            </div>
            
          </div>
          
        </Form>
      </Formik>
    </div>
  );
};

export default FormMetaAsesor;
