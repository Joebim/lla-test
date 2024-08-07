import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("footer", () => {
  it("renders correctly", () => {
    expect.hasAssertions();

    render(<Footer />);

    expect(
      screen.getByText("Your go-to language learning app."),
    ).toBeInTheDocument();
    expect(screen.getByText("Subscribe Now")).toBeInTheDocument();
    expect(
      screen.getByText("2024 © Delve. All Rights Reserved."),
    ).toBeInTheDocument();
  });
});
