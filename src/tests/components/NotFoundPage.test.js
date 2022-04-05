import NotFoundPage from "../../components/Header";
import React from "react";
import { shallow } from "enzyme";

test("should render notfoundpage correctly", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
