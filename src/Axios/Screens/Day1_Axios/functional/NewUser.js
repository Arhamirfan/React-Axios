import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "../../../Model/axios";
import { useNavigate  } from "react-router-dom";


const userSchema = Yup.object().shape({
  userId: Yup.number()
    .required("User ID is required.")
    .min(0, "To short")
    .max(100, "too long"),
  id: Yup.number().required("ID is required").min(0, "To short"),
  title: Yup.string()
    .required("Title is required.")
    .min(5, "Too Short!")
    .max(20, "Too Long!"),
  body: Yup.string().required("Body is required").min(5, "Too Short!"),
});

let Index = () => {
    
  const navigate = useNavigate();

  const [newuser, setnewuser] = useState([]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
        <h2 style={{marginTop:50}}>Add New Post</h2>
          <Formik
            initialValues={{
              userId: 0,
              id: 0,
              title: "",
              body: "",
            }}
            validationSchema={userSchema}
            onSubmit={(values) => {
              setnewuser(values);
              axios
                .post("/posts", {
                  userId: values.userId,
                  id: values.id,
                  title: values.title,
                  body: values.body,
                })
                .then((res) => {
                  console.log(newuser);
                  alert("success with message: " + res);
                  navigate("/axiosfunction");
                })
                .catch((err) => {
                  console.log(err);
                  window.location.reload();
                });
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label htmlFor="userId" className="form-label">
                          User ID
                        </label>
                        <Field
                          name="userId"
                          type="number"
                          className="form-control"
                        />
                        <ErrorMessage name="userId" class="form-text text-danger" />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="id" className="form-label">ID </label>
                        <Field name="id" type="number" className="form-control"/>
                        <ErrorMessage name="id" className="form-text text-danger"  />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title </label>
                        <Field name="title" type="text" className="form-control" />
                        <ErrorMessage name="title" className="form-text text-danger"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="body" className="form-label">Body </label>
                        <Field name="body" type="text" className="form-control"/>
                        <ErrorMessage name="body" className="form-text text-danger" />
                      </div>

                      <button type="submit" className="btn btn-primary" style={{marginRight:20}}>
                        Submit
                      </button> 
                      <button  onClick={ ()=>{ navigate(-1) } } className="btn btn-dark">
                        Go Back
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Index;
