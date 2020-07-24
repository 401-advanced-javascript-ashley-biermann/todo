import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/header.js';
import ToDo from './components/todo/todo.js';
import SettingsProvider from './context/settings/context.js';


export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SettingsProvider>
          <ToDo />
        </SettingsProvider>
      </>
    );
  }
}