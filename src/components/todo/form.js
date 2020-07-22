import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

const TodoForm = (props) => {

  const [item, setItem] = useState({});
  
  const _handleInputChange = (e) => {
      setItem({...item, [e.target.name]: e.target.value} );
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem({});
  };

  return (
    <>

      <h3>Add To Do Item</h3>
      <Form onSubmit={_handleSubmit}>
        <Form.Label>
          <Form.Label>To Do Item</Form.Label>
          <Form.Control
            name="text"
            placeholder="Item Details"
            onChange={_handleInputChange}
          />
        </Form.Label>
        <Form.Label>
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="assignee" placeholder="Assignee Name" onChange={_handleInputChange} />
        </Form.Label>
        <Form.Label>
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control type="range" custom defaultValue="1" min="1" max="5" name="difficulty" onChange={_handleInputChange} />
        </Form.Label>
        <Button type="submit" variant="primary">Add Item</Button>
      </Form>
    </>
  );
}

export default TodoForm;