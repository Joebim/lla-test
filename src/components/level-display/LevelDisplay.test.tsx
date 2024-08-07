import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import LevelDisplay from "./LevelDisplay";

// Mock the next/image component
vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    ...properties
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
    // eslint-disable-next-line @next/next/no-img-element
  }) => <img src={src} alt={alt} {...properties} />,
}));

describe("levelDisplay", () => {
  it("renders the component with default props", () => {
    expect.hasAssertions();
    render(<LevelDisplay />);

    expect(screen.getByText("The Burning Building")).toBeDefined();
    expect(screen.getByText("Levels Completed:")).toBeDefined();
    expect(screen.getByText("0/4 Words Learnt")).toBeDefined();
    expect(screen.getByAltText("Burning Building quest")).toBeDefined();
  });

  it("displays correct number of completed levels", () => {
    expect.hasAssertions();
    render(<LevelDisplay completedLevels={2} />);

    const completedIndicators = screen.getAllByTestId("completed-indicator");
    const incompleteIndicators = screen.getAllByTestId("incomplete-indicator");

    expect(completedIndicators).toHaveLength(2);
    expect(incompleteIndicators).toHaveLength(2);
    expect(screen.getByText("2/4 Words Learnt")).toBeDefined();
  });

  it("displays all levels as incomplete when completedLevels is 0", () => {
    expect.hasAssertions();
    render(<LevelDisplay completedLevels={0} />);

    const incompleteIndicators = screen.getAllByTestId("incomplete-indicator");

    expect(incompleteIndicators).toHaveLength(4);
    expect(screen.queryByTestId("completed-indicator")).toBeNull();
  });

  it("displays all levels as complete when completedLevels is 4", () => {
    expect.hasAssertions();
    render(<LevelDisplay completedLevels={4} />);

    const completedIndicators = screen.getAllByTestId("completed-indicator");

    expect(completedIndicators).toHaveLength(4);
    expect(screen.queryByTestId("incomplete-indicator")).toBeNull();
    expect(screen.getByText("4/4 Words Learnt")).toBeDefined();
  });
});
