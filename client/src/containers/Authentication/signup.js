import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import DynamicForm from "../../components/forms/dynamicForm";

const SignupSchema = Yup.object().shape({
  userId: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const signUpFields = [
  {
    label: "fullName",
    value: "fullName",
    type: "text",
    placeholder: "Full Name",
  },
  {
    label: "userName",
    value: "userName",
    type: "text",
    placeholder: "Username",
  },
  { label: "email", value: "email", type: "text", placeholder: "Email" },
  {
    label: "phoneNumber",
    value: "phoneNumber",
    type: "text",
    placeholder: "Phone Number",
  },
  {
    label: "password",
    value: "password",
    type: "password",
    placeholder: "password",
  },
  {
    label: "confirmPassword",
    value: "password",
    type: "password",
    placeholder: "Confirm Password",
  },
];

const SignUp = () => {
  return (
    <div>
      <DynamicForm
        fields={signUpFields}
        onSuccessNavigate="/login"
        apiEndpoint="/signup"
      />
    </div>
  );
};

export default SignUp;
