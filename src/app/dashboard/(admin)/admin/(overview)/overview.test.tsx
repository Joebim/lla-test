import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Overview from "./page";

describe("overview", () => {
  it("renders overview data", () => {
    expect.hasAssertions();

    render(<Overview />);

    expect(screen.getByText("Total Users")).toBeInTheDocument();
    expect(screen.getByText("Active Users")).toBeInTheDocument();
    expect(screen.getByText("Inactive Users")).toBeInTheDocument();
    expect(screen.getByText("Disabled Users")).toBeInTheDocument();
    expect(screen.getByText("Manage Users")).toBeInTheDocument();
    expect(
      screen.getByText("Manage Users & Track Activity"),
    ).toBeInTheDocument();
  });
});
