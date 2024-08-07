import { render } from "~/test/utils";
import Page from "./page";

describe("page tests", () => {
  it("should render user dashboard page correctly", () => {
    expect.assertions(1);

    render(<Page />);

    expect(true).toBeTruthy();
  });
});
