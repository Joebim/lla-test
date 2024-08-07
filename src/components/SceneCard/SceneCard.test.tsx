import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";

import SceneCard from "~/components/SceneCard";

describe("sceneCard Component", () => {
  const defaultProps = {
    title: "The Burning Building",
    description:
      "Lora lives in California and needs to get on the plane to Paris where she meets her boss for Fashion Week. Problem is, she just might miss that flight and get fired. How fast can you help her get to the airport?",
    stage: 1,
    levels: 8,
  };

  it("renders the title and description", () => {
    expect.assertions(2); // Make sure to use expect.assertions
    render(<SceneCard {...defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });

  it("renders the stage and levels", () => {
    expect.assertions(1); // Make sure to use expect.assertions
    render(<SceneCard {...defaultProps} />);

    expect(
      screen.getByText(`${defaultProps.stage} / ${defaultProps.levels} Pages`),
    ).toBeInTheDocument();
  });

  it("renders the buttons", () => {
    expect.assertions(2); // Make sure to use expect.assertions
    render(<SceneCard {...defaultProps} />);

    expect(screen.getByText("Back")).toBeInTheDocument();
    expect(screen.getByText("Start Quest")).toBeInTheDocument();
  });
});
