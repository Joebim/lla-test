import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import StepTabs from "./Steps";

describe("StepTabs", () => {
  it("renders the StepTabs component", () => {
    render(<StepTabs />);

    // Check for tab buttons
    const profileTab = screen.getByText(/Profile Setup/i);
    const difficultyTab = screen.getByText(/Difficulty Selection/i);
    const questTab = screen.getByText(/Quest Selection/i);
    const learningTab = screen.getByText(/Learning Begins/i);

    expect(profileTab).toBeInTheDocument();
    expect(difficultyTab).toBeInTheDocument();
    expect(questTab).toBeInTheDocument();
    expect(learningTab).toBeInTheDocument();

    // Check initial content
    const descriptionNumber = screen.getByTestId("description-number-profile");
    const descriptionText = screen.getByTestId("description-text-profile");

    expect(descriptionNumber).toHaveTextContent("01.");
    expect(descriptionText).toHaveTextContent(
      "Begin Your Learning Journey By Setting Up Your Profile And Picking Languages You Are Interested In"
    );
  });

  it("changes content when tabs are clicked", async () => {
    render(<StepTabs />);

    // Click the 'Difficulty Selection' tab
    const difficultyTab = screen.getByText(/Difficulty Selection/i);
    fireEvent.click(difficultyTab);

    // Wait for the content to update
    await waitFor(() => {
      const descriptionNumber = screen.getByTestId("description-number-difficulty");
      const descriptionText = screen.getByTestId("description-text-difficulty");

      expect(descriptionNumber).toHaveTextContent("02.");
      expect(descriptionText).toHaveTextContent(
        "Before You Play, Set Your Difficulty Level So You Get The Best Experience For You"
      );
    });
  });
});
