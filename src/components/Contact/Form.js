import React from "react";
import { Formik, Form, Field } from "formik";
import "./style.css";

function ContactForm() {
  return (
   <div className="col-lg-5 col-12 mt-lg-0 mt-5 ">
     <div className="row form text-light p-md-5 p-sm-3">
      <div className="col-md-10 h2 col-7  align-self-center">Drop us a message</div>
      <div className="col-md-10 my-2 col-7">We would love to hear everything from you</div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          contact: "",
          subject: "",
          description: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div class="input-group flex-column mb-3">
            <div>
              <label htmlFor="name">Name</label>
            </div>
            <div>
              <Field
                type="text"
                class="form-control"
                name="name"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div class="input-group flex-column mb-3 flex-column">
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <Field
                name="email"
                type="email"
                class="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon2"
              />
            </div>
          </div>

          <div class="input-group flex-column mb-3">
            <div>
              <label htmlFor="contact">Contact</label>
            </div>
            <div>
              <Field
                name="contact"
                type="text"
                class="form-control"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>

          <div class="input-group flex-column mb-3">
            <div>
              <label htmlFor="contact">Subject</label>
            </div>
            <div>
              <Field
                name="subject"
                type="text"
                class="form-control"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>

          <div class="input-group flex-column">
            <div>
              <label htmlFor="description">Description</label>
            </div>
            <div>
              {" "}
              <Field
                name="description"
                as="textarea"
                class="form-control"
                aria-label="description"
              />
            </div>
          </div>
          <div className="input-group flex-column mt-3">
            <button className="btn btn-dark text-light">Send</button>
          </div>
        </Form>
      </Formik>
    </div>
   </div>
  );
}

export default ContactForm;
