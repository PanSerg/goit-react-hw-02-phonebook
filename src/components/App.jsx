import React, { Component } from "react";
import { ContactForm } from "./ContactForm/contactForm";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid.generate(), name: 'Hermione Kline', number: '443-89-12' },
      {id: nanoid.generate(),  name: 'Eden Clements', number: '645-17-79' }
    ],
    name: '',
  };

  addContactName = (name) => {
    const addContact = {
      id: nanoid.generate(),
      name,
    }
    this.setState(prevState => ({
      contacts: [addContact, ...prevState.contacts]
    }))
  };

  filterChange = (evt) => {

  };

  filterRender = () => {

  };


  render() {
    return (
      <div>
        <ContactForm addContact={this.addContactName}/>
      </div>
    )
  }
};