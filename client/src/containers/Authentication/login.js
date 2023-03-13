import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setLoginDetails } from "../../redux/reducers/userSlice";
import { setAlertMessages } from "../../redux/reducers/notificationSlice";

const LoginSchema = Yup.object().shape({
  loginInputText: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async (values) => {
    const res = await axios.post(`http://localhost:9000/login`, values);
    alert(res.data.msg);
    if (res.status == 200) {
      navigate("/");
      dispatch(
        setLoginDetails({
          dbUserId: res.data.dbUserId,
          userName: res.data.userName,
          fullName: res.data.fullName,
          pfpImgName: res.data.pfpImgName,
        })
      );
      dispatch(setAlertMessages(res.data.msg));
    }
  };

  return (
    <>
      <div className="form">
        <h1 className="logo">Social</h1>
        <h2 className="titleLabel">Login</h2>
        <Formik
          initialValues={{ loginInputText: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            handleLogin(values);
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
            <Link className="link" to="/resetpassword">
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
    </>
  );
};

export default Login;
