import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Form from './Form';
import GroceryList from './GroceryList';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('renders without crashing', () => {
    expect(wrapper.find('.App')).toHaveLength(1);
  });
  it('renders a form', () => {
    expect(wrapper.find(Form)).toHaveLength(1);
  });
  it('renders a grocery list', () => {
    expect(wrapper.find(GroceryList)).toHaveLength(1);
  });
});
