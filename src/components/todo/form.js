import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Form } from 'react-bootstrap';
import useForm from './hooks/useForm.js';
// import useAjax from './hooks/useAjax.js';

const TodoForm = (props) => {
  // hooks!
  const [formData, handleChange, handleSubmit] = useForm(props.handleSubmit);

  // const [ data ] = useAjax('https://api-js401.herokuapp.com/api/v1/todo');


  return (
    <>
      <Container>
        <Row>
          <Col>
            <h3>Add To Do Item</h3>
            <Form onSubmit={handleSubmit}>

              <Form.Label>To Do Item</Form.Label>
              <Form.Control
                name="text"
                placeholder="Item Details"
                onChange={handleChange}

              />
              <Form.Label>Assigned To</Form.Label>
              <Form.Control type="text" name="assignee" placeholder="Assignee Name" onChange={handleChange} />

              <Form.Label>Difficulty Rating</Form.Label>
              <Form.Control type="range" custom defaultValue="1" min="1" max="5" name="difficulty" onChange={handleChange} />

              <Button type="submit" variant="primary">Add Item</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TodoForm;