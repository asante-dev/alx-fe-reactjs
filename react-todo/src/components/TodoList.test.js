// src/components/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Wire up Tailwind")).toBeInTheDocument();
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/add todo/i);
    const button = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("can toggle a todo", () => {
    render(<TodoList />);

    const todo = screen.getByRole("button", { name: /toggle-Learn React/i });
    fireEvent.click(todo);

    expect(todo).toHaveAttribute("aria-pressed", "true");
  });

  test("can delete a todo", () => {
    render(<TodoList />);

    const deleteButton = screen.getByRole("button", { name: /delete-Learn React/i });
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });

  test("shows empty message when no todos left", () => {
    render(<TodoList />);

    // delete all todos one by one
    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
    deleteButtons.forEach((btn) => fireEvent.click(btn));

    expect(screen.getByLabelText("empty-message")).toBeInTheDocument();
  });
});
