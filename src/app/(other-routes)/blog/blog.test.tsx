import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Blog from "./page";

// Mock the useRouter hook
vi.mock("next/router", () => ({
  useRouter: () => ({
    route: "/",
    pathname: "",
    query: "",
    asPath: "",
  }),
}));

// Mock the Image component
vi.mock("next/image", () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    ...properties
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} {...properties} />;
  },
}));

// Mock the Link component
vi.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

describe("blog Page", () => {
  it("renders Blog page", () => {
    expect.hasAssertions();
    render(<Blog />);

    // Check for the presence of the "Blog" heading
    const headingElement = screen.getByRole("heading", { name: /blog/i });
    expect(headingElement).toBeInTheDocument();

    // Check for the presence of blog post titles
    expect(
      screen.getByText("Useful Spanish Phrases To Learn"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Benefits of AI In Language Learning"),
    ).toBeInTheDocument();
    // Add more assertions for other blog post titles if needed
  });
});
