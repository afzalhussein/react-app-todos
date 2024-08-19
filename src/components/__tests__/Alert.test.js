import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Alert from "../Alert";

test("renders alert message", () => {
  const message = "Submit Successful";

  render(<Alert message={message} />);

  expect(screen.getByText(message)).toBeInTheDocument();
});
