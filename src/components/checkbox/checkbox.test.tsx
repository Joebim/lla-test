// components/CheckboxList.test.tsx
import { render, screen } from "@testing-library/react";

import CheckboxList from "./checkbox";

describe("customCheckbox", () => {
  it("renders the checkbox in the document", () => {
    expect.assertions(1);

    render(<CheckboxList checked={false} onChange={() => {}} />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument();
  });
});
