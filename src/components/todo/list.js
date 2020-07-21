import React from 'react';
import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';


const TodoList = (props) => {

  // const [variant, setVariant] = useState('');

  // const _toggleVariant = (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   setVariant();
  // }

  return (
    <>

      <ListGroup>

        <ListGroup.Item variant="success">Success</ListGroup.Item>
        <ListGroup.Item variant="danger">Danger</ListGroup.Item>

      </ListGroup>



      <ListGroup>
        {props.list.map(item => (
          <ListGroup.Item
            variant="success"
            className={`complete-${item.complete.toString()}`}
            key={item._id}
            action onClick={() => {
              props.handleComplete(item._id);
              // _toggleVariant('danger');
            }}
          >
            {item.text}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}

export default TodoList;