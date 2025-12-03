import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ShowMessage from "./ShowMessage";

describe("ShowMessage", () => {
  it("should show all the messages", () => {
    // arrange
    const messages = [
      {
        date: "3 Nov, 09:23",
        message: "test",
        author: "jakob",
      },
    ];
    render(<ShowMessage messages={messages} />);

    //act
    const dateEl = screen.getByText("3 Nov, 09:23");
    const messageEl = screen.getByText("test");
    const authorEl = screen.getByText("jakob");
    //assert
    expect(dateEl).toBeInTheDocument();
    expect(messageEl).toBeInTheDocument();
    expect(authorEl).toBeInTheDocument();
  });

  it("should be sorted latest message first", () => {
    //arrange
    const messages = [
      {
        date: "3 Nov, 09:23",
        message: "test",
        author: "jakob",
      },
      {
        date: "11 Sept, 09:23",
        message: "test2",
        author: "jakob1",
      },
    ];
    render(<ShowMessage messages={messages} />);
    //act
    const displayMessages = screen.getAllByTestId("message-item");
    //assert
    expect(displayMessages[0]).toHaveTextContent("test");
    expect(displayMessages[1]).toHaveTextContent("test2");
  });
  it("should say no messages if there are no messages", () => {
    // arrange
    const messages = [];
    render(<ShowMessage messages={messages} />);

    //act
    const messagesEl = screen.queryAllByTestId("message-item");
    const errorMessageEl = screen.getByText("there are no messages");

    // assert
    expect(messagesEl).toHaveLength(0);
    expect(errorMessageEl).toBeInTheDocument();
  });
});
