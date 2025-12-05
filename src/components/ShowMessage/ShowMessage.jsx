import React from "react";
import { FaPen } from "react-icons/fa";
import "./ShowMessage.css";
import { Link } from "react-router-dom";

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
      <div className="aa">aa</div>
      <div className="aa">aa</div>
      <div className="aa">aa</div>
      <div className="aa">aa</div>
      <div className="aa">aa</div>
      <div className="aa">aa</div>

      <div className="aa">aa</div>
      <div className="aa">aa</div>
      <div className="aa">aa</div>
      <div className="aa">aa</div>
      <div className="aa">aa</div>
      <div className="aa">aa</div>
      <div className="aa">aa</div>
      <div className="aa">aa</div>
      <div className="aa">aa</div>
      <div className="aa">aa</div>
      <div className="aa">aa</div>
      <div className="aa">aa</div>

      <Link to="/" className="link" aria-label="visa create messages">
        <FaPen></FaPen>
      </Link>
    </div>
  );
};

export default ShowMessage;
