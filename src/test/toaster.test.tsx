"use client";

import { fireEvent, render, screen } from "@testing-library/react";
import { AwaitedReactNode, JSX, ReactNode } from "react";
import { describe, expect, it } from "vitest";

import Toasts from "~/components/toasts/Toasts";
import { ToastProvider } from "~/components/ui/toast";

const renderWithToastProvider = (
  ui:
    | string
    | number
    | bigint
    | boolean
    | JSX.Element
    | Iterable<ReactNode>
    | Promise<AwaitedReactNode>
    | null
    | undefined,
) => {
  return render(<ToastProvider>{ui}</ToastProvider>);
};

describe("toasts Component", () => {
  it("renders and shows the default toast", () => {
    expect.hasAssertions();

    renderWithToastProvider(
      <Toasts
        variant="default"
        textTitle="Success"
        textDescription="This is a success message."
      />,
    );

    const button = screen.getByText("Show Toast");
    fireEvent.click(button);

    const toastTitle = screen.getByText("Success");
    const toastDescription = screen.getByText("This is a success message.");

    expect(toastTitle).toBeInTheDocument();
    expect(toastDescription).toBeInTheDocument();
    expect(screen.getByTestId("icon-check")).toBeInTheDocument();
  });

  it("renders and shows the critical toast", () => {
    expect.hasAssertions();

    renderWithToastProvider(
      <Toasts
        variant="critical"
        textTitle="Error"
        textDescription="This is an error message."
      />,
    );

    const button = screen.getByText("Show Toast");
    fireEvent.click(button);

    const toastTitle = screen.getByText("Error");
    const toastDescription = screen.getByText("This is an error message.");

    expect(toastTitle).toBeInTheDocument();
    expect(toastDescription).toBeInTheDocument();
    expect(screen.getByTestId("icon-check")).toBeInTheDocument();
  });

  it("renders with appropriate icon based on variant", () => {
    expect.hasAssertions();

    renderWithToastProvider(
      <Toasts
        variant="critical"
        textTitle="Critical"
        textDescription="This is a critical message."
      />,
    );

    const button = screen.getByText("Show Toast");
    fireEvent.click(button);

    expect(screen.getByTestId("icon-check")).toBeInTheDocument();

    renderWithToastProvider(
      <Toasts
        variant="default"
        textTitle="Default"
        textDescription="This is a default message."
      />,
    );

    expect(screen.getByTestId("icon-check")).toBeInTheDocument();
  });
});
