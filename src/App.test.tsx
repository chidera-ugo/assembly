import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { getResults as mockGetResults } from "./utils/api";
import App from "./App";

jest.mock("./utils/api");

describe("App Component", () => {
  it("renders app", () => {
    render(<App />);
    const element = screen.getByText("Github Registry");
    expect(element).toBeInTheDocument();
  });

  it("returns results", async () => {
    (mockGetResults as any).mockResolvedValueOnce({
      status: 200,
      data: {
        total_count: 3,
        incomplete_results: false,
        items: [
          {
            login: "chidera-ugo",
            id: 69648843,
            avatar_url: "https://avatars.githubusercontent.com/u/69648843?v=4",
            html_url: "https://github.com/chidera-ugo",
            type: "User",
          },
        ],
      },
    });

    render(<App />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    const button = screen.getByRole("button");
    const value = "chidera ugo";

    fireEvent.change(input, { target: { value } });
    fireEvent.click(button);

    expect(mockGetResults).toHaveBeenCalledWith(value, false);
    expect(mockGetResults).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      const link = screen.getAllByRole("link");
      expect(link).toHaveLength(1);
    });

    await waitFor(() => {
      const link = screen.getAllByRole("link");
      expect(link[0]).toHaveTextContent("Visit Profile");
    });
  });
});
