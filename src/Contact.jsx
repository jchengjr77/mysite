import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { isLVal } from "@babel/types";

export class Contact extends Component {
  render() {
    return (
      <div className="contact-cont">
        <h1 className="subheader">Contact:</h1>
        <Form>
          <FormGroup>
            <Label for="personName">Name: (what should I call you?)</Label>
            <Input id="personName" placeholder="John Doe" />
          </FormGroup>
          <FormGroup>
            <Label for="personEmail">Email: (where should I reply to?)</Label>
            <Input id="personEmail" placeholder="johndoe@gmail.com" />
          </FormGroup>
          <FormGroup>
            <Label for="message">Message: (what's up?)</Label>
            <Input type="textarea" id="exampleText" />
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Contact;
