import React from 'react';
import { shallow, mount } from 'enzyme';
import GroceryItem from './GroceryItem';
import GroceryList from './GroceryList';

describe('<GroceryItem>', () => {
  it('renders a button', () => {
    let wrapper = shallow(<GroceryItem />);
    expect(wrapper.find('button')).toHaveLength(1);
  });
  it('renders a label', () => {
    let wrapper = shallow(<GroceryItem />);
    expect(wrapper.find('label')).toHaveLength(1);
  });
  it('renders an input field', () => {
    let wrapper = shallow(<GroceryItem />);
    expect(wrapper.find('input')).toHaveLength(1);
  });
  it('it should invoke deleteItem with index when a click event is triggered', () => {
    let mockDeleteItem = jest.fn(() => Promise.resolve());
    let mockIndex = 1;
    let wrapper = mount(<GroceryItem index={mockIndex} deleteItem={mockDeleteItem}/>);
    wrapper.find('button').simulate('click');
    expect(mockDeleteItem).toHaveBeenCalledWith(mockIndex);
  });
});