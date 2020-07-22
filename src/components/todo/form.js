import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import useForm from './hooks/useForm.js';
import useAjax from './hooks/useAjax.js';



const TodoForm = (props) => {
  // hooks!
  const [ formData, handleChange, handleSubmit ] = useForm(formCallback); //passing the callback in to be stored and used at some point later
  console.log(formData);
  const [ data ] = useAjax('https://api-js401.herokuapp.com/api/v1/todo');

  
  const [item, setItem] = useState({});
  
  function formCallback (data) {
    //whatever we need form the formData, do it here.
    console.log('formCallback data', data);
  }
  // TODO: ????: adjust the formCallback to have the functionality of _handleSubmit

  const _handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem({});
  };

  return (
    <>

      <h3>Add To Do Item</h3>
      {/* <Form onSubmit={_handleSubmit}> */}
      <Form onSubmit={_handleSubmit}>
       
        <Form.Label>To Do Item</Form.Label>
        <Form.Control
          name="text"
          placeholder="Item Details"
          // onChange={_handleInputChange}
          onChange={handleChange}

        />
        <Form.Label>Assigned To</Form.Label>
        <Form.Control type="text" name="assignee" placeholder="Assignee Name" onChange={handleChange} />
       
        <Form.Label>Difficulty Rating</Form.Label>
        <Form.Control type="range" custom defaultValue="1" min="1" max="5" name="difficulty" onChange={handleChange} />
        
        <Button type="submit" variant="primary">Add Item</Button>
      </Form>
    </>
  );
}

export default TodoForm;