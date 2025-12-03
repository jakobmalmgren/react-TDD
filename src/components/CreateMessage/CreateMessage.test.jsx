import { render, screen } from "@testing-library/react";
import CreateMessage from "./CreateMessage";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

// memory router va gör de?? o varför behövs..?? varfr hittar den ej knappar etc utan`??`
describe("CreateMessage", () => {
  it("should exist a button with the name publicera to send message", () => {
    //
    render(
      <MemoryRouter>
        <CreateMessage />
      </MemoryRouter>
    );

    // act
    const publiceraBtn = screen.getByRole("button", {
      name: "Publicera",
    });

    //assert
    expect(publiceraBtn).toBeInTheDocument();
  });

  it("should exist a textinput", () => {
    //arrange
    render(
      <MemoryRouter>
        <CreateMessage />
      </MemoryRouter>
    );

    //act
    const textinput = screen.getByPlaceholderText("message");

    //assert
    expect(textinput).toBeInTheDocument();
  });

  it("should say i can not post a message with an empty string, and an errormessage tell me I cant do that", async () => {
    //arrange
    render(
      <MemoryRouter>
        <CreateMessage />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText("message");
    //act
    const button = screen.getByRole("button", { name: "Publicera" });
    await userEvent.clear(input);
    await userEvent.click(button);
    const errorMessage = screen.getByText("ditt inputfält kan ej vara tomt");
    //assert
    expect(errorMessage).toHaveTextContent("ditt inputfält kan ej vara tomt");
  });
});
