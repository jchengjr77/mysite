import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log("Form submitted");
    const name = document.getElementById("personName").value;
    const email = document.getElementById("personEmail").value;
    const message = document.getElementById("personBody").value;
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    try {
      window.emailjs.send(
        "gmail",
        "contact_form",
        {
          reply_to: email,
          from_name: name,
          message_body: message
        },
        "user_NUehnvTQG1q1kpQS2mble"
      );
      alert("Your message has been received. Thanks for reaching out!");
    } catch (err) {
      console.error("Failed to send message. Error: " + err);
      alert("Failed to send message! Check console logs for error details.");
    }
  }

  render() {
    return (
      <div className="contact-cont">
        <script
          type="text/javascript"
          src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"
        />
        <p className="contact-anchor" id="contact" />
        <h1 className="subheader">Contact Me:</h1>
        <Form onSubmit={() => this.handleSubmit()}>
          <FormGroup>
            <Label for="personName">Your Name:</Label>
            <Input
              name="name"
              id="personName"
              placeholder="John Smith"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="personEmail">Your Email:</Label>
            <Input
              name="email"
              id="personEmail"
              placeholder="john-smith@generic-email.com"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="message">Message:</Label>
            <Input
              name="message"
              type="textarea"
              id="personBody"
              placeholder="Hey JJ,  ..."
              required
            />
          </FormGroup>
          <Input type="submit" id="submit-button" value="Send Message" />
        </Form>
      </div>
    );
  }
}

export default Contact;
