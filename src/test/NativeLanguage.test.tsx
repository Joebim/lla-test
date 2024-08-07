import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import NativeLanguage from "~/components/select-language/native-language";

describe("nativeLanguage Component", () => {
  it("should render correctly", () => {
    expect.hasAssertions();
    render(<NativeLanguage />);
    expect(screen.getByText("I speak...")).toBeInTheDocument();
    expect(screen.getByText("Select your native language")).toBeInTheDocument();
    expect(screen.getByText("Your native language")).toBeInTheDocument();
  });

  it("should toggle dropdown when button is clicked", () => {
    expect.hasAssertions();
    render(<NativeLanguage />);
    const button = screen.getByRole("button", {
      name: /your native language/i,
    });
    fireEvent.click(button);
    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("French")).toBeInTheDocument();
    expect(screen.getByText("German")).toBeInTheDocument();
  });

  it("should select a language and update the state", () => {
    expect.hasAssertions();
    render(<NativeLanguage />);
    const button = screen.getByRole("button", {
      name: /your native language/i,
    });
    fireEvent.click(button);
    const languageOption = screen.getByText("English");
    fireEvent.click(languageOption);
    expect(
      screen.getByRole("button", { name: /english/i }),
    ).toBeInTheDocument();
  });

  it("should close dropdown when a language is selected", () => {
    expect.hasAssertions();
    render(<NativeLanguage />);
    const button = screen.getByRole("button", {
      name: /your native language/i,
    });
    fireEvent.click(button);
    const languageOption = screen.getByText("English");
    fireEvent.click(languageOption);
    expect(screen.queryByText("French")).not.toBeInTheDocument();
  });

  it("should render the language flag when a language is selected", () => {
    expect.hasAssertions();
    render(<NativeLanguage />);
    const button = screen.getByRole("button", {
      name: /your native language/i,
    });
    fireEvent.click(button);
    const languageOption = screen.getByText("English");
    fireEvent.click(languageOption);
    expect(
      screen.getByRole("button", { name: /english/i }),
    ).toBeInTheDocument();
    const image = screen.getByAltText("/flags/english_flag.svg_flag");
    expect(image).toBeInTheDocument();
  });
});
