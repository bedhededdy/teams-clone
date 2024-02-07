import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import ChatWindow from "./components/ChatWindow";
import Sidebar from "./components/Sidebar";

import './App.scss';

interface AppProps {
  userId?: string; // FIXME: SHOULD BE REQUIRED
  token?: string;
}

const App: React.FC<AppProps> = (props) => {
  // FIXME: WE WILL NEED THE MESSAGES NONSENE UP HERE TO HANDLE UPDATING THE SIDEBAR
  //        BUT FOR NOW WE WILL HAVE IT IN THE CHAT WINDOW

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content-container">
        <Sidebar />
        <ChatWindow />
      </div>
    </div>
  )
}

export default App;
