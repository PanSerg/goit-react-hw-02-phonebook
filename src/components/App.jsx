import { Component } from "react";


export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  render() {
  
    return(
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
    );
  };
};
