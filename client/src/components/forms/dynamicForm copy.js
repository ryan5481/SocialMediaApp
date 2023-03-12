import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAlertMessages } from "../../redux/reducers/notificationSlice";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
});

const DynamicForm = (props) => {
  const [pfpImage, setPfpImage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitFormData = async (values) => {
    alert(values);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    const res = await fetch(
      `http://localhost:9000${props.apiEndpoint}`,
      requestOptions
    );
    const data = await res.json();
    if (res.status == 200) {
      console.log(alert(data.msg));
    }
    navigate(props.onSuccessNavigate);
  };

  return (
    <Formik
      initialValues={{}}
      // validationSchema={SignupSchema}
      onSubmit={(values) => {
        const fieldValues = { values };
        submitFormData(values);
        const bodyFormData = new FormData();
        bodyFormData.append("pfpImgName", pfpImage);
        Object.keys(fieldValues).map((item) => {
          bodyFormData.append(item, fieldValues[item]);
        });

        axios({
          method: "post",
          url: "signup",
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then(function(response) {
            //handle success
            console.log(response);
          })
          .catch(function(response) {
            //handle error
            console.log(response);
          });
      }}
    >
      {({ errors, touched, values }) => (
        <div className="form ">
          <h1>Social</h1>
          <h2>SignUp</h2>
          <input
            type="file"
            name="pfpImgName"
            label="profilePicture"
            placeholder="Choose a profile picture"
            onChange={(e) => setPfpImage(e.target.files[0])}
          ></input>
          <Form>
            {props.fields.map((item, id) => {
              return (
                <div className="loginFields signUpElement">
                  <Field
                    name={item.label}
                    type={item.type}
                    placeholder={item.placeholder || item.label}
                    className="input"
                    onChange
                  />
                  {errors[item.label] && touched[item.label] ? (
                    <div>{errors[item.label]}</div>
                  ) : null}
                </div>
              );
            })}
            <button type="submit" className="button loginElement signupButton">
              SignUp
            </button>
            <div className="linkSpace"></div>
            <p className="link">
              Already have an account?{" "}
              <Link to={"/login"} style={{ color: "white" }}>
                Login
              </Link>
            </p>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default DynamicForm;
