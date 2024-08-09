import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";

import SceneCard from "~/components/SceneCard";

describe("sceneCard Component", () => {
  const defaultProps = {
    description:
      "Lora lives in California and needs to get on the plane to Paris where she meets her boss for Fashion Week. Problem is, she just might miss that flight and get fired. How fast can you help her get to the airport?",
    levels: 8,
  };

  it("renders the description", () => {
    expect.assertions(1);
    render(<SceneCard {...defaultProps} />);
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });

  it("renders the levels", () => {
    expect.assertions(1);
    render(<SceneCard {...defaultProps} />);

    expect(
      screen.getByText(
        `${defaultProps.levels} Page${defaultProps.levels > 1 ? "s" : ""}`,
      ),
    ).toBeInTheDocument();
  });

  it("renders the buttons", () => {
    expect.assertions(1);
    render(<SceneCard {...defaultProps} />);

    expect(screen.getByText("Start Quest")).toBeInTheDocument();
  });
});
