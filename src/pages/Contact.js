import React from 'react';
import { useForm } from '../hooks';

const Contact = () => {
  const [values, changeHandler, clearFields] = useForm({
    subject: '',
    message: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div>
        <label htmlFor="subject">Subject</label>
        <input
          className="form-control"
          value={values.subject}
          onChange={changeHandler}
          name="subject"
          type="text"
          name="subject"
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          className="form-control"
          value={values.message}
          onChange={changeHandler}
          name="message"
          type="text"
          name="message"
        />
      </div>
      <button className="btn btn-block" type="submit">
        Send
      </button>
    </form>
  );
};

export default Contact;
