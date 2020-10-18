import React, { Component } from "react";
import Phonebook from "./Phonebook/Phonebook";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";

export default class Add extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const storage = localStorage.getItem("contacts");
    if (storage) {
      this.setState({
        contacts: JSON.parse(storage),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  addContact = ({ id, name, number }) => {
    const nameInList = this.state.contacts.find(
      (contact) => contact.name === name
    );
    if (nameInList) {
      return alert(`${name} is already in contacts`);
    }
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id, name, number }],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filtredContacts = this.getFilteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <Phonebook onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <Contacts contacts={filtredContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}
