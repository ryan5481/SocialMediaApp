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
    dispatch(loginStatus());
    navigate("/");
  };
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          userId: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="userId"
              placeHolder="Username, Email or Phone Number"
            />
            {errors.userId && touched.userId ? (
              <div>{errors.userId}</div>
            ) : null}
            <Field name="password" placeHolder="Password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}

            <button
              className="button login"
              type="submit"
              onClick={() => loggedIn()}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
      <p>
        <Link to="">Forgot password</Link>
      </p>
      <p>
        <Link to="/signup">SignUp</Link>
      </p>
    </div>
  );
};

export default Login;
