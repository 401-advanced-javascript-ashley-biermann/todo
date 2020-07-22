import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/header.js';
import ToDo from './components/todo/todo-refactor-plus-connected.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ToDo />
      </>
    );
  }
}