import React from "react";
import "./CreateMessage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CreateMessage = ({ handleSendMessage }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [data, setData] = useState({ date: "", message: "", author: "" });

  const handleClick = () => {
    if (data.message.trim() === "") {
      setError("ditt inputfält kan ej vara tomt");
    } else {
      const newMessage = {
        ...data,
        date: new Date().toLocaleString("sv-SE", {
          day: "2-digit",
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setError("");
      handleSendMessage(newMessage);
      navigate("/showmessage");
      setData({ date: "", message: "", author: "" });
    }
  };
  return (
    <section className="createMessage" data-testid="createMessage">
      <textarea
        name=""
        id=""
        placeholder="message"
        value={data.message}
        onChange={(e) => setData({ ...data, message: e.target.value })}
      ></textarea>
      <input
        type="text"
        placeholder=" Användarnamn"
        value={data.author}
        onChange={(e) => setData({ ...data, author: e.target.value })}
      />
      <button onClick={handleClick}>Publicera</button>
      <Link to="/showmessage">gå till meddelanden</Link>
      {error && <p>{error}</p>}
    </section>
  );
};

export default CreateMessage;
