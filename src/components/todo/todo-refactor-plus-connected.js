import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';

const axios = require('axios').default;

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const ToDo = () => {

  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  const _addItem = (item) => {
    item.due = new Date();

    axios({
      url: todoAPI,
      method: 'post',
      data: JSON.stringify(item),
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.data)
      .then(savedItem => {
        setList([...list, savedItem])
      })
      .catch(console.error);
  };

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      axios({
        url: url,
        method: 'put',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(item)
      })
        .then(response => response.data)
        .then(savedItem => {
          setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
        })
        .catch(console.error);
    }
  };

  const _getTodoItems = () => {

    axios({
      url: todoAPI, 
      method: 'get',
      mode: 'cors',
    })
      .then(data => data.data) // axios data.data   
      .then(data => setList(data.results))
      .catch(console.error);
  }

  const _deleteItem = (id) => {
    console.log('in the delete item function')

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      let url = `${todoAPI}/${id}`;

      // fetch = axios
      // url goes inside object (not before)
      axios({
        url: url,
        method: 'delete',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        // use data, not body
        data: JSON.stringify(item)
      })
        .then(response => _getTodoItems())
        .catch(console.error);
    }
  }

  const _updateCount = () => {
    let updatedCount = list.filter(item => !item.complete).length;
    setCount(updatedCount);
  }

  useEffect(_updateCount, [list]);
  useEffect(_getTodoItems, []);
  useEffect(_deleteItem, []);

  return (
    <>
      <header>
        <h2>
          To Do List Manager ({count})
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm
            handleSubmit={_addItem}
          />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            handleDelete={_deleteItem}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;