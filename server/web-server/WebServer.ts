import http from "http";
import express from "express";
import cors from "cors";
import ws from "ws";

const PORT = 3000;
const WEB_SOCKET_PORT = 8000;

const app = express();
const userToSocketMap = new Map<string, ws>();

app.use(cors()); // FIXME: SEE NESCLE FOR OPTIONS
app.use(express.json());

const httpServer = http.createServer();
const wss = new ws.Server({ server: httpServer });

wss.on("connection", (socket) => {
    socket.onmessage = ((event: ws.MessageEvent) => {
        const message = JSON.parse(event.data.toString());
        const type = message.type;
        const userId = message.userId;
        switch (type) {
        case "IDENTITY":
            userToSocketMap.set(userId, socket);
            break;
        case "MESSAGE":
            const userSocket = userToSocketMap.get(userId);
            if (userSocket) {
                // TODO: SAVE TO DB
                socket.send(JSON.stringify({ type: "ACK" }))
            } else {
                // FIXME: ERROR
            }
        default:
            break;
        }
    })

    socket.onopen = () => {
        console.log("Socket opened");
    }

    socket.onclose = () => {
        console.log("Socket closed");
    }

    socket.onerror = (error) => {
        console.error("Socket error", error);
    }
})

app.get("/", (req, res) => {
    // TODO: SERVE THE SITE
    res.json({ foobar: "Hello World"});
});

app.listen(PORT, () => {
    console.log(`Web server is running on port ${PORT}`);
});

httpServer.listen(WEB_SOCKET_PORT, () => {
    console.log(`Websocket server is running on port ${WEB_SOCKET_PORT}`);
});
