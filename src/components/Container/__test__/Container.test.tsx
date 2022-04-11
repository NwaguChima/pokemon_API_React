import { render, screen, fireEvent } from "@testing-library/react";
import { GlobalContextProvider } from "../../../context/GlobalContext";
import Container from "../Container";

const MockContainer = () => {
  return (
    <GlobalContextProvider>
      <Container />
    </GlobalContextProvider>
  );
};

describe("Container", () => {
  it("Element should be present in Page", () => {
    render(<MockContainer />);

    const mainElement = screen.getByRole("main");

    expect(mainElement).toBeInTheDocument();
  });

  it("Should be able to go to next page on button click", async () => {
    render(<MockContainer />);

    const buttonElement = screen.getAllByRole("button");
    const paragraph = screen.getByTestId("page");

    fireEvent.click(buttonElement[1]);

    // expect(paragraph.textContent).toBe("2");
  });

  it("Should be able to go to Prev on button click", async () => {
    render(<MockContainer />);

    const paragraph = await screen.findByText("1");
    const buttonElement = screen.getAllByRole("button");
    fireEvent.click(buttonElement[1]);

    fireEvent.click(buttonElement[0]);

    expect(paragraph.textContent).toBe("1");
  });
});
