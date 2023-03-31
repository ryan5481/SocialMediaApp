import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setLoginDetails } from "../../redux/reducers/userSlice";
import { setAlertMessages } from "../../redux/reducers/notificationSlice";

import { io } from "socket.io-client";
const socket = io("http://localhost:9000");

const LoginSchema = Yup.object().shape({
  loginInputText: Yup.string().required(
    "Username, email or phone number is required"
  ),
  password: Yup.string().required("Password is required"),
});

const Login = ({ socket }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async (values, e) => {
    const res = await axios.post("http://localhost:9000" + "/login", values);
    if (res.status == 200) {
      alert(res.data.msg);
      navigate("/");
      dispatch(
        setLoginDetails({
          dbUserId: res.data.dbUserId,
          userName: res.data.userName,
          fullName: res.data.fullName,
          email: res.data.email,
          phoneNumber: res.data.phoneNumber,
          pfpImgName: res.data.pfpImgName,
        })
      );
      dispatch(setAlertMessages(res.data.msg));
      // create an emit event when a user goes online(logs in)
      socket.emit("userLoggedIn", {
        dbUserId: res.data.dbUserId,
        userName: res.data.userName,
        fullName: res.data.fullName,
        socketID: socket.id,
      });
    }
  };

  return (
    <>
      <div className="form">
        <p1 className="logo">Social</p1>
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
                type="password"
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
