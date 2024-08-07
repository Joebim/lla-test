import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";

import AdminSidebar from "~/components/sidebar/admin/admin-sidebar";
import { sidebarMenu } from "~/config/sidebarMenus";

describe("adminSidebar", () => {
  it("renders the sidebar with menu items", () => {
    expect.hasAssertions();
    render(<AdminSidebar />);

    for (const item of sidebarMenu) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    }
  });

  it("toggles the sidebar collapse state", () => {
    expect.hasAssertions();
    render(<AdminSidebar />);

    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);

    for (const item of sidebarMenu) {
      expect(screen.queryByText(item.title)).not.toBeInTheDocument();
    }

    fireEvent.click(toggleButton);

    for (const item of sidebarMenu) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    }
  });

  it("collapses sidebar on mobile view", async () => {
    expect.hasAssertions();
    render(<AdminSidebar />);

    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));

    await waitFor(() => {
      for (const item of sidebarMenu) {
        expect(screen.queryByText(item.title)).not.toBeInTheDocument();
      }
    });

    global.innerWidth = 1024;
    global.dispatchEvent(new Event("resize"));

    await waitFor(() => {
      for (const item of sidebarMenu) {
        expect(screen.getByText(item.title)).toBeInTheDocument();
      }
    });
  });
});
