import { useState } from 'react';

// callback passed in from ... in this case ... form.js
const useForm = (callback) => {

  // this hooks needs a function for handling input changes and handling Form submissions.
  const [ formData, setFormData ] = useState({});

  const handleChange = (event) => {
    // before we run, it looks like this: {} | after we run, it looks like this "Ashley"
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    callback(formData);
  };

  // what sets this hook apart form a component, is that it doesn't return JSX
  // some values that our components will use
  return [formData, handleChange, handleSubmit];
};

export default useForm;