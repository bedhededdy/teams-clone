import ChatView from "./ChatView";
import MessageBar from "./MessageBar";

import "./styles/Chatwindow.scss"

interface ChatWindowProps {
    dummy?: string;
}

const ChatWindow: React.FC<ChatWindowProps> = (props) => {
    return (
        <div className="chat-window-container">
            <ChatView />
            <MessageBar />
        </div>
    )
}

export default ChatWindow;
