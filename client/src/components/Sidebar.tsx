import ChatPreview from "./ChatPreview";

import "./styles/Sidebar.scss";

interface SidebarProps {
    dummy?: string;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    return (
        <div className="sidebar-container">
            <ChatPreview />
            <ChatPreview />
            <ChatPreview />
            <ChatPreview />
            <ChatPreview />
            <ChatPreview />
            <ChatPreview />
            <ChatPreview />
            <ChatPreview />
            <ChatPreview />
            <ChatPreview />
        </div>
    )
}

export default Sidebar;
