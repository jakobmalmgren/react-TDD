import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateMessage from "./components/CreateMessage/CreateMessage";
import ShowMessage from "./components/ShowMessage/ShowMessage";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages([newMessage, ...messages]); // senaste meddelande först
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CreateMessage handleSendMessage={handleSendMessage} />
            </>
          }
        />

        <Route
          path="/showmessage"
          element={<ShowMessage messages={messages} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
