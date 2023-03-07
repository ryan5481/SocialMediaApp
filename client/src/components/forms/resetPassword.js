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
const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async (values) => {
    const res = await axios.post(`http://localhost:9000/login`, values);
    console.log(res.dbUserId);
    if (res.status == 200) {
      // alert(res.data.msg);
      dispatch(setLoginDetails({ dbUserId: res.data.dbUserId }));
      dispatch(setAlertMessages(res.data.msg));
      navigate("/messages");
    }
  };

  return (
    <>
      <div className="form">
        <h1 className="logo">Social</h1>
        <h3 className="titleLabel">Trouble logging in?</h3>
        <p>We'll send you a link to get back into your account.</p>
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
