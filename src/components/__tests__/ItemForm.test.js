import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ItemForm from "../ItemForm";

test("renders form and handles input and submit", () => {
  const itemInput = "Eggs";
  const onInputChange = jest.fn();
  const onSubmit = jest.fn();

  render(
    <ItemForm
      itemInput={itemInput}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
    />
  );

  // Check if input is rendered with the correct value
  const input = screen.getByDisplayValue(itemInput);
  expect(input).toBeInTheDocument();

  // Simulate input change
  fireEvent.change(input, { target: { value: "Butter" } });
  expect(onInputChange).toHaveBeenCalledWith("Butter");

  // Simulate form submit
  fireEvent.submit(screen.getByRole("button", { name: /submit/i }));
  expect(onSubmit).toHaveBeenCalled();
});
