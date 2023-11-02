import { useEffect, useState } from "react";
import io from "socket.io-client";
import { useAuth } from "../context/AuthContext";

const socket = io("http://127.0.0.1:4000");

function ChatPage() {
  const { isAuthenticated, logout, user } = useAuth();

  let username = '';
  //TODO: Ver de donde salen los user en null (probablemente esten en la DB)
  if(user != null){
    username = user.username
  }
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on('connect', () => {
      // console.log('Conectado a Socket.io');
      socket.emit('user_connected', username);
    });
    socket.on('user_connected', (userName) => {
      console.log('Este es el nombre del User:', userName);
    });
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
      from: user.username,
    };
    // socket.on()
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
              className={`my-2 p-2 table text-sm rounded-md ${message.from ? "bg-sky-700 ml-auto" : "bg-black"
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