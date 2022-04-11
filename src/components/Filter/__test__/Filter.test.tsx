import { render, screen, fireEvent } from "@testing-library/react";
import { GlobalContextProvider } from "../../../context/GlobalContext";
import Filter from "../Filter";

const MockFilter = () => {
  return (
    <GlobalContextProvider>
      <Filter />
    </GlobalContextProvider>
  );
};

describe("Filter", () => {
  it("Input element is present in page", () => {
    render(<MockFilter />);

    const inputElement = screen.getByPlaceholderText(
      /search by name, at least 3 characters/i
    );

    expect(inputElement).toBeInTheDocument();
  });

  it("Should be able to type input", () => {
    render(<MockFilter />);

    const inputElement: HTMLInputElement = screen.getByPlaceholderText(
      /search by name, at least 3 characters/i
    );

    fireEvent.change(inputElement, { target: { value: "Jake" } });

    expect(inputElement.value).toBe("Jake");
  });
});
