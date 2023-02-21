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

// const Login = () => {
//   const loginDetialsFields = [
//     {
//       label: "Username, Phone Number or Email",
//       value: "loginId",
//       type: "text",
//     },
//     { label: "Password", value: "password", type: "password" },
//   ];
//   return (
//     <div>
//       <h1>Login</h1>
//       <DynamicForm fields={loginDetialsFields} />
//       <p>
//         <Link to="">Forgot password</Link>
//       </p>

//       <p>
//         <Link to="/signup">Signup</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

// => ABOVE CODE IS FOR DYNAMIC FORM

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginStatus } from "../../redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  userId: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = () => {
    dispatch(loginStatus(true));
    navigate("/messages");
  };
  return (
    <div className="form">
      <h1 className="logo">Social</h1>
      <h2 className="titleLabel">Login</h2>
      <Formik
        initialValues={{}}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="loginFields">
            <Field
              className="loginIdField loginElement textField"
              name="userId"
              placeholder="Username, Email or Phone Number"
            />
            {errors.userId && touched.userId ? (
              <div>{errors.userId}</div>
            ) : null}
            <Field
              className="passwordField loginElement textField"
              name="loginPasswordField"
              placeholder="Password"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}

            <button
              className="button loginElement loginButton"
              type="submit"
              onClick={() => loggedIn()}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
      <div className="linksSpace">
        <p>
          <Link className="link" to="">
            Forgot password
          </Link>
        </p>
        <p>
          <Link className="link" to="/signup">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
