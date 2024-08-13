import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import StepTabs from "./Steps";

describe("stepTabs", () => {
  it("renders the StepTabs component", () => {
    expect.assertions(6); // Adjust based on the number of assertions

    render(<StepTabs />);

    // Check for tab buttons
    const profileTab = screen.getByText(/profile setup/i);
    const difficultyTab = screen.getByText(/difficulty selection/i);
    const questTab = screen.getByText(/quest selection/i);
    const learningTab = screen.getByText(/learning begins/i);

    expect(profileTab).toBeInTheDocument();
    expect(difficultyTab).toBeInTheDocument();
    expect(questTab).toBeInTheDocument();
    expect(learningTab).toBeInTheDocument();

    // Check initial content
    const descriptionNumber = screen.getByTestId("description-number-profile");
    const descriptionText = screen.getByTestId("description-text-profile");

    expect(descriptionNumber).toHaveTextContent("01.");
    expect(descriptionText).toHaveTextContent(
      "Begin Your Learning Journey By Setting Up Your Profile And Picking Languages You Are Interested In",
    );
  });

  it("changes content when tabs are clicked", async () => {
    expect.assertions(2); // Adjust based on the number of assertions

    render(<StepTabs />);

    // Click the 'Difficulty Selection' tab
    const difficultyTab = screen.getByText(/difficulty selection/i);
    fireEvent.click(difficultyTab);

    // Wait for the content to update
    await waitFor(() => {
      const descriptionNumber = screen.getByTestId(
        "description-number-difficulty",
      );
      expect(descriptionNumber).toHaveTextContent("02.");
    });

    // Additional assertions outside of waitFor
    const descriptionText = screen.getByTestId("description-text-difficulty");
    expect(descriptionText).toHaveTextContent(
      "Before You Play, Set Your Difficulty Level So You Get The Best Experience For You",
    );
  });
});
