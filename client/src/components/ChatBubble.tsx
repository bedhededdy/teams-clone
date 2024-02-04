import "./styles/ChatBubble.scss";

interface ChatBubbleProps {
    // message: string;
    // isUser: boolean;
    align: "start" | "end";
}

const ChatBubble: React.FC<ChatBubbleProps> = (props) => {
    return (
        <div style={{alignItems: props.align}} className="chat-bubble-container">
            <p className="chat-bubble-message">This is a sample chat</p>
        </div>
    )
}

export default ChatBubble;
