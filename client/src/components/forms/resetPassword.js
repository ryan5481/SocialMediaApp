import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Email is required to reset password";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

const ResetPassword = () => {
  const navigate = useNavigate();
  const { dbUserId } = useSelector((state) => state.user);
  const [inputEmail, setInputEmail] = useState({});
  const [enterOtpPage, setEnterOtpPage] = useState(false);
  const [enterNewPwdPage, setEnterNewPwdPage] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [userId, setUserId] = useState("");

  const [otp, setOtp] = useState("");
  const sendEmail = async (values) => {
    setInputEmail(values.email);
    // console.log(inputEmail);

    const res = await axios.post("http://localhost:9000" + "/users", {
      email: inputEmail,
    });
    if (res.status == 200) {
      alert("Password reset OTP sent to email.");
      setEnterOtpPage(true);
      alert(res.data.msg);
      setUserId(res.data.dbUserId);
    }
  };

  const checkOtp = async (e) => {
    e.preventDefault();
    // setOtp(value);
    // console.log(value);
    console.log(otp);
    const res = await axios.post("http://localhost:9000" + "/otps", {
      otp: otp,
    });
    if (res.status == 200) {
      alert(res.data.msg);

      setEnterNewPwdPage(true);
    }
  };

  const resetPassword = async () => {
    console.log(newPassword);
    const res = await axios.put("http://localhost:9000" + "/users", {
      password: newPassword,
      _id: userId,
    });
    if (res.status == 200) {
      alert(res.data.msg);
      navigate("/login");
    }
  };
  return (
    <>
      {enterNewPwdPage == false ? (
        enterOtpPage == false ? (
          <div className="form">
            <p1 className="logo">Social</p1>
            <h3 className="titleLabel">Trouble logging in?</h3>
            <p>We'll send you an OTP to reset your password.</p>
            <Formik
              initialValues={{
                email: "",
              }}
              onSubmit={(values) => {
                // same shape as initial values
                sendEmail(values);
              }}
            >
              {({ errors, touched, isValidating }) => (
                <Form className="loginFields">
                  <Field
                    name="email"
                    type="email"
                    id="email"
                    className="loginInputText-Field loginElement textField"
                    placeholder="Email"
                    validate={validateEmail}
                  />
                  {errors.email && touched.email && <div>{errors.email}</div>}

                  <button className="reset-button button" type="submit">
                    Send OTP
                  </button>
                </Form>
              )}
            </Formik>
            <div className="form-footer">
              <div style={{ position: "relative", top: "10px" }}>
                ⎯⎯⎯⎯⎯⎯⎯⎯⎯ or ⎯⎯⎯⎯⎯⎯⎯⎯⎯
              </div>
              <p>
                <Link className="link" to="/signup">
                  Create a new account
                </Link>
              </p>
            </div>
          </div>
        ) : (
          <div className="form">
            <h1 className="logo">Social</h1>
            <h2 className="titleLabel">Reset password</h2>
            <p>Enter one time password you reveived via email</p>
            <div
              initialValues={{
                otp: "",
              }}
              onSubmit={(value) => {
                // same shape as initial values
                checkOtp(value);
              }}
            >
              <div className="loginFields">
                <input
                  name="otp"
                  type="number"
                  id="otp"
                  className="loginInputText-Field loginElement textField"
                  placeholder="Enter OTP"
                  onChange={(e) => setOtp(e.target.value)}
                />

                <button className="reset-button button" onClick={checkOtp}>
                  Verify
                </button>
              </div>
            </div>
            <div className="form-footer">
              <div style={{ position: "relative", top: "10px" }}>
                ⎯⎯⎯⎯⎯⎯⎯⎯⎯ or ⎯⎯⎯⎯⎯⎯⎯⎯⎯
              </div>
              <p>
                <Link className="link" to="/signup">
                  Create a new account
                </Link>
              </p>
            </div>
          </div>
        )
      ) : (
        <div className="form">
          <h1 className="logo">Social</h1>
          <h2 className="titleLabel">Reset password</h2>
          <p>Enter your new password</p>
          <div
            initialValues={{
              password: "",
            }}
            onSubmit={(value) => {
              // same shape as initial values
              checkOtp(value);
            }}
          >
            <div className="loginFields">
              <input
                name="password"
                type="password"
                id="password"
                className="loginInputText-Field loginElement textField"
                placeholder="Password"
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <button className="reset-button button" onClick={resetPassword}>
                Reset password
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
