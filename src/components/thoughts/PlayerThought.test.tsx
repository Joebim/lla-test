import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ExampleComponent from "./PlayerThought";

// Mock the Image component from next/image
vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    width,
    height,
    className,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  ),
}));

describe("playerThought component", () => {
  it("renders the component with the correct thought", () => {
    expect.hasAssertions();
    render(<ExampleComponent />);

    // Check if the thought text is rendered
    const thoughtText = screen.getByText("I need to ask where the baby is");
    expect(thoughtText).toBeInTheDocument();

    // Check if the thought text has the correct classes
    expect(thoughtText).toHaveClass(
      "overflow-hidden",
      "text-center",
      "text-sm",
      "leading-tight",
      "text-white",
    );
  });

  it("renders the thought bubble with correct styles", () => {
    expect.hasAssertions();
    render(<ExampleComponent />);

    const thoughtBubble = screen.getByTestId("thought-bubble");
    expect(thoughtBubble).toHaveClass(
      "relative",
      "top-[30px]",
      "flex",
      "h-[145px]",
      "w-[240px]",
      "items-center",
      "justify-center",
      "rounded-[10px]",
      "border-2",
      "border-[#FE6A19]",
      "bg-black",
      "bg-opacity-30",
      "p-6",
    );
  });

  it("renders the thought vector image", () => {
    expect.hasAssertions();
    render(<ExampleComponent />);

    const image = screen.getByAltText("Thought vector");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/images/thought/Vector.png");
    expect(image).toHaveAttribute("width", "80");
    expect(image).toHaveAttribute("height", "80");
    expect(image).toHaveClass("animate-beat");
  });
});
