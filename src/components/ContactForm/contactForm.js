import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
   
    };
    
    loginInputName = nanoid();

  handleChange = evt => {
    const { value, name } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
      evt.prevent.default();
      const { name } = this.state;
      this.props.addContactName(name);
      this.setState({name})
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
            required
            id={this.state.name}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}
