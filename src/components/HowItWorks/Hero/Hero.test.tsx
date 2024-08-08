import { render, screen } from "@testing-library/react";

import HeroSection from "./Hero";

describe("heroSection", () => {
  it("renders the HeroSection component", () => {
    expect.assertions(2);
    render(<HeroSection />);

    // Check if the heading is rendered
    const heading = screen.getByText(/how it works/i);
    expect(heading).toBeInTheDocument();

    // Check if the images are rendered
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(3);
  });
});
