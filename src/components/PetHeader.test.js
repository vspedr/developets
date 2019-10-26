import React from 'react';
import { shallow } from 'enzyme';
import { PetHeader } from './PetHeader';

describe('A Header Component', () => {
  it('should match snapshot component', () => {
    const rendered = shallow(<PetHeader />);
    expect(rendered.html()).toMatchSnapshot();
  });
});
