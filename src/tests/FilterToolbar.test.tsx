import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import FilterToolbar from "../components/FilterToolbar";

describe("FilterToolbar", () => {
  test("Should set commit message search value when typing", async () => {
    // Arrange
    const onFilterChange = jest.fn();
    render(
      <BrowserRouter>
        <FilterToolbar onFilterChange={onFilterChange} />
      </BrowserRouter>
    );
    const input = screen.getByTestId("filter-input");

    // Act
    userEvent.type(input, "abc");

    // Assert
    await waitFor(() => expect(onFilterChange).toHaveBeenCalled());
  });
});
