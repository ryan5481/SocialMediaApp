import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitFormData = async (values) => {
    console.log(values);
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
      onSubmit={(values) => submitFormData(values)}
    >
      {({ errors, touched, values }) => (
        <div className="form ">
          <h1>Social</h1>
          <h2>SignUp</h2>
          <Form>
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
