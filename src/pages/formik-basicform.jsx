import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
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
});

const BasicForm = () => {
  return (
    <Container>
      <h1>Basic Form</h1>
      <Formik
        initialValues={{ name: "", email: "", phone: "", blog: "" }}
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
            <Form.Group controlId="formSelect">
              <Form.Label>Example select:</Form.Label>
              <Form.Control as="select">
                <option selected disabled>
                  please select...
                </option>
                <option>Apples</option>
                <option>Monkeys</option>
                <option>Watermelons</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formSwitch">
              <Form.Label>Example switch:</Form.Label>
              <Form.Switch label="Check this switch" />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default BasicForm;
