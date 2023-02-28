import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    };
    
  handleChange = evt => {
    const { value, name } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
      evt.preventDefault();
    const { name, number } = this.state;
    
    this.props.addContactName(name);
    this.setState({ name: '', number: ''})
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            required
            id="nameInputId"
            onChange={this.handleChange}
          />
        </label>

        <label>
          <h2>Number</h2>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            value={this.state.number}
            required
          />
        </label>
        <button type="submit">add new contact</button>
      </form>
    );
  }
};

ContactForm.propTypes = {
  addContactName: PropTypes.func.isRequired,
};
