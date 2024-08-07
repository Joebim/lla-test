import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import AdminProfile from "./page";

describe("admin profile", () => {
  describe("responsive component", () => {
    it("is responsive on different screen sizes", () => {
      expect.assertions(1);

      window.innerWidth = 320;
      window.dispatchEvent(new Event("resize"));

      render(<AdminProfile />);
      const mobileElement = screen.getByTestId("profile-settings");
      expect(mobileElement).toBeInTheDocument();
    });
  });
});
