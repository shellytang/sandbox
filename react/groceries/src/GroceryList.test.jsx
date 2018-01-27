import React from 'react';
import { shallow } from 'enzyme';
import GroceryList from './GroceryList';
import GroceryItem from './GroceryItem';

describe('<GroceryList />', () => {
  const sampleGroceries = ['apples','bananas'];
  it('should render a list of groceries', () => {
    const wrapper = shallow(<GroceryList groceries={sampleGroceries} />);
    expect(wrapper.find(GroceryItem)).toHaveLength(2);
  });
});