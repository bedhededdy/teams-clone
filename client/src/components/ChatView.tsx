import ChatBubble from "./ChatBubble";

import "./styles/ChatView.scss"

interface ChatViewProps {
    dummy?: string;
}

const ChatView: React.FC<ChatViewProps> = (props) => {
    return (
        <div className="chat-view-container">
            <ChatBubble align="start"/>
            <ChatBubble align="end"/>

            <ChatBubble align="start"/>
            <ChatBubble align="end"/>
            <ChatBubble align="start"/>
            <ChatBubble align="end"/>
            <ChatBubble align="start"/>
            <ChatBubble align="end"/>
            <ChatBubble align="start"/>
            <ChatBubble align="end"/>
            <ChatBubble align="start"/>
            <ChatBubble align="end"/>
            <ChatBubble align="start"/>
            <ChatBubble align="end"/>
            <ChatBubble align="start"/>
            <ChatBubble align="end"/>
            <ChatBubble align="start"/>
            <ChatBubble align="end"/>
            <ChatBubble align="start"/>
            <ChatBubble align="end"/>
            <ChatBubble align="start"/>
            <ChatBubble align="end"/>
        </div>
    )
}

export default ChatView;
