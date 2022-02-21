import React from "react";
import ContactForm from "../components/Form/Form";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
function Contact(props) {
  return (
    <div>
      <ContactForm></ContactForm>
    </div>
  );
}

export default Contact;
