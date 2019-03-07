import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <h1 >Contact Us</h1>
          <p>Get in touch with us</p>
        </div>
        <div className="contact-content">
          <h2>SEND US AN EMAIL</h2>
          <div className="row">
            <div className="my-col">
              <label htmlFor="name">
                Name
                <small>*</small>
              </label>
              <input type="text" id="name" placeholder="Name" />
            </div>
            <div className="my-col">
              <label for="email">
                Email
                <small>*</small>
              </label>
              <input type="my-text" id="email" placeholder="Email" />
            </div>
            <div className="my-col">
              <label for="phone">
                Phone
              </label>
              <input type="text" id="phone" placeholder="Phone" />
            </div>
            <div className="my-col" id="col-affair">
              <label for="affair">
                Affair
                <small>*</small>
              </label>
              <input type="my-text" id="affair" placeholder="Affair" />
            </div>
            <div className="my-col" id="col-message">
              <label for="message">
                Message
                <small>*</small>
              </label>
              <textarea type="my-text" id="message" placeholder="Write your message here" />
            </div>
            <button className="btn btn-outline-info btn-send icon-paper-plane-empty"> Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;