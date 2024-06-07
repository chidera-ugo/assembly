import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { SearchForm } from ".";
import { theme } from "../../../constants/theme";

describe("Search Form", () => {
  test("input value is persisted in url", () => {
    render(
      <ThemeProvider theme={theme}>
        <SearchForm
          isLoading={false}
          setIsLoading={() => null}
          emitResults={() => null}
        />
      </ThemeProvider>,
    );

    const input = screen.getByRole("textbox") as HTMLInputElement;
    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    const value = "chidera-ugo";

    fireEvent.change(input, { target: { value } });
    fireEvent.click(button);

    expect(input.value).toBe(value);

    const urlValue = window.location.href.split("?q=");

    expect(urlValue[1]).toBe(value);
  });
});
