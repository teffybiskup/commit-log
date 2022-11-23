import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CommitTable from "../components/CommitTable";

jest.mock("../components/CommitGraph", () => () => {
  return null;
});

describe("CommitTable", () => {
  test("Should show all commits", async () => {
    // Arrange
    render(
      <BrowserRouter>
        <CommitTable />
      </BrowserRouter>
    );

    // Assert
    await waitFor(() =>
      expect(screen.getAllByTestId("commit-row")).toHaveLength(14)
    );
  });

  test("Should filter commits", async () => {
    // Arrange
    render(
      <BrowserRouter>
        <CommitTable filterSearch={"commit"} />
      </BrowserRouter>
    );

    // Assert
    await waitFor(() =>
      expect(screen.getAllByTestId("commit-row")).toHaveLength(3)
    );
  });
});
