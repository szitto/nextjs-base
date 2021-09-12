import React from "react";
import { render, screen } from "@testing-library/react";
import Hello from "components/Hello";

describe("Hello", () => {
  it("renders a heading", () => {
    render(<Hello />);

    const heading = screen.getByRole("heading", {
      name: /welcome to nextjs-base/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
