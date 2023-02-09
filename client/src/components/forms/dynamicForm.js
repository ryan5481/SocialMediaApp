import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const DynamicForm = (props) => {
  const getFieldType = (item) => {
    return (
      <Field name={item.label} type={item.type} placeholder={item.label} />
    );
  };
  return (
    <div>
      <Formik
        initialValues={{}}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched, values }) => (
          <Form>
            {props.fields.map((item, id) => {
              return (
                <div>
                  <Field
                    name={item.label}
                    type={item.type}
                    placeholder={item.label}
                  />
                  {errors[item.label] && touched[item.label] ? (
                    <div>{errors[item.label]}</div>
                  ) : null}
                </div>
              );
            })}
            <button>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
