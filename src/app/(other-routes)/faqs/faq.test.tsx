import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import FAQs from "./page";

describe("fAQs Page", () => {
  it("renders the FAQ page with header, date, and introduction", async () => {
    // Render the component
    render(<FAQs />);

    // Check for the header
    expect(screen.getByText("FAQs")).toBeInTheDocument();

    // Check for the "Last updated:" text
    expect(screen.getByText("Last updated:")).toBeInTheDocument();

    // Generate the expected date string dynamically
    const expectedDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Wait for the date to appear with the dynamically generated date
    await waitFor(() =>
      expect(screen.getByText(expectedDate)).toBeInTheDocument(),
    );

    // Check for the introduction section
    expect(screen.getByText("Introduction")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Welcome to our FAQ section! Here, we've compiled answers to some of the most common questions about our AI-powered language learning game. Whether you're just starting or looking for advanced features, we hope this page will help you get the most out of your language learning journey.",
      ),
    ).toBeInTheDocument();
  });
});
