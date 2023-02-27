import React, { Component } from "react";
import { ContactForm } from "./ContactForm/contactForm";
import { nanoid } from "nanoid";
import { Contact } from "./Contacts/contacts";
import { Filter } from "./Filter/filter";

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  addContactName = (name, number) => {
    const addContact = {
      id: nanoid.generate(),
      name,
      number,
    };

    const upCont = this.state.contacts.map(({ name }) => name.toLowerCase());
    const nameToLowerCase = name.toLowerCase();
    if (upCont.includes(nameToLowerCase)) {
      return alert(`${name} is already in contacts.`);
    };

    this.setState(prevState => ({
      contacts: [addContact, ...prevState.contacts],
    }))
  };

 filterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  filterRender = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter));
  };

  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));

    this.setState({ filter: '' });
  };

  render() {
    const visibleStat = this.filterRender();
    return (
      <Filter>
        <ContactForm addContact={this.addContactName} />
        <span onChange={this.filterChange} value={this.state.filter} />
        <Contact dataContact={visibleStat} onDelete={this.onDelete} />
      </Filter>
    )
  }
};