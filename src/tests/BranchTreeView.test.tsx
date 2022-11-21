import { render, screen, waitFor } from "@testing-library/react";
import BranchTreeView from "../components/BranchTreeView";

describe("BranchTreeView", () => {
  test("Should render branch tree items", async () => {
    // Arrange
    render(<BranchTreeView />);

    // Assert
    await waitFor(() => expect(screen.getAllByTestId("tree-item")).toHaveLength(11));
  });
});
