import { useState } from 'react';

const useForm = (callback) => {

  // this hooks needs a function for handling input changes and handling Form submissions.
  const [ formData, setFormData ] = useState({});

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    callback(formData);
  };

  // what sets this hook apart form a component, is that it doesn't return JSX
  // some values that our components will use
  return [formData, handleChange, handleSubmit];
};

export default useForm;