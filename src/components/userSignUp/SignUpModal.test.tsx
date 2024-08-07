import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import SignUpModal from "./SignUpModal";

describe("signUpModal", () => {
  it("renders the SignUpModal and handles password visibility toggle", () => {
    expect.assertions(6); // Number of assertions expected in this test

    render(<SignUpModal closeModal={() => {}} />);

    // Verify initial render
    expect(screen.getByText("Create Account")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("johndoe@gmail.com"),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("********")).toBeInTheDocument();

    // Test password visibility toggle
    const passwordInput = screen.getByPlaceholderText("********");
    const toggleButton = screen.getByLabelText("Toggle password visibility");

    // Password should initially be of type 'password'
    expect(passwordInput).toHaveAttribute("type", "password");

    // Click to show password
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "text");

    // Click to hide password again
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });
});
