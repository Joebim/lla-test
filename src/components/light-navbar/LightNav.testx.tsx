import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import LightNav from "./LightNav";

import "@testing-library/jest-dom";

describe("lightNav", () => {
  it("renders desktop logo", () => {
    expect.assertions(1);
    render(<LightNav />);
    const desktopLogo = screen.getByAltText("desktop-logo");
    expect(desktopLogo).toBeInTheDocument();
  });

  it("renders the signed-out state correctly", () => {
    expect.assertions(2);
    render(<LightNav />);
    expect(screen.getByText("How it works")).toBeInTheDocument();
    expect(screen.getAllByText("Delve In")).toHaveLength(2);
  });
});
