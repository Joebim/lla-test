import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, expect, it, vi } from "vitest";

import AdminSidebar from "~/components/sidebar/admin/admin-sidebar";

vi.mock("next/navigation", () => ({
  usePathname: () => "/mock-path",
}));

describe("adminSidebar", () => {
  it("renders the sidebar", () => {
    expect.hasAssertions();
    render(<AdminSidebar />);
    expect(screen.getByRole("complementary")).toBeInTheDocument();
  });

  it("toggles the sidebar collapse state", () => {
    expect.hasAssertions();
    render(<AdminSidebar />);

    const toggleButton = screen.getByRole("button");

    expect(screen.getByRole("complementary")).toHaveClass("w-72");

    fireEvent.click(toggleButton);
    expect(screen.getByRole("complementary")).toHaveClass("w-20");

    fireEvent.click(toggleButton);
    expect(screen.getByRole("complementary")).toHaveClass("w-72");
  });
});
