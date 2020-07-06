import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import App from "../App";
import CheckBlock from "../Components/CheckBlock";

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders three <CheckBlock />", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CheckBlock)).to.have.lengthOf(3);
  });
});
