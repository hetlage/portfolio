import React, { Component } from "react";
import emailjs from "emailjs-com";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ContactThree extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          rnName: "",
          rnEmail: "",
          rnSubject: "",
          rnMessage: "",
        }}
        validationSchema={Yup.object().shape({
          rnName: Yup.string().required("Full Name is required"),
          rnEmail: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          rnSubject: Yup.string().required("Subject is required"),
          rnMessage: Yup.string().required("Message is required"),
        })}
        onSubmit={(fields, { resetForm }) => {
          let data = {
            from_name: fields.rnName,
            reply_to: fields.rnEmail,
            subject: fields.rnSubject,
            message: fields.rnMessage,
            to_name: "Friend",
          };
          emailjs
            .send(
              process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
              process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
              data,
              process.env.REACT_APP_EMAIL_JS_USER_ID
            )
            .then((res) => {
              toast("🚀 Message has been sent successfully!", {
                closeOnClick: true,
                type: "dark",
              });
            })
            .catch((err) => {
              toast("💩 Something went wrong, please try again later!", {
                closeOnClick: true,
                type: "dark",
              });
            });
          resetForm({ fields: "" });
        }}
      >
        {({ errors, status, touched }) => (
          <div className="contact-form--1">
            <div className="container">
              <div className="row row--35 align-items-start">
                <div className="col-lg-6 order-2 order-lg-1">
                  <div className="section-title text-left mb--50">
                    <h2 className="title">{this.props.contactTitle}</h2>
                    <p className="description">
                      Connect with me via phone:{" "}
                      <a href="tel:913-354-7966">913-354-7966</a> or complete
                      the form below.{" "}
                    </p>
                  </div>
                  <div className="form-wrapper">
                    <Form>
                      <label htmlFor="item01">
                        <Field
                          type="text"
                          name="rnName"
                          id="item01"
                          placeholder="Your Name *"
                          className={
                            errors.rnName && touched.rnName ? " is-invalid" : ""
                          }
                        />
                        <ErrorMessage
                          name="rnName"
                          component="div"
                          className="invalid-feedback"
                        />
                      </label>

                      <label htmlFor="item02">
                        <Field
                          type="text"
                          name="rnEmail"
                          id="item02"
                          className={
                            errors.rnEmail && touched.rnEmail
                              ? " is-invalid"
                              : ""
                          }
                          placeholder="Your email *"
                        />
                        <ErrorMessage
                          name="rnEmail"
                          component="div"
                          className="invalid-feedback"
                        />
                      </label>

                      <label htmlFor="item03">
                        <Field
                          type="text"
                          name="rnSubject"
                          id="item03"
                          placeholder="Write a Subject *"
                          className={
                            errors.rnSubject && touched.rnSubject
                              ? " is-invalid"
                              : ""
                          }
                        />
                        <ErrorMessage
                          name="rnSubject"
                          component="div"
                          className="invalid-feedback"
                        />
                      </label>
                      <label htmlFor="item04">
                        <Field
                          as="textarea"
                          id="item04"
                          name="rnMessage"
                          placeholder="Your Message *"
                          className={
                            errors.rnMessage && touched.rnMessage
                              ? " is-invalid"
                              : ""
                          }
                        />
                        <ErrorMessage
                          name="rnMessage"
                          component="div"
                          className="invalid-feedback"
                        />
                      </label>
                      <button
                        className="rn-button-style--2 btn-solid"
                        type="submit"
                        value="submit"
                        name="submit"
                        id="mc-embedded-subscribe"
                      >
                        Submit
                      </button>
                      <ToastContainer
                        position="bottom-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                      />
                    </Form>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                  <div className="thumbnail mb_md--30 mb_sm--30">
                    <img src={`${this.props.contactImages}`} alt="Contact Me" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    );
  }
}
export default ContactThree;
