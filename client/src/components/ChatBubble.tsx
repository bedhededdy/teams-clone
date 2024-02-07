import "./styles/ChatBubble.scss";

interface ChatBubbleProps {
    message: string;
    align: "start" | "end";
}

const ChatBubble: React.FC<ChatBubbleProps> = (props) => {
    return (
        <div style={{alignItems: props.align}} className="chat-bubble-container">
            <p className="chat-bubble-message">{props.message}</p>
        </div>
    )
}

export default ChatBubble;
