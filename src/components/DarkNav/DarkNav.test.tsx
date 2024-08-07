import { render, screen } from "@testing-library/react";
import { usePathname, useRouter } from "next/navigation";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";

import "@testing-library/jest-dom";

import DarkNav from "./DarkNav";

// Mock the useRouter and usePathname hooks
vi.mock("next/navigation", () => {
  const originalModule = vi.importActual("next/navigation");
  return {
    ...originalModule,
    useRouter: vi.fn(),
    usePathname: vi.fn(),
  };
});

describe("darkNav", () => {
  beforeEach(() => {
    (useRouter as Mock).mockReturnValue({
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
    });
    (usePathname as Mock).mockReturnValue("/");
  });

  it("renders desktop logo", () => {
    expect.assertions(1);
    render(<DarkNav />);
    const desktopLogo = screen.getByAltText("desktop-logo");
    expect(desktopLogo).toBeInTheDocument();
  });

  it("renders mobile logo", () => {
    expect.assertions(2);
    render(<DarkNav />);
    expect(screen.getByText("How it works")).toBeInTheDocument();
    expect(screen.getAllByText("Delve In")).toHaveLength(2);
  });
});
