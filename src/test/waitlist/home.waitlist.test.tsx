import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Home from "~/app/(other-routes)/waitlist/page";

describe("home Component", () => {
  it("renders correctly with the necessary text", () => {
    expect.assertions(4);
    render(<Home />);

    expect(
      screen.getByText(/don't miss out, join the queue and get to know first/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/join the waitlist/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /be the first to experience our new features. sign up now to stay updated!/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/get access/i)).toBeInTheDocument();
  });

  it("renders email input and button correctly", () => {
    expect.assertions(2);
    render(<Home />);

    const emailInput = screen.getByPlaceholderText(/email address/i);
    const getAccessButton = screen.getByText(/get access/i);

    expect(emailInput).toBeInTheDocument();
    expect(getAccessButton).toBeInTheDocument();
  });

  it("handles email input correctly", () => {
    expect.assertions(1);
    render(<Home />);

    const emailInput = screen.getByPlaceholderText(/email address/i);

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(emailInput).toHaveValue("test@example.com");
  });
});
