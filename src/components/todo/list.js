import React from 'react';
// import { useState } from 'react';
// import { ListGroup } from 'react-bootstrap';


const TodoList = (props) => {
  
  return (
    <>
      <ul>
        {props.list.map(item => (
          <li
            // variant="success"
            className={`complete-${item.complete.toString()}`}
            key={item._id} >

            <span onClick={() => props.handleComplete(item._id)}>
            {item.text}
            </span>

            <input type="button" value="delete" onClick={() => props.handleDelete(item._id)}>
            </input>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList;