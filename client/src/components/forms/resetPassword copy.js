import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setLoginDetails } from "../../redux/reducers/userSlice";
import { setAlertMessages } from "../../redux/reducers/notificationSlice";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const sendEmail = async (values) => {
    console.log(values);
    // setEmail(values);
    // console.log(email);

    // const res = await fetch("/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application.json",
    //   },
    //   body: JSON.stringify({
    //     email,
    //   }),
    // });
    // if (res.status == 200) {
    //   // alert(res.data.msg);
    //   // dispatch(setLoginDetails({ dbUserId: res.data.dbUserId }));
    //   // dispatch(setAlertMessages(res.data.msg));
    // }
  };

  return (
    <>
      <div className="form">
        <h1 className="logo">Social</h1>
        <h3 className="titleLabel">Trouble logging in?</h3>
        <p>We'll send you a link to get back into your account.</p>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(values) => {
            sendEmail(values);
          }}
        >
          {({ errors, touched, isValidating, values }) => (
            <Form className="loginFields">
              <input
                name="email"
                type="email"
                id="email"
                value={email}
                className="loginInputText-Field loginElement textField"
                placeholder="Email"
                validate={validateEmail}
                // onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && touched.email && <div>{errors.email}</div>}

              <button className="reset-button button" type="submit">
                Send login link
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
    </>
  );
};

export default ResetPassword;
