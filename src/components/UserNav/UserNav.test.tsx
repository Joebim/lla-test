import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import UserNav from "./UserNav";

// Mock useSession hook
vi.mock("next-auth/react", () => ({
  useSession: vi.fn().mockReturnValue({
    data: {
      user: {
        name: "John Doe",
        email: "johndoe@example.com",
        image: undefined,
      },
    },
    status: "authenticated",
  }),
}));

describe("userNav", () => {
  it("renders the UserNav component", () => {
    expect.assertions(7);
    render(<UserNav />);
    expect(screen.getByAltText("notification-icon")).toBeInTheDocument();
    expect(screen.getByAltText("quest-icon-active")).toBeInTheDocument();
    expect(screen.getByAltText("quest-icon-inactive")).toBeInTheDocument();
    expect(screen.getByAltText("progress-icon-active")).toBeInTheDocument();
    expect(screen.getByAltText("progress-icon-inactive")).toBeInTheDocument();
    expect(screen.getByText("Quests")).toBeInTheDocument();
    expect(screen.getByText("Progress")).toBeInTheDocument();
  });

  it("toggles the notifications dropdown", () => {
    expect.assertions(1);
    render(<UserNav />);
    const notificationIcon = screen.getByAltText("notification-icon");
    fireEvent.click(notificationIcon);
    expect(screen.getByText("Notifications")).toBeInTheDocument();
  });

  it("renders the LanguageSelector", () => {
    expect.assertions(1);
    render(<UserNav />);
    expect(screen.getByAltText("flag")).toBeInTheDocument();
  });

  it("renders the UserNavDropdown", () => {
    expect.assertions(1);
    render(<UserNav />);
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });
});
