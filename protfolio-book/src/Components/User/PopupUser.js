import React from "react";
import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./User.scss";

function PopupUser({ data, cancel }) {
  console.log("1234", data?.name);

  const OpeningSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone: Yup.number()
      .integer("Please enter a valid Number")
      .typeError("Please enter a Numberic Value")
      .positive("Please enter a Positive Number")
      .required("Phone is required"),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    website: Yup.string().required("Website is required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          name: data?.name,
          email: data?.email,
          phone: data?.phone,
          website: data?.website,
        }}
        validationSchema={OpeningSchema}
        enableReinitialize
        onSubmit={(values) => {
          let data = {
            name: values.name,
          };
          console.log("999", data);
        }}
      >
        {(props) => {
          const {
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            errors,
          } = props;
          return (
            <Form onSubmit={handleSubmit}>
              <div className=" popupUser flex ml-40 mb-0 height-56">
                <h3 className="mr-30">Name:</h3>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  placeholder="Basic usage"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`inputField mb-20 ${
                    touched.name && errors.name ? "errorBackground" : ""
                  }`}
                />
              </div>
              <ErrorMessage name="name" component="div" className="errorText" />

              <div className="flex ml-40 mb-0 height-56">
                <h3 className="mr-30">E-mail:</h3>
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  placeholder="Basic usage"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`inputField mb-20 ${
                    touched.email && errors.email ? "errorBackground" : ""
                  }`}
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="errorText"
              />

              <div className="flex ml-40 mb-0 height-56">
                <h3 className="mr-30">Phone:</h3>
                <input
                  type="text"
                  name="phone"
                  value={values.phone}
                  placeholder="Basic usage"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`inputField mb-20 ${
                    touched.phone && errors.phone ? "errorBackground" : ""
                  }`}
                />
              </div>
              <ErrorMessage
                name="phone"
                component="div"
                className="errorText"
              />

              <div className="flex ml-40 mb-0 height-56">
                <h3 className="mr-14">Website:</h3>
                <input
                  type="text"
                  name="website"
                  value={values.website}
                  placeholder="Basic usage"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`inputField mb-20 ${
                    touched.website && errors.website ? "errorBackground" : ""
                  }`}
                />
              </div>
              <ErrorMessage
                name="website"
                component="div"
                className="errorText"
              />
              <div className="buttons">
                <button className="cancelButton mr-8" onClick={() => cancel()}>
                  Cancel
                </button>
                <button className="submitButton" type="submit">
                  Ok
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default PopupUser;
