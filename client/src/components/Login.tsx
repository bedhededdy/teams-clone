
import { useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import "./styles/Login.scss";

const Login: React.FC = () => {
    const navigate = useNavigate();

    const usernameRef = useRef<HTMLInputElement>(null);

    const loginCallback = useCallback(() => {
        if (usernameRef.current?.value === "epinksto") {
            // FIXME: WE SHOULD NOT BE DOING THIS, WE SHOULD BE SOMEHOW PASSING
            // THIS BACK TO THE APP COMPONENT (MAYBE WE NEED A CALLBACK OR
            // SOMETHING OR A QUERY PARAM FOR THE CLIENT ROUTE)
            window.userId = usernameRef.current!.value;
            navigate("/chat");
        }
    }, []);

    return (
        <div className="login-container">
            <input ref={usernameRef} type="text" placeholder="Username" />
            <button onClick={loginCallback}>Login</button>
        </div>
    );
}

export default Login;
