import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import QuestLevelTimer from "./QuestLevelTimer";

describe("questLevelTimer", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders correctly with initial time", () => {
    expect.hasAssertions();
    render(<QuestLevelTimer initialTime={300} />);
    expect(screen.getByText("05:00")).toBeDefined();
    expect(screen.getByAltText("Timer Clock")).toBeDefined();
  });

  it("updates time correctly", () => {
    expect.hasAssertions();
    render(<QuestLevelTimer initialTime={300} />);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(screen.getByText("04:59")).toBeDefined();
  });

  it("changes color when time is 1 minute or less", () => {
    expect.hasAssertions();
    const { container } = render(<QuestLevelTimer initialTime={61} />);

    const timerElement = screen.getByText("01:01");
    const outerDiv = container.firstChild as HTMLElement;

    expect(timerElement).toHaveStyle({ color: "#B22F00" });
    expect(outerDiv).toHaveStyle({ borderColor: "#B22F00" });

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(timerElement).toHaveStyle({ color: "#FF0000" });
    expect(outerDiv).toHaveStyle({ borderColor: "#FE6A19" });
  });

  it("stops at 00:00 and doesn't go negative", () => {
    expect.hasAssertions();
    render(<QuestLevelTimer initialTime={1} />);

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(screen.getByText("00:00")).toBeDefined();
  });

  it("maintains red color and border when time is at 00:00", () => {
    expect.hasAssertions();
    const { container } = render(<QuestLevelTimer initialTime={1} />);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    const timerElement = screen.getByText("00:00");
    const outerDiv = container.firstChild as HTMLElement;

    expect(timerElement).toHaveStyle({ color: "#FF0000" });
    expect(outerDiv).toHaveStyle({ borderColor: "#FE6A19" });
  });
});
