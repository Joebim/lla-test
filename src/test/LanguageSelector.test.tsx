import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import LanguageSelector from "~/components/common/dropdowns/LanguageSelector";

describe("languageSelector", () => {
  it("renders without crashing", () => {
    expect.assertions(1);
    render(<LanguageSelector />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("toggles dropdown on button click", () => {
    expect.assertions(2);
    render(<LanguageSelector />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(screen.queryByText("French")).not.toBeInTheDocument();
    expect(screen.queryByText("Select new language")).not.toBeInTheDocument();
  });
});
