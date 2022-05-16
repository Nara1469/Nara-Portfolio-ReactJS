import React, { useState } from 'react';
import Icons from './Icons';

function Form() {
  // Declaring state variables for Inputs using `useState`
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    switch (name) {
      case 'userName':
        setUserName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }

    return;
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user, clear the inputs
    alert(`Hello ${userName}`);
    setUserName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h3 className="text-center text-color">Contact</h3>
      <form className="form">
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={() => handleFormSubmit}>
          Submit
        </button>
        <p>
          Message is required
        </p>
      </form>
      <Icons />
    </div>
  );
}

export default Form;