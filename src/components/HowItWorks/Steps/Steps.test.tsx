// src/components/HowItWorks/Steps/Steps.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";

import StepTabs from "./Steps";

describe("stepTabs", () => {
  it("renders the StepTabs component", () => {
    expect.assertions(6);
    render(<StepTabs />);

    const profileTab = screen.getByText(/profile setup/i);
    const difficultyTab = screen.getByText(/difficulty selection/i);
    const questTab = screen.getByText(/quest selection/i);
    const learningTab = screen.getByText(/learning begins/i);

    expect(profileTab).toBeInTheDocument();
    expect(difficultyTab).toBeInTheDocument();
    expect(questTab).toBeInTheDocument();
    expect(learningTab).toBeInTheDocument();

    // Check if the default content is rendered using data-testid
    const descriptionPart1 = screen.getByTestId("profile-description-part1");
    const descriptionPart2 = screen.getByText(/setting up your profile/i);

    expect(descriptionPart1).toBeInTheDocument();
    expect(descriptionPart2).toBeInTheDocument();
  });

  it("switches to the correct tab content", () => {
    expect.assertions(1);
    render(<StepTabs />);

    const difficultyTab = screen.getByText(/difficulty selection/i);
    fireEvent.click(difficultyTab);

    const questTab = screen.getByText(/quest selection/i);
    fireEvent.click(questTab);

    // Check if the content for the "Quest Selection" tab is rendered
    const descriptionQuestPart2 = screen.getByText(/select a quest/i);

    expect(descriptionQuestPart2).toBeInTheDocument();
  });
});
