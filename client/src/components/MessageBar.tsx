import { useCallback, useRef } from "react";

import "./styles/MessageBar.scss";

interface MessageBarProps {
    dummy?: string;
}

const MessageBar: React.FC<MessageBarProps> = (props) => {
    const messageBoxRef = useRef<HTMLInputElement>(null);

    const sendMessageCallback = useCallback(() => {
        messageBoxRef.current!.value = "";
    }, []);

    return (
        <div className="message-bar-container">
            <div>
                <input ref={messageBoxRef} type="text" className="message-box" placeholder="Type a message..." />
                <button className="send-button" onClick={sendMessageCallback}>Send</button>
            </div>
        </div>
    )
}

export default MessageBar;
