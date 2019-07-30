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
  }

  render() {
    return (
      <div className="contact-cont" id="contact">
        <a className="contact-anchor" id="contact" />
        <h1 className="subheader">Contact:</h1>
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
