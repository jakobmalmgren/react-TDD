import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("should navigate from create message TO show message compontent", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: "gå till meddelanden" });
    await userEvent.click(link);

    expect(screen.getByTestId("showMessage")).toBeInTheDocument();
  });
  it("should work to navigate from create message page to see all message page pushing Publicera btn", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText("message");
    await userEvent.type(input, "test");

    const button = screen.getByRole("button", { name: /Publicera/i });
    await userEvent.click(button);

    expect(screen.getByTestId("showMessage")).toBeInTheDocument();
    expect(screen.getByText("test")).toBeInTheDocument();
  });
  it("should navigate from show message compontent TO  create message ", async () => {
    render(
      <MemoryRouter initialEntries={["/showmessage"]}>
        <App />
      </MemoryRouter>
    ); // name här kan ja a genom alt attributet där en ikon ex är som länk
    const link = screen.getByRole("link", { name: /visa create messages/ });
    await userEvent.click(link);

    expect(screen.getByTestId("createMessage")).toBeInTheDocument();
  });

  it("should clear all the inputs so if i leave the page create messages and come back it should be empty ", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const buttonToShowMessages = screen.getByRole("button", {
      name: /to all messages/i,
    });

    await userEvent.click(buttonToShowMessages);

    expect(screen.getByTestId("showMessage")).toBeInTheDocument();

    const link = screen.getByRole("link", { name: /visa create messages/ });
    await userEvent.click(link);

    const messageInput = screen.getByPlaceholderText("message");
    expect(messageInput).toHaveValue("");

    const userInput = screen.getByPlaceholderText("Användarnamn");
    expect(userInput).toHaveValue("");
  });
});
