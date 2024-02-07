import { useCallback, useRef } from "react";

import "./styles/MessageBar.scss";

interface MessageBarProps {
    dummy?: string;
}

const MessageBar: React.FC<MessageBarProps> = (props) => {
    // FIXME: NEED TO DISABLE THE SEND BUTTON UNTIL THE MESSAGE HAS GONE THRU TO THE SERVER
    //        (UNTIL WE IMPLEMENT THE WAIT FOR MESSAGE TO SEND WHEN OFFLINE FUNCTIONALITY)
    const messageBoxRef = useRef<HTMLInputElement>(null);

    const sendMessageCallback = useCallback(() => {
        fetch("http://localhost:3000/api/test?userId=epinksto");

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
