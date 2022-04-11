import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Footer", () => {
  it("Header element is present in page", () => {
    render(<Header />);
    const headingElement = screen.getByRole("heading");

    expect(headingElement).toBeInTheDocument();
  });
});
