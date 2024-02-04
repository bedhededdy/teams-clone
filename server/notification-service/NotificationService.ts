import ws from "ws";
import http from "http";
import redis from "redis";

const WEB_SOCKET_PORT = 8080;

const httpServer = http.createServer();
const webSocketServer = new ws.Server({ server: httpServer });
const redisClient = redis.createClient();
const pubsub = redisClient.duplicate();

pubsub.subscribe("notification", (err, count) => {
    if (err) {
        console.error("Error subscribing to notification channel");
    }
});

pubsub.on("message", (channel, message) => {
    console.log(`Message received: ${message}`);
    webSocketServer.clients.forEach((client) => {
        client.send(message);
    });
})

webSocketServer.on("connection", (socket) => {
    console.log("Client connected");
});

webSocketServer.on("close", () => {
    console.log("Client disconnected");
});

httpServer.listen(WEB_SOCKET_PORT, () => {
    console.log(`Websocket server is running on port ${WEB_SOCKET_PORT}`);
});
