import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("/chat"); 

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  const receiveMessage = (message) =>
    setMessages((prevMessages) => [message, ...prevMessages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      body: message,
      from: "YO",
    };
    setMessages((prevMessages) => [newMessage, ...prevMessages]);
    setMessage("");
    socket.emit("message", newMessage.body);
  };

  return (
    <div className="h-screen bg-zinc-800 text-white flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-zinc-900 p-10">
        <h1 className="text-2xl font-bold my-2">Chat con Profesional</h1>
        <input
          name="message"
          type="text"
          placeholder="Escriba su mensaje..."
          onChange={(e) => setMessage(e.target.value)}
          className="border-2 border-zinc-500 p-2 w-full text-black"
          value={message}
          autoFocus
        />

        <ul className="h-80 overflow-y-auto">
          {messages.map((message, index) => (
            <li
              key={index}
              className={`my-2 p-2 table text-sm rounded-md ${
                message.from === "YO" ? "bg-sky-700 ml-auto" : "bg-black"
              }`}
            >
              <b>{message.from}</b>: {message.body}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default ChatPage;