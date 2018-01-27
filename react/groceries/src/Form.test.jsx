import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from './Form';

describe('<Form />', () => {
  it('renders a button', () => {
    let wrapper = shallow(<Form />);
    expect(wrapper.find('button')).toHaveLength(1);
  });
  it('renders an input field', () => {
    let wrapper = shallow(<Form />);
    expect(wrapper.find('input')).toHaveLength(1);
  });
  
  it('renders initial state', () => {
    let wrapper = mount(<Form />);
    expect(wrapper.state('item')).toBe('');
  });
  it('calls the onChange callback on input change', () => {
    let wrapper = mount(<Form />);
    wrapper.find('input[name="item"]').simulate('change', {
      target: {
        name: 'item',
        value: 'bananas',
      },
    });
    expect(wrapper.state('item')).toEqual('bananas');
  });
  it('it should invoke submitForm with state when a submit event is triggered', () => {
    let mockOnSubmit = jest.fn(() => Promise.resolve());
    let mockState = {
      item: 'apples'
    }
    //this.props.submitForm is invoked with this.state.item
    let wrapper = mount(<Form submitForm={mockOnSubmit} />);
    wrapper.setState(mockState);
    wrapper.find('form').simulate('submit');
    expect(mockOnSubmit).toHaveBeenCalledWith(mockState.item);
  });
});