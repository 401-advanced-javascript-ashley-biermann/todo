'use strict';

import React from 'react';
import { shallow, mount } from 'enzyme';

const testFunction = jest.fn();

import TodoForm from '../components/todo/form.js';

describe('Testing TodoForm Component', () => {
  it('Should render at application start', () => {
    let app = shallow(<TodoForm />);
    expect(app.find('h3').exists()).toBe(true);
    expect(app.find('Form').exists()).toBe(true);
    expect(app.find('Button').exists()).toBe(true);
  });
});