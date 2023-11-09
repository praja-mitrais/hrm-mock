import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("Unit Test", () => {
  it("Test", () => {
    expect(true).toBe(true);
  });

  it("Renders main page correctly", async () => {
    const user = userEvent.setup();

    render(<App />);
    const buttonCount = screen.getByRole("button");

    expect(buttonCount.innerHTML).toBe("count is 0");

    await user.click(buttonCount);
    await user.click(buttonCount);

    expect(true).toBeTruthy();
    expect(buttonCount.innerHTML).toBe("count is 2");
  });
});
