import React from "react";
import "./ShowMessage.css";

const ShowMessage = ({ messages = [] }) => {
  return (
    <div className="showMessage" data-testid="showMessage">
      {messages.length === 0 && <p>there are no messages</p>}

      {messages.map((msg, index) => (
        <section key={index} data-testid="message-item">
          <p>{msg.date}</p>
          <p>{msg.message}</p>
          <p>{msg.author}</p>
        </section>
      ))}
      <div className="aa"></div>
      <div className="aa"></div>
      <div className="aa"></div>
      <div className="aa"></div>
    </div>
  );
};

export default ShowMessage;
