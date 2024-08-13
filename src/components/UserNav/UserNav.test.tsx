import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next-nprogress-bar";
import { describe, expect, it, Mock, vi } from "vitest";

import UserNav from "./UserNav";

// Mock the useRouter hook
vi.mock("next-nprogress-bar", () => {
  const originalModule = vi.importActual("next-nprogress-bar");
  return {
    ...originalModule,
    useRouter: vi.fn(),
  };
});

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
  beforeEach(() => {
    (useRouter as Mock).mockReturnValue({
      push: vi.fn(),
    });
  });

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
