import { Formik } from "formik";
import React from "react";

const FormMetaAsesor = (antiguedad) => {
  return (
    <div>
      <Formik>
        initialValues =
        {{
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
        
        validate ={(values) => {
          const errors = {};
        //   !values.meta_bit ? (errors.meta_bit = "Required") : "";
        //   !values.meta_bit_s1 ? (errors.meta_bit_s1 = "Required") : "",
        //   !values.meta_bit_s2 ? (errors.meta_bit_s2 = "Required") : "";
        //   !values.meta_bit_s3 ? (errors.meta_bit_s3 = "Required") : "";
        //   !values.meta_bit_s5 ? (errors.meta_bit_s4 = "Required") : "";
        //   !values.meta_dia ? (errors.meta_dia = "Required") : "";
        //   !values.meta_dia_s1 ? (errors.meta_dia_s1 = "Required") : "";
        //   !values.meta_dia_s2 ? (errors.meta_dia_s2 = "Required") : "";
        //   !values.meta_dia_s3 ? (errors.meta_dia_s3 = "Required") : "";
        //   !values.meta_dia_s4 ? (errors.meta_dia_s4 = "Required") : "";
        //   !values.meta_dia_s5 ? (errors.meta_dia_s5 = "Required") : "";

                if(!values.meta_bit) {
                    errors.meta_bit = "Required"
                }
                if(!values.meta_bit_s1) {
                    errors.meta_bit_s1 = "Required"
                }
                if(!values.meta_bit_s2) {
                    errors.meta_bit_s2 = "Required"
                }
                if(!values.meta_bit_s3) {
                    errors.meta_bit_s3 = "Required"
                }
                if(!values.meta_bit_s4) {
                    errors.meta_bit_s4 = "Required"
                }
                if(!values.meta_bit_s5) {
                    errors.meta_bit_s5 = "Required"
                }
                if(!values.meta_dia) {
                    errors.meta_dia = "Required"
                }
                if(!values.meta_dia_s1) {
                    errors.meta_dia_s1 = "Required"
                }
                if(!values.meta_dia_s2) {
                    errors.meta_dia_s2 = "Required"
                }
                if(!values.meta_dia_s3) {
                    errors.meta_dia_s3 = "Required"
                }
                if(!values.meta_dia_s4) {
                    errors.meta_dia_s4 = "Required"
                }
                if(!values.meta_dia_s5) {
                    errors.meta_dia_s5 = "Required"
                }
          return errors;
        }}
      </Formik>
    </div>
  );
};

export default FormMetaAsesor;
