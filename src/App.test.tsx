import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders App component", () => {
    render(<App />);
    expect(screen.queryByDisplayValue(/React/)).toBeNull();
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "React" },
    });
    expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument();
    const button = screen.queryByText("Add");
    expect(button).toBeInTheDocument();
    fireEvent.click(button!);
    expect(screen.queryByText(/React/)).toBeInTheDocument();
  });
});