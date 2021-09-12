import React from "react";
import { render, screen } from "@testing-library/react";
import Index from "pages/index";

describe("Index page", () => {
  it("renders a heading", () => {
    render(<Index hello="Hello Prop" />);

    const heading = screen.getByRole("heading", {
      name: /welcome to nextjs-base/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
