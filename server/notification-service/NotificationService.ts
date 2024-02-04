// FIXME: FIGURE OUT IF WE CAN ENGINEER SOCKET.IO OUT OF THIS SO WE CAN JUST
//        USE RAW WEBSOCKETS FOR EVERYTHING AND REDUCE THE DEPENDENCIES

import ws from "ws";
import http from "http";
import { io } from "socket.io-client";

const wsUrl = "ws://localhost:8000"; // This is for connection to web server
const WEB_SOCKET_PORT = 8080; // This is for client

const userToSocketMap = new Map<string, ws>();

const socket = io(wsUrl);
socket.on("connection", () => {
    console.log("Notification service connected to web server");
});
socket.on("message", (msg) => {
    console.log("Received message from web server: ", msg);

    const userId = msg;
    const userSocket = userToSocketMap.get(userId);
    userSocket?.send("You got mail");
});

const httpServer = http.createServer();
const webSocketServer = new ws.Server({ server: httpServer });

webSocketServer.on("connection", (socket) => {
    console.log("Notification service connected to client");

    // Client should only ever send one message that establishes their identity
    socket.onmessage = (event) => {
        console.log("Notification service recieved message from client")
        const userId = event.data.toString();
        userToSocketMap.set(userId, socket);
    }

    socket.onclose = (event) => {
        console.log("Notification service disconnected from client");
    }
});

httpServer.listen(WEB_SOCKET_PORT, () => {
    console.log(`Websocket server is running on port ${WEB_SOCKET_PORT}`);
});
