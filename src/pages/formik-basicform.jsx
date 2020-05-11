import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import { Persist } from "formik-persist";
import * as Yup from "yup";

// RegEx for phone number validation
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

// Schema for yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Names must have at least 2 characters")
    .max(100, "Names can't be longer than 100 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Must be a valid email address")
    .max(100, "Email must be less than 100 characters")
    .required("Email is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number required"),
  blog: Yup.string()
    .url("Must enter URL in http://www.example.com format")
    .required("URL required"),
  color: Yup.string().required("Color is required!"),
  switch: Yup.boolean().oneOf(
    [true],
    "The terms and conditions must be accepted."
  ),
});

const BasicForm = () => {
  return (
    <Container>
      <h2 style={{ margin: "40px 0 20px" }}>
        Form Validation with Formik, Yup and React-Bootstrap and Formik-Persist
      </h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          blog: "",
          color: "",
          switch: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // When button submits form and form is in the process of submitting, submit button is disabled
          setSubmitting(true);

          // Simulate submitting to database, shows us values submitted, resets form
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
      >
        {/* Callback function containing Formik state and helpers that handle common form actions */}
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit} className="mx-auto">
            {console.log(values)}
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                isInvalid={touched.name && errors.name}
                isValid={touched.name && !errors.name}
              />
              <ErrorMessage
                name="name"
                component={Form.Text}
                className="text-danger"
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                isInvalid={touched.email && errors.email}
                isValid={touched.email && !errors.email}
              />
              <ErrorMessage
                name="email"
                component={Form.Text}
                className="text-danger"
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone:</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                isInvalid={touched.phone && errors.phone}
                isValid={touched.phone && !errors.phone}
              />
              <ErrorMessage
                name="phone"
                component={Form.Text}
                className="text-danger"
              />
            </Form.Group>
            <Form.Group controlId="formBlog">
              <Form.Label>Blog:</Form.Label>
              <Form.Control
                type="text"
                name="blog"
                placeholder="Blog URL"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.blog}
                isInvalid={touched.blog && errors.blog}
                isValid={touched.blog && !errors.blog}
              />
              <ErrorMessage
                name="blog"
                component={Form.Text}
                className="text-danger"
              />
            </Form.Group>
            <Form.Group controlId="formColor">
              <Form.Label>Color:</Form.Label>
              <Form.Control
                as="select"
                name="color"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.color}
                isInvalid={touched.color && errors.color}
                isValid={touched.color && !errors.color}
              >
                <option value="" label="Select a color" />
                <option value="red" label="red" />
                <option value="blue" label="blue" />
                <option value="green" label="green" />
              </Form.Control>
              <ErrorMessage
                name="color"
                component={Form.Text}
                className="text-danger"
              />
            </Form.Group>
            <Form.Group controlId="formSwitch">
              <Form.Label>Switch:</Form.Label>
              <Form.Switch
                name="switch"
                label="I Agree"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.switch}
                isInvalid={touched.switch && errors.switch}
                isValid={touched.switch && !errors.switch}
              />
              <ErrorMessage
                name="switch"
                component={Form.Text}
                className="text-danger"
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            <Persist name="signup-form" />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default BasicForm;
