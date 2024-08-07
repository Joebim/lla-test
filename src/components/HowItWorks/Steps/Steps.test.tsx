import { fireEvent, render, screen } from "@testing-library/react";

import StepTabs from "./Steps";

describe("stepTabs", () => {
  it("renders the StepTabs component", () => {
    expect.assertions(7);
    render(<StepTabs />);

    const profileTab = screen.getByText(/profile setup/i);
    const difficultyTab = screen.getByText(/difficulty selection/i);
    const questTab = screen.getByText(/quest selection/i);
    const learningTab = screen.getByText(/learning begins/i);

    expect(profileTab).toBeInTheDocument();
    expect(difficultyTab).toBeInTheDocument();
    expect(questTab).toBeInTheDocument();
    expect(learningTab).toBeInTheDocument();

    // Check if the default content is rendered
    const number = screen.getByText("01.");
    const descriptionPart1 = screen.getByText(
      /begin your learning journey by/i,
    );
    const descriptionPart2 = screen.getByText(/setting up your profile/i);

    expect(number).toBeInTheDocument();
    expect(descriptionPart1).toBeInTheDocument();
    expect(descriptionPart2).toBeInTheDocument();
  });

  it("switches to the correct tab content", () => {
    expect.assertions(3);
    render(<StepTabs />);

    const difficultyTab = screen.getByText(/difficulty selection/i);
    fireEvent.click(difficultyTab);

    // Check if the content for the "Difficulty Selection" tab is rendered
    const number = screen.getByText("02.");

    expect(number).toBeInTheDocument();

    const questTab = screen.getByText(/quest selection/i);
    fireEvent.click(questTab);

    // Check if the content for the "Quest Selection" tab is rendered
    const numberQuest = screen.getByText("03.");
    const descriptionQuestPart2 = screen.getByText(/select a quest/i);

    expect(numberQuest).toBeInTheDocument();
    expect(descriptionQuestPart2).toBeInTheDocument();
  });
});
