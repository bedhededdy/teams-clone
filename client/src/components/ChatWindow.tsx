import { useEffect, useState, useRef } from "react";

import ChatView from "./ChatView";
import MessageBar from "./MessageBar";

import "./styles/Chatwindow.scss"

interface ChatWindowProps {
    dummy?: string;
}

function onBeforeUnload(event: BeforeUnloadEvent) {
    window.webSocket.close();
}

const ChatWindow: React.FC<ChatWindowProps> = (props) => {
    // FIXME: UPDATING THE ENTIRE LIST OF MESSAGES IS EXPENSIVE
    const [messages, setMessages] = useState<string[]>([]); // Can't use state because it gets wiped on the rerender so we need the ref too
    const messagesRef = useRef<string[]>([]);

    useEffect(() => {
        // FIXME: SEE IF WE CAN DO WITHOUT ATTACHING TO WINDOW
        window.webSocketUrl = "ws://localhost:8080";
        window.webSocket = new WebSocket(window.webSocketUrl);

        window.webSocket.onopen = (event) => {
          console.log("WebSocket connection established");
          window.webSocket.send("epinksto"); // Send the user ID
        }

        window.webSocket.onmessage = (event) => {
        //   console.log("WebSocket message received: ", event.data?.toString());
            // FIXME: BROKEN BECAUSE THE STATE OF THE MESSAGE VARIABLE
            //        IS NOT CONSISTENT WITH THE ACTUAL MESSAGES WE GET SINCE
            //        THIS IS NOT INSIDE A HOOK
            // setMessages([...messages, event.data?.toString()]);
            messagesRef.current = [...messagesRef.current, event.data?.toString()]
            setMessages(messagesRef.current);
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


    return (
        <div className="chat-window-container">
            <ChatView messages={messages} />
            <MessageBar />
        </div>
    )
}

export default ChatWindow;
