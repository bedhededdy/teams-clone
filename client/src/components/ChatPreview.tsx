import "./styles/ChatPreview.scss";

interface ChatPreviewProps {
    dummy?: string;
}

const ChatPreview: React.FC<ChatPreviewProps> = (props) => {
    return (
        <div className="chat-preview-container">
            <div className="chat-preview-img-container">
                <img></img>
            </div>
            <div className="chat-preview-text-container">
                <div className="chat-name-container">
                    <p className="chat-name">Adam Bear</p>
                </div>
                <div className="last-message-container">
                    <p className="last-message">Hey! How are you?</p>
                </div>
            </div>
        </div>
    )
}

export default ChatPreview;
