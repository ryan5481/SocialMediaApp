// import React from "react";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { Link } from "react-router-dom";
// import DynamicForm from "../../components/forms/dynamicForm";

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   lastName: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
// });

// const SignUp = () => {
//   const signUpDetialsFields = [
//     {
//       label: "Phone number or email",
//       value: "loginId",
//       type: "text",
//     },
//     { label: "Full Name", value: "fullName", type: "text" },
//     { label: "Password", value: "password", type: "password" },
//     { label: "Confirm Password", value: "confirmPassword", type: "password" },
//   ];
//   return (
//     <div>
//       <h1>SignUp</h1>
//       <DynamicForm fields={signUpDetialsFields} />
//       <Link to="/login">Login</Link>
//     </div>
//   );
// };

// export default SignUp;

// => ABOVE CODE IS FOR DYNAMIC FORM

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

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

const SignUp = () => {
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          userId: "",
          fullName: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="userId" placeHolder="Email or Phone Number" />
            {errors.userId && touched.userId ? (
              <div>{errors.userId}</div>
            ) : null}
            <Field name="fullName" placeHolder="Full Name" />
            {errors.fullName && touched.fullName ? (
              <div>{errors.fullName}</div>
            ) : null}
            <Field name="password" placeHolder="Password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <Field name="confirmPassword" placeHolder="Confirm Password" />
            {errors.confirmPassword && touched.confirmPassword ? (
              <div>{errors.confirmPassword}</div>
            ) : null}
            <button type="submit">SignUp</button>
          </Form>
        )}
      </Formik>
      Already have an account?<Link to={"/login"}>Login</Link>
    </div>
  );
};

export default SignUp;
