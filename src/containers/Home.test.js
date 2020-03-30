import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

describe('Home Tests', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Home />)

    expect(wrapper).toMatchSnapshot()
  });

  it('link should navigate to posts route', () => {
    const history = {
      push: jest.fn()
    }

    const wrapper = shallow(<Home history={history} />)
    const link = wrapper.find('#link')

    link.simulate('click')

    expect.assertions(3)
    expect(link).toBeTruthy()
    expect(history.push).toHaveBeenCalled()
    expect(history.push).toHaveBeenCalledWith('/posts')
  });
});