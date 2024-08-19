import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import List from "../List";

test("renders list items and handles delete", () => {
  const items = [
    { id: 1, item: "Milk" },
    { id: 2, item: "Bread" },
  ];
  const handleDelete = jest.fn();

  render(<List items={items} onDelete={handleDelete} />);

  // Check if items are rendered
  items.forEach((item) => {
    expect(screen.getByText(item.item)).toBeInTheDocument();
  });

  // Simulate delete
  fireEvent.click(screen.getByText("Milk"));
  expect(handleDelete).toHaveBeenCalledWith(1);
});
