import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
});

const SignUp = () => {
  const [pfpImage, setPfpImage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const submitFormData = async (values) => {
  //   console.log(values);
  //   const requestOptions = {
  //     method: " ",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(values),
  //   };
  //   const res = await fetch(`http://localhost:9000/signup`, requestOptions);
  //   const data = await res.json();
  //   if (res.status == 200) {
  //     console.log(alert(data.msg));
  //   }
  //   navigate("/login");
  // };
  return (
    <>
      <Formik
        initialValues={{}}
        // validationSchema={SignupSchema}
        onSubmit={(values) => {
          // const valuesWithPfpImg = {...values, }
          const bodyFormData = new FormData();

          Object.keys(values).map((item) => {
            bodyFormData.append(item, values[item]);
          });
          bodyFormData.append("pfpImgName", pfpImage);
          axios({
            method: "post",
            url: "http://localhost:9000/signup",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function(response) {
              if (response.status == 200) {
                alert(response.data.msg);
                navigate("/login");
              } else {
                alert(response.data.msg);
              }
            })
            .catch(function(response) {
              //handle error
              console.log(response);
            });
        }}
      >
        {({ errors, touched, values }) => (
          <div className="form">
            <h1>Social</h1>
            <h2>SignUp</h2>
            <Form>
              <div className="">
                <div className="pfp-input">
                  {" "}
                  Choose a profile picture
                  <Field
                    name="pfpImgName"
                    type="file"
                    placeholder="Profile picture"
                    onChange={(e) => setPfpImage(e.target.files[0])}
                  />
                </div>
                <Field
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  className="loginInputText-Field loginElement textField"
                />
                <Field
                  name="userName"
                  type="text"
                  placeholder="User Name"
                  className="loginInputText-Field loginElement textField"
                />
                <Field
                  name="email"
                  type="text"
                  placeholder="email"
                  className="loginInputText-Field loginElement textField"
                />
                <Field
                  name="phoneNumber"
                  type="number"
                  placeholder="Phone number"
                  className="loginInputText-Field loginElement textField"
                />
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="loginInputText-Field loginElement textField"
                />
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="confirm password"
                  className="loginInputText-Field loginElement textField"
                />
                <button
                  type="submit"
                  className="button loginElement signupButton"
                >
                  SignUp
                </button>
                <div className="linkSpace"></div>
                <p className="link">
                  Already have an account?{" "}
                  <Link to={"/login"} style={{ color: "white" }}>
                    Login
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
