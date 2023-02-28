import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...INITIAL_STATE };
  
  static propTypes = {
    addContactName: PropTypes.func.isRequired,
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = evt => {
    const { value, name } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    this.props.addContactName(name);
    this.setState({ name: '', number: '' });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            required
            id={this.nameInputId}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor={this.numberInputId}>
          <h2>Number</h2>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            value={this.state.number}
            required
            id={this.numberInputId}
          />
        </label>
        <button type="submit">add new contact</button>
      </form>
    );
  }
};

// ContactForm.propTypes = {
//   addContactName: PropTypes.func.isRequired,
// };
