import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Overview from "./page";

vi.mock("../../../../api/adminDashboard/route", () => ({
  getAllUsers: vi.fn(() =>
    Promise.resolve({
      active: 100,
      inactive: 50,
      disabled: 10,
    }),
  ),
}));

describe("overview Component", () => {
  it("renders overview data", async () => {
    expect.assertions(0); // Specify the number of assertions

    // Render the component
    render(<Overview />);
  });
});
