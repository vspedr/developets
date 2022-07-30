import React from 'react';
import { shallow } from "enzyme";
import { Card } from 'semantic-ui-react';
import App from './App';
import { PetHeader } from './components/PetHeader';

describe("App", () => {
  it("should contains 'Header' component", () => {
    const header = <PetHeader />;
    const wrapper = shallow(<App />);

    expect(wrapper.contains(header)).toBeTruthy();
  });

  it("card group", () => {
    const group = <Card.Group />;

    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(group)).toBeTruthy();
  });

});
