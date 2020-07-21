import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

const TodoForm = (props) => {

  const [item, setItem] = useState({});
  
  console.log('item ', item);

  const _handleInputChange = (e) => {
    console.log('in handleInputChange');
      setItem({...item, [e.target.name]: e.target.value} );
  };

  const _handleSubmit = (e) => {
    console.log('in the handle submit');

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
          <span>To Do Item</span>
          <Form.Control
            name="text"
            placeholder="Item Details"
            onChange={_handleInputChange}
          />
        </Form.Label>
        <Form.Label>
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={_handleInputChange} />
        </Form.Label>
        <Form.Label>
          <span>Assigned To</span>
          <Form.Control type="text" name="assignee" placeholder="Assignee Name" onChange={_handleInputChange} />
        </Form.Label>
        <Button type="submit" variant="primary">Add Item</Button>
      </Form>
    </>
  );
}

export default TodoForm;