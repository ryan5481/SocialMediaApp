import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setLoginDetails } from "../../redux/reducers/userSlice";

const LoginSchema = Yup.object().shape({
  loginInputText: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const triggerLogin = async (values) => {
    const res = await axios.post(`http://localhost:9000/login`, values);
    if (res.status == 200) {
      alert(res.data.msg);
      dispatch(setLoginDetails());
      navigate("/messages");
    }
  };

  return (
    <div className="form">
      <h1 className="logo">Social</h1>
      <h2 className="titleLabel">Login</h2>
      <Formik
        initialValues={{ loginInputText: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          triggerLogin(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="loginFields">
            <Field
              name="loginInputText"
              id="loginInputText"
              className="loginInputText-Field loginElement textField"
              placeholder="Username, Email or Phone Number"
            />
            {errors.loginInputText && touched.loginInputText ? (
              <div>{errors.loginInputText}</div>
            ) : null}
            <Field
              name="password"
              id="password"
              className="passwordField loginElement textField"
              placeholder="Password"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}

            <button className="button loginElement loginButton" type="submit">
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
