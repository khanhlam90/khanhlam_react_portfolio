import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        
        e.preventDefault();

        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
        
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
        }
        } else {
        if (!e.target.value.length) {
            setErrorMessage(`A ${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
  };

  return (
    <div>
      <p className="">Contact Me</p>
      
      <form id="" onSubmit={handleSubmit}>
        <div className="">
          <label className="" htmlFor="name">Name</label>
          <input className="" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="">
          <label className="" htmlFor="email">Email Address</label>
          <input className="" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="">
          <label className="" htmlFor="message">Message</label>
          <textarea className="" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="">{errorMessage}</p>
          </div>
        )}
        <button className="" data-testid="" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;