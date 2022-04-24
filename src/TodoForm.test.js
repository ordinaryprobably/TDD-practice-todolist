import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TodoForm from "./TodoForm";

describe("TodoForm component", () => {
  it("renders user input", () => {
    render(<TodoForm addTodo={jest.fn()} />);

    const inputField = screen.getByRole("textbox");

    userEvent.type(inputField, "hi hello");

    expect(inputField).toHaveValue("hi hello");
  });

  it("calls addTodo when ", () => {
    render(<TodoForm addTodo={jest.fn()} />);

    const inputField = screen.getByRole("textbox");

    userEvent.type(inputField, "hellou");
    userEvent.type(inputField, "{enter}");

    expect(inputField).toHaveValue("");
  });
});
