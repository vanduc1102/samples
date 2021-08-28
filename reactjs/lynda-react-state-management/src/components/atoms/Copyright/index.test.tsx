import React from "react";
import { render } from "@testing-library/react";
import Copyright from ".";

describe("Copyright", () => {
  it("should render ok", () => {
    const component = render(<Copyright />);
    expect(component.getByText(/Copyright © /i)).toBeTruthy();
  });
});
