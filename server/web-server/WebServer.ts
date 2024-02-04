import express from "express";
import cors from "cors";
import { Server } from "socket.io";

const PORT = 3000;
const WEB_SOCKET_PORT = 8000;

// FIXME: SEE IF WE CAN NEST THE MESSAGING LOGIC IN THE CONNECTION TO THE SOCKET
//        TO AVOID THIS VARIABLE
var glo_socket: any;
const io = new Server(8000);
io.on("connection", (socket) => {
    console.log("Web server connected to notification service");
    glo_socket = socket;
})

const app = express();

app.use(cors()); // FIXME: SEE NESCLE FOR OPTIONS
app.use(express.json());


app.get("/api/test", (req, res) => {
    console.log("Message received from client, sending to notification service");
    glo_socket.emit("message", req.query.userId);
    res.json({ message: "API has sent a message to the notification service"});
});

app.get("/", (req, res) => {
    // TODO: SERVE THE SITE
    res.json({ foobar: "Hello World"});
});

app.listen(PORT, () => {
    console.log(`Web server is running on port ${PORT}`);
});
