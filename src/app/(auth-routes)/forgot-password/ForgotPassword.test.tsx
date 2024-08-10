import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ForgotPassword from "./page";

import "@testing-library/jest-dom";

// Mock the child components to avoid needing their implementation details
vi.mock("./Modal", () => ({
  __esModule: true,
  default: ({ onVerify }: { onVerify: () => void }) => (
    <div>
      Mock Modal
      <button onClick={onVerify}>Verify</button>
    </div>
  ),
}));

vi.mock("./PasswordResetModal", () => ({
  __esModule: true,
  default: ({
    onClose,
    onReset,
  }: {
    onClose: () => void;
    onReset: () => void;
  }) => (
    <div>
      Mock Password Reset Modal
      <button onClick={onClose}>Close</button>
      <button onClick={onReset}>Reset</button>
    </div>
  ),
}));

vi.mock("./VerifyEmailModal", () => ({
  __esModule: true,
  default: ({
    onClose,
    onVerifyComplete,
  }: {
    onClose: () => void;
    onVerifyComplete: () => void;
  }) => (
    <div>
      Mock Verify Email Modal
      <button onClick={onClose}>Close</button>
      <button onClick={onVerifyComplete}>Verify Complete</button>
    </div>
  ),
}));

vi.mock("./PasswordResetConfirmation", () => ({
  __esModule: true,
  default: ({ onClose }: { onClose: () => void }) => (
    <div>
      Mock Password Reset Confirmation
      <button onClick={onClose}>Close</button>
    </div>
  ),
}));

describe("forgotPassword", () => {
  it("renders correctly and handles all modal interactions", async () => {
    expect.assertions(6);

    render(<ForgotPassword />);

    // Check initial render
    expect(screen.getByText(/forgot password\?/i)).toBeInTheDocument();
    expect(screen.getByText(/enter the email address/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/johndoe@gmail.com/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send instructions/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /return to sign in/i }),
    ).toBeInTheDocument();

    // Submit the email form
    fireEvent.change(screen.getByPlaceholderText(/johndoe@gmail.com/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send instructions/i }));

    // Expect the email sent modal to be rendered
    await screen.findByText(/mock modal/i);
    fireEvent.click(screen.getByRole("button", { name: /verify/i }));

    // Expect the verify email modal to be rendered
    await screen.findByText(/mock verify email modal/i);
    fireEvent.click(screen.getByRole("button", { name: /verify complete/i }));

    // Expect the password reset modal to be rendered
    await screen.findByText(/mock password reset modal/i);
    fireEvent.click(screen.getByRole("button", { name: /reset/i }));

    // Expect the password reset confirmation modal to be rendered
    await screen.findByText(/mock password reset confirmation/i);
    fireEvent.click(screen.getByRole("button", { name: /close/i }));

    // Ensure modals close correctly
    await waitFor(() =>
      expect(
        screen.queryByText(/mock password reset confirmation/i),
      ).not.toBeInTheDocument(),
    );
  });
});
