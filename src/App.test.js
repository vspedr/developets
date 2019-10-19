import React from 'react';
import { shallow } from "enzyme";

import { Card, Header, Icon } from 'semantic-ui-react';

import App from './App';

describe("App", () => {
  it("header icon", () => {
    const icon = <Icon />;

    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(icon)).toBeTruthy();
  });

  it("header content", () => {
    const header = <Header.Content>DeveloPets</Header.Content>;

    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(header)).toBeTruthy();
  });

  it("card group", () => {
    const group = <Card.Group />;

    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(group)).toBeTruthy();
  });

});
