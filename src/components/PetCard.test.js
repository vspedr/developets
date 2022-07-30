import React from 'react';
import { shallow } from "enzyme";

import { PetCard } from './PetCard';

describe("PetCard", () => {
  it("Snapshot", () => {
    const rendered = shallow(<PetCard />);
    expect(rendered.html()).toMatchSnapshot();
  });
});
