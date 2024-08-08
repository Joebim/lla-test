import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ExploreQuests from "./page";

describe("exploreQuests Page", () => {
  it("should render ReadyToStart component correctly", () => {
    expect.assertions(1);
    render(<ExploreQuests />);
    expect(screen.getByText("Delve In")).toBeInTheDocument();
  });

  it("should display CTA buttons with correct text", () => {
    expect.assertions(2);
    render(<ExploreQuests />);
    expect(screen.getByText("Start Quest")).toBeInTheDocument();
    expect(screen.getByText("Delve In")).toBeInTheDocument();
  });
});
