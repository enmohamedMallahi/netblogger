import React, { useContext } from 'react';
import { BlogsContext } from '../context/BlogsContext';
import { useForm } from '../hooks';

const NewBlog = () => {
  const [values, changeHandler, clearFields] = useForm({
    title: '',
    body: '',
  });

  const [state, dispatch] = useContext(BlogsContext);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add-article',
      blog: {
        title: values.title,
        body: values.body,
      },
    });
    clearFields();
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          className="form-control"
          value={values.title}
          onChange={changeHandler}
          name="title"
          type="text"
          name="title"
        />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <input
          className="form-control"
          value={values.body}
          onChange={changeHandler}
          name="body"
          type="text"
          name="body"
        />
      </div>
      <button className="btn btn-block" type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewBlog;
