import React from "react";
import "./ShowMessage.css";

const ShowMessage = ({ messages = [] }) => {
  console.log("hmm", messages);

  return (
    <div className="showMessage">
      {messages.length === 0 && <p>there are no messages</p>}

      {messages.map((msg, index) => (
        <section key={index} data-testid="message-item">
          <p>{msg.date}</p>
          <p>{msg.message}</p>
          <p>{msg.author}</p>
        </section>
      ))}
    </div>
  );
};

export default ShowMessage;
