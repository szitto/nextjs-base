import React from "react";
import { render } from "@testing-library/react";

import Results from "components/Search/Results";

describe("Hello", () => {
  it("should render the serach results", () => {
    const { container } = render(
      <Results results={[{ something: "something" }]} />
    );

    expect(container.querySelector(".results")).toBeInTheDocument();
  });

  it("should render no search results", () => {
    const { container } = render(
      <Results results={[{ something: "something" }]} />
    );

    expect(container.querySelector(".no-results")).toBeInTheDocument();
  });
});
