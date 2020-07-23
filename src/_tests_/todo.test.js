'use strict';

import React from 'react';
import { shallow, mount } from 'enzyme';


import ToDo from '../components/todo/todo.js';

describe('Testing ToDo Component', () => {
  it('Should render at application start', () => {
    let app = shallow(<ToDo />);
    expect(app.find('.todo').exists()).toBe(true);
  });
});