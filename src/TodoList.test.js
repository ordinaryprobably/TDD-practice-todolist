import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TodoList from "./TodoList";

describe("TodoList component", () => {
  const todos = [{ id: 1, task: "first todo" }];
  const handleDelete = jest.fn();

  it("renders todos", () => {
    render(<TodoList todos={todos} />);

    screen.getByText("first todo");
  });

  it("delete handler is called when delete button is clicked", () => {
    render(<TodoList todos={todos} handleDelete={handleDelete} />);

    const todo = screen.getByText(todos[0].task);
    const deleteButton = todo.nextSibling;

    userEvent.click(deleteButton);

    expect(handleDelete).toBeCalled();
  });
});
