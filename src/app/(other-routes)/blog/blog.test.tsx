import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Blog from "./page";

describe("blog Page", () => {
  it("renders Blog page", () => {
    expect.hasAssertions();

    render(<Blog />);

    expect(screen.getByText("Blog")).toBeInTheDocument();
  });
});
