import { render, screen } from "@testing-library/react";

import { quests } from "./data";
import QuestHero from "./QuestHero";

describe("questhero component", () => {
  it("should render the section with correct styling", () => {
    expect.assertions(2);
    render(<QuestHero />);
    const section = screen.getByTestId("quest-hero-section");
    expect(section).toHaveClass(
      "mt-12 w-full bg-secondary-100 p-4 sm:p-6 md:p-10",
    );
    expect(section).toHaveStyle({ fontFamily: "Axiforma" });
  });

  it("should render the heading with correct text and styling", () => {
    expect.assertions(2);
    render(<QuestHero />);
    const heading = screen.getByTestId("quest-hero-heading");
    expect(heading).toHaveTextContent("Explore Language Quests");
    expect(heading).toHaveClass(
      "text-secondary-200 mb-8 pt-12 text-center text-3xl font-bold md:text-4xl lg:text-5xl",
    );
  });

  it("should render the correct number of QuestCard components", () => {
    expect.assertions(1); // Expecting 1 assertion
    render(<QuestHero />);
    const questCards = screen.getAllByTestId("quest-card");
    expect(questCards).toHaveLength(quests.length);
  });
});
