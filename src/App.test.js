import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import context from "jest-plugin-context";

import App from "./App";

describe("<App />", () => {
  it("renders todo list header", () => {
    render(<App />);

    screen.getByText("Todo List");
  });

  context("without a todo", () => {
    it("renders empty todo list", () => {
      render(<App />);

      screen.getByText("please add a todo");
    });

    it("renders a new todo when user adds one", () => {
      const { container } = render(<App />);

      const inputField = screen.getByRole("textbox");

      userEvent.type(inputField, "go work{enter}");

      expect(container).toHaveTextContent("go work");
    });
  });
});
