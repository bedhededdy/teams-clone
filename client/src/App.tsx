import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import ChatWindow from "./components/ChatWindow";
import Sidebar from "./components/Sidebar";

import './App.scss';

interface AppProps {
  userId?: string; // FIXME: SHOULD BE REQUIRED
  token?: string;
}

function onBeforeUnload(event: BeforeUnloadEvent) {
  window.webSocket.close();
}

const App: React.FC<AppProps> = (props) => {
  useEffect(() => {
    // FIXME: SEE IF WE CAN DO WITHOUT ATTACHING TO WINDOW
    window.webSocketUrl = "ws://localhost:8080";
    window.webSocket = new WebSocket(window.webSocketUrl);

    window.webSocket.onopen = (event) => {
      console.log("WebSocket connection established");
    }

    window.webSocket.onmessage = (event) => {
      console.log("WebSocket message received", event.data?.toString());
    }

    window.webSocket.onclose = (event) => {
      console.log("WebSocket connection closed");
    }

    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      window.webSocket.close();
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, []);

  const myCallback = () => {
    fetch("http://localhost:3000/api/test");
  }

  return (
    <button onClick={myCallback}>Click me</button>
    // <div className="app-container">
    //   <Navbar />
    //   <div className="main-content-container">
    //     <Sidebar />
    //     <ChatWindow />
    //   </div>
    // </div>
  )
}

export default App;
