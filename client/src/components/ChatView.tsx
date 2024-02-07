import { useEffect } from "react";

import ChatBubble from "./ChatBubble";

import "./styles/ChatView.scss"

interface ChatViewProps {
    dummy?: any;
    messages?: string[];
}

const ChatView: React.FC<ChatViewProps> = (props) => {
    useEffect(() => {
        console.log("rerendering chat view");
    }, []);

    return (
        <div className="chat-view-container">
            {props.messages?.map((message, index) => {
                return <ChatBubble key={index} align="start" message={message} />
            })}
        </div>
    )
}

export default ChatView;
